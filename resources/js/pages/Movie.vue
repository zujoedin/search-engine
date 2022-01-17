<template>
    <div class="col-lg-10 m-auto">
   
        <div class="filters mb-4">
            <Search @onSearch='setSearch($event)'/>
        </div>    
        <div class="row">
            <div v-if='loading' v-cloak class='text-center'>
                <div class="fa-3x">
                    <i class="fas fa-circle-notch fa-spin"></i>
                </div>  
            </div>
            <div v-if='contents.length>0'>
                <ContentList :contents='contents'/>
            </div>            
            <div v-else v-cloak>
                <h4 class='text-center'>No contents found!</h4>
            </div>
            <button class='btn btn-primary mt-2 btn-block' v-if='contents.length >= pagination' @click="loadMore()">Load More...</button>
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
            loadMoreInit:true,
            loadMoreSearch:true,
            pagination:5,
            initialisedContents:'',
            search:'',
            timer:0,
            loading:false,
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
                type:type,
                pagination:self.pagination
            }).then(function (response) {
                self.contents = response.data                
                self.loading = false
                self.loadMoreSearch = true
                self.loadMoreInit = false
            }).catch(function (error) {
                console.log(error);
            });
        },
        initializeContent(type){
            let self = this
            axios.post('/api/initialize-content',{
                type:type,
                pagination:self.pagination
            }).then(function (response) {
                console.log(response.data)
                self.contents = response.data.data
                self.loadMoreSearch = false
                self.loadMoreInit = true
            }).catch(function (error) {
                console.log(error);
            });
        },
        setSearch(value){            
            this.search = value
            if(this.search.length==0){                
                this.initializeContent('movie')
                // this.contents = this.initialisedContents
            }else if(this.search.length>2){
                // timer implemented because we dont want the user to overload the search while typing
                if (this.timer) {
                    clearTimeout(this.timer);
                    this.timer = null;
                }
                this.timer = setTimeout(() => {
                    this.searchContent('movie',this.search)
                }, 800);
                
                // this.contents = this.searchContents
            }
        },
        loadMore(){
            this.pagination = this.pagination + 5
            if(this.loadMoreInit){
                this.initializeContent('movie')
            }else{
                this.searchContent(type,this.search)
            }
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