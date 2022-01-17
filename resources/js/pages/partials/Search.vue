<template>
    <div>
        <div class="card-body">
            <div class='row'>
                <div class='col-12'>
                    <input  
                    v-model='search'
                    class='form-control m-1'
                    placeholder='Search for title, actor, description etc. For advance search use apostrophes i.e: "N stars". You can also combine i.e: hanks "N stars"'>
                    <div class='search-legend'><small>Search phrases accepted: "N stars", "at most n stars","at least n stars","before n", "after n","older than n years","younger than n years"</small></div>
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
.search-legend{
    padding: 0px 10px;
    color: #84757d;
    font-style: italic;
}
</style>