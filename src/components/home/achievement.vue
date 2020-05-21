<template>
    <div class="container mb-5">
        <div class="space2"></div>
        <h1 class="text-center" style="align-items:center;">ACHIEVEMENT</h1>
        <div class="space2"></div>
        <div class="row">
            <div class="col-md-6">
                <h2 class="text-right" style="align-items:center;">REWARD <span class="last-h1"></span></h2>
                <b-carousel 
                    id="reward"
                    v-model="slide"
                    :interval="4000"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="480"
                    style="text-shadow: 1px 1px 2px #333;"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                >
                    <!-- Slides with custom text -->
                    <b-carousel-slide img-src="https://i.imgur.com/ozPwx5j.jpg">
                        <h5 class="carousel-text1">Parliament Hackathon : Participation Platform 2019</h5>
                    </b-carousel-slide>
                    <!-- Slides with custom text -->
                </b-carousel>
            </div>
            <div class="col-md-6">
                <div class="space"></div>
                <h2 class="text-left" style="align-items:center;"><span class="pre-h1"></span> SCHOLARSHIP</h2>
                <b-carousel 
                    id="scholarship"
                    v-model="slide"
                    :interval="3000"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="480"
                    style="text-shadow: 1px 1px 2px #333;"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                >
                    <!-- Slides with custom text -->
                    <b-carousel-slide img-src="https://i.imgur.com/PLtAZxH.jpg">
                        <h5 class="carousel-text2">Achieve The Depa Conceptual Fund</h5>
                    </b-carousel-slide>
                    <!-- Slides with custom text -->
                </b-carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
            sliding: null
        }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
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
