<template>
    <div class="container">
        <div class="space"></div>
        <h1 class="text-center" style="align-items:center;">ACHIEVEMENT <span class="last-h1"></span></h1>
        <div class="row mt-5">
            <div class="col-md-7">
                <!---->
                <div id="achieve-slide" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div v-for="(i, index) in achieve" :key="index" class="carousel-item active">
                            <img :src="i.img" class="d-block w-100" :alt="i.title">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>{{ i.title }}</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#achieve-slide" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#achieve-slide" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <!---->
            </div>
            <div class="col-md-5">
                <h3>123</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'archievement',
    data() {
        return{
            achieve:[
                {
                    title: "Title 1",
                    detail: "Detail...",
                    img: "http://www.pyxisteam.com/wpdb/wp-content/uploads/2020/03/1300x867pix-%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%A7%E0%B8%B1%E0%B8%A5%E0%B8%A2%E0%B8%AD%E0%B8%94%E0%B9%80%E0%B8%A2%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A1-%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3-Parliament-Hackathon-scaled.jpg"
                },
                {
                    title: "Title 2",
                    detail: "Detail...",
                    img: "http://www.pyxisteam.com/wpdb/wp-content/uploads/2020/03/1300x867pix-%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%A7%E0%B8%B1%E0%B8%A5%E0%B8%A2%E0%B8%AD%E0%B8%94%E0%B9%80%E0%B8%A2%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A1-%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3-Parliament-Hackathon-scaled.jpg"
                }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.last-h1{
    display: inline-block;
    width: 8%;
    height: 2px;
    background: rgb(44, 62, 80);;
    margin-left: .3em;
    vertical-align: middle;
}
</style>
