<template>
    <div>
        <div  v-for='(content, index) in contents' :key="content.id">
            <card class='mb-1' :title="content.title" :subtitle="content.genre.genre">                
                <div class='row'>
                    <div class='col-3'>       
                        <img class='responsive-image' :src="'/img/'+content.cover_image">                        
                    </div>
                    <div class='col-9' > 
                        <div class='mb-4'>
                            <h5 class='title'>Description</h5>
                            <p>{{content.description}}</p>
                        </div>
                        <div class='mb-4'>
                            <h5 class='title'>Castings</h5>
                            <div v-for='actor in content.actors' :key="actor.id">
                                <p>{{actor.first_name}} {{actor.last_name}}</p>
                            </div>
                        </div>
                        <div class='mb-4'>
                            <h5 class='title'>Released</h5>
                            <p>{{content.release_date}}</p>
                        </div>
                        <div class='mb-4'>
                            <h5 class='title'>Rating</h5>
                            <div v-if='user'>        
                                <div v-if='content.user_rating'>
                                    <star-rating 
                                    :star-size="20" 
                                    @rating-selected="setRating($event,index)"
                                    v-model='content.user_rating.rating'
                                    :border-width="2"
                                    inactive-color="#fff"
                                    active-color="#f1c500"
                                    border-color="#ffc107" 
                                    :rounded-corners="true" 
                                    :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]">
                                    </star-rating>
                                </div>
                                <div v-else>
                                    <star-rating 
                                    :star-size="20"
                                    @rating-selected="setRating($event,index)" 
                                    :border-width="2" 
                                    inactive-color="#fff" 
                                    active-color="#f1c500" 
                                    border-color="#ffc107" 
                                    :rounded-corners="true" 
                                    :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]">
                                    </star-rating>
                                </div>
                                <div class='msg mt-2'>Average Rating: {{twoDecimals(content.ratings_avg_rating)}}</div>
                            </div>
                            <div v-else class='msg'>You must be logged in to vote!</div>
                        </div>
                    </div>
                </div>                
            </card>        
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import { mapGetters } from 'vuex'
import StarRating from 'vue-star-rating'
// https://github.com/Jebasuthan/vue-star-rating -> documentation for vue-star 


export default {
    props:['contents'], 
    components: { 
       StarRating,
    },
    data(){
        return {
            rating:''
        }
    },
    computed: mapGetters({
        user: 'auth/user'
    }),
    mounted(){ 
        console.log(this.contents)
    },
    methods:{
        //we can also return 2 decimals from the backend, however this leaves more flexibility
        twoDecimals(value){
            if(value){
                return Number.parseFloat(value).toFixed(2);
            }else{
                return "Not Yet Rated"
            }
        },
        setRating(rating,index){
            let self = this
            let contentId = self.contents[index].id
            axios.post('/api/rate-content',{
                rating:rating,
                id:contentId
            }).then(function (response) {
                // If the movie has not been rated ever there will be no user_ratig.
                // Maybe later on in the project we will need this, so we are adding it now. 
                // The code works even if we take away this part
                if(!self.contents[index].user_rating){
                    self.contents[index].user_rating = [{"rating":rating}]
                }

                // Updating global average rating of the movie
                self.contents[index].ratings_avg_rating = response.data

            }).catch(function (error) {
                alert(error);
            });
        }
        
    },
   

}
</script>

<style scoped>
.responsive-image {
  max-width: 100%;
  height: auto;
}
.title{
    color: #666666;
    font-size: 15px;
    margin: 0.35em 0 0.25em;
    padding: 0;
}
.title:before {
    content: "";
    border-bottom: 1px dotted #CCC;
    width: 88%;
    float: right;
    margin-top: 10px;
}

p{
    margin:0
}
.msg{
    font-style: italic;
    font-size:12px
}




</style>