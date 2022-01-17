<template>
  <div class="row">
    <div class="col-lg-7 m-auto">     
      <card title="Register">
        <form @submit.prevent="checkPassword" @keydown="form.onKeydown($event)">
          <!-- Name -->
          <div class="mb-3 row">
            <label class="col-md-3 col-form-label text-md-end">Name</label>
            <div class="col-md-7">
              <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name">
              <has-error :form="form" field="name" />
            </div>
          </div>

          <!-- Email -->
          <div class="mb-3 row">
            <label class="col-md-3 col-form-label text-md-end">Email</label>
            <div class="col-md-7">
              <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email">
              <has-error :form="form" field="email" />
            </div>
          </div>

          <!-- Password -->
          <div class="mb-3 row">
            <label class="col-md-3 col-form-label text-md-end">Password</label>
            <div class="col-md-7">
              <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password">
              <has-error :form="form" field="password" />
            </div>
          </div>

          <!-- Password Confirmation -->
          <div class="mb-3 row">
            <label class="col-md-3 col-form-label text-md-end">Confirm Password</label>
            <div class="col-md-7">
            <input v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="form-control" type="password" name="password_confirmation">
            <has-error :form="form" field="password_confirmation" />
            <p class="error" v-if='!password_has_width'>Password is not longer than 6 characters</p>
            </div>
          </div>

          <div class="mb-3 row">
            <div class="col-md-7 offset-md-3 d-flex">
              <!-- Submit Button -->
              <v-button :loading="form.busy">
                Register
              </v-button>

            </div>
          </div>
        </form>
      </card>
    </div>
  </div>
</template>

<script>
import Form from 'vform'

export default {
 

  middleware: 'guest',



  data: () => ({
    form: new Form({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }),
    mustVerifyEmail: false,
    password_has_width: true,
  }),

  methods: {

    _checkPassword: function() {
      this.password_has_width=/.{6,}/.test(this.form.password)
      if (this.password_has_width) {
        this.register()
      }
    },
    get checkPassword() {
      return this._checkPassword
    },
    set checkPassword(value) {
      this._checkPassword = value
    },

    async register () {
      // Register the user.
      const { data } = await this.form.post('/api/register')

      // Must verify email fist.
      if (data.status) {
        this.mustVerifyEmail = true
      } else {
        // Log in the user.
        const { data: { token } } = await this.form.post('/api/login')

        // Save the token.
        this.$store.dispatch('auth/saveToken', { token })

        // Update the user.
        await this.$store.dispatch('auth/updateUser', { user: data })

        // Redirect home.
        this.$router.push({ name: 'home' })
      }
    }
  }
}
</script>
<style scoped>
.error{
    margin:0;
    padding:0 0 5px 0;
    color:#d91148
}
</style>