<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <router-link :to="{ name: user ? 'movies' : 'movies' }" class="navbar-brand">
        {{ appName }}
    </router-link>
    <div class="container-lg">
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link :to="{ name: 'movies' }" class="nav-link" active-class="active">
                Movies
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'shows' }" class="nav-link" active-class="active">
                TV Shows
                </router-link>
            </li>
       
        </ul>
        <ul class="navbar-nav ms-auto">
          <li v-if="user" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark"
               href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
               {{ user.name }}
            </a>
            <div class="dropdown-menu">
              <router-link :to="{ name: 'settings.profile' }" class="dropdown-item ps-3">
                <fa icon="cog" fixed-width />
                Settings
              </router-link>
              <div class="dropdown-divider" />
              <a href="#" class="dropdown-item ps-3" @click.prevent="logout">
                <fa icon="sign-out-alt" fixed-width />
                Logout
              </a>
            </div>
          </li>
          <!-- Guest -->
          <template v-else>
            <li class="nav-item">
              <router-link :to="{ name: 'login' }" class="nav-link" active-class="active">
                Login
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'register' }" class="nav-link" active-class="active">
                Register
              </router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return { 
            appName: window.config.appName,
            notifications:0
        }
    },
    computed: mapGetters({
        user: 'auth/user'
    }),

    methods: {
        async logout () {
            // Log out the user.
            await this.$store.dispatch('auth/logout')
            // Redirect to login.
            this.$router.push({ name: 'login' })
        },
    }
}
</script>

<style scoped>

.navbar{
    background: #5BB7D6 !important
}

.container {
  max-width: 1100px;
}

.navbar-brand {
    color: #fff;
    margin: -10px 20px -10px 0px;
    height: 56px;
    background: #5BB7D6;
    padding: 12px 20px;
    transition: 0.3s;
    border-right: 2px dashed #fff;
}
.navbar-brand:hover {
    color: #fff;
    margin: -10px 20px -10px 0px;
    height: 56px;
    background: #fff;
    padding: 12px 20px;
    cursor:default;
    color:#5BB7D6;
}
.navbar-brand:visited,.navbar-brand:focused {
    color: #fff;  
}

.router-link-exact-active.active{
    color:#fff !important
}
</style>
