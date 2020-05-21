<template>
    <div class="swipers">
        <swiper
        class="swiper"
        ref="swipers"
        v-for="i in 1"
        :key="i"
        :options="swiperOption"
        >
            <swiper-slide v-for="banner in banners" :key="banner"><img :src="banner" class="w-100"></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
 
<script>
export default {
    name: 'swipers',
    title: 'Multiple swipers',
    props: {
        title: String,
        banners: Array
    },
    data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    mounted() {
      // console.log('swipers', this.$refs.swipers)
    }
}
</script> 
