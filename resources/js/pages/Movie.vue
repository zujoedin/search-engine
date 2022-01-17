<template>
    <div class="col-lg-10 m-auto">
   
        <div class="filters mb-4">
            <Search @onSearch='setSearch($event)'/>
        </div>    
        <div class="row">
            <div v-if="loading" v-cloak class='text-center'>
                <div class="fa-3x">
                    <i class="fas fa-circle-notch fa-spin"></i>
                </div>  
            </div>
            <div v-if='contents.length>0'>
                <ContentList  :contents='contents'/>
            </div>            
            <div v-else>
                <h4 class='text-center'>No contents found!</h4>
            </div>
        </div> 
    </div>
</template>

<script>
import axios from 'axios'
import ContentList from '~/pages/partials/ContentList'
import Search from '~/pages/partials/Search'

export default {
    components: {
        Search,
        ContentList
    },
    data(){
        return {
            contents:'',
            searchContents:'',
            initialisedContents:'',
            timer:0,
            loading:false
        }
    },    
    mounted(){
        this.initializeContent('movie')
    },
    methods: {
        searchContent(type,search){
            let self = this
            self.loading = true
            axios.post('/api/search-content',{
                search:search,
                type:type
            }).then(function (response) {
                self.contents = response.data                
                self.loading = false
            }).catch(function (error) {
                console.log(error);
            });
        },
        initializeContent(type){
            let self = this
            axios.post('/api/initialize-content',{
                type:type
            }).then(function (response) {
                self.contents = response.data
            }).catch(function (error) {
                console.log(error);
            });
        },
        setSearch(value){            
           
            if(value.length==0){                
                this.initializeContent('movie')
                // this.contents = this.initialisedContents
            }else if(value.length>2){
                // timer implemented because we dont want the user to overload the search while typing
                if (this.timer) {
                    clearTimeout(this.timer);
                    this.timer = null;
                }
                this.timer = setTimeout(() => {
                    this.searchContent('movie',value)
                }, 800);
                
                // this.contents = this.searchContents
            }
        },
    },
    
    
}

</script>
<style computed>
.filters{
    background:#fff;
    border:1px solid #ddd;
    border-radius:4px
}
.btn-block {
    display: block;
    width: 100%;
}
.form-control{
    background:#fff
}

</style>