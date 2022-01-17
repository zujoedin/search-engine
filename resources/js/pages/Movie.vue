<template>
    <div class="col-lg-10 m-auto">
          <div class="filters mb-4">
            <Search @onSearch='setSearch($event)'/>
        </div>    
        <div class="row">
            <ContentList :contents='contents'/>
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
            initialisedContents:''
        }
    },    
    mounted(){
        this.initializeContent('movie')
    },
    methods: {
        searchContent(type,search){
            let self = this
            axios.post('/api/search-content',{
                search:search,
                type:type
            }).then(function (response) {
                self.contents = response.data
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
                console.log(self.contents)
            }).catch(function (error) {
                console.log(error);
            });
        },
    },
    setSearch(value){
        if(value.lenght<2){
            this.contents = this.initialisedContents
        }else if(value.lenght>2){
            searchContent('movie',value)
            this.contents = this.searchContents
        }
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