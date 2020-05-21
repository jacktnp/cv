<template>
    <div class="container mb-5">
        <div class="space2"></div>
        <h1 class="text-center" style="align-items:center;">ACHIEVEMENT</h1>
        <div class="space2"></div>
        <div class="row">
            <div class="col-md-6">
                <h2 class="text-right" style="align-items:center;">REWARD <span class="last-h1"></span></h2>
                <swiper title="test1" :banners="swip1.banners"></swiper>
            </div>
            <div class="col-md-6">
                <div class="space"></div>
                <h2 class="text-left" style="align-items:center;"><span class="pre-h1"></span> SCHOLARSHIP</h2>
                <swiper title="test2" :banners="swip2.banners"></swiper>
            </div>
        </div>
    </div>
</template>
 
<script>
import swiper from "@/components/swiperjs/swiper.vue";

export default {
    components: {
        swiper
    },
    data(){
        return{
            swip1: {
                title: 'My Journey with Vue',
                banners: [
                    "https://i.imgur.com/ozPwx5j.jpg"
                ]
            },
            swip2: {
                title: 'My Journey with Vue2',
                banners: [
                    "https://i.imgur.com/PLtAZxH.jpg"
                ]
            }
        }  
    }
}
</script> 

<style scoped>
.pre-h1{
    display: inline-block;
    width: 7%;
    height: 2px;
    background: rgb(44, 62, 80);;
    margin-right: .75em;
    vertical-align: middle;
}
.last-h1{
    display: inline-block;
    width: 8%;
    height: 2px;
    background: rgb(44, 62, 80);;
    margin-left: .3em;
    vertical-align: middle;
}
.carousel-text1{
    background: rgba(0, 0, 0, 0.747);
    width: auto;
    padding: .25em;
}
.carousel-text2{
    color: #000;
    background: rgba(255, 255, 255, 0.747);
    width: auto;
    padding: .25em;
}
</style>
