<template>
    <div>
        <div class="card-body">
            <div class='row'>
                <div class='col-12'>
                    <input  
                    v-model='search'
                    class='form-control m-1'
                    placeholder='Search for title, actor, date etc. For advance search use apostrophes i.e: "Older than 2015". You can also combine i.e: tom hanks "Older than 2015"'>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Button from '../../components/Button.vue'

export default {
  components: { Button },

    data(){
        return {
            search:''
        }
    },
    mounted(){
    },
    watch:{
        search(value){
            this.$emit("onSearch",value)
        },
    },
    methods:{
    }

}
</script>
<style computed>
.form-control{
    appearance:auto
}
</style>