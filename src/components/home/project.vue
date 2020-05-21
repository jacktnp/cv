<template>
    <div class="container">
        <h1 class="text-center" id="project" style="align-items:center;"><span class="pre-h1"></span>SKILLS & PROJECT</h1>
        <div class="text-center"><small>All project based on HTML CSS and Javascript. (click to see my project.)</small></div>
        <div class="row my-5">
            <div v-for="(i, index) in project" :key="index" class="col-md-3 d-flex align-items-stretch mb-4">
                <div class="card">
                    <a :href="i.link" target="_blank"><img class="card-img-top" :src="require(`@/assets/project/${i.img}`)"></a>
                    <div class="card-body text-center">
                        <h5 class="card-title" v-html="i.name"></h5>
                    </div>
                    <div class="card-footer text-center">
                        <small v-for="(j, index) in i.framework" :key="index" class="badge badge-pill badge-secondary mr-1">{{ j }}</small>
                    </div>
                </div>
            </div>
        </div>
        <img src="https://sopoat0101.github.io/web-royal-rainmaking-project/assets/home/svg/LineArt-%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87-%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B9%81%E0%B8%A3%E0%B8%81.svg" style="width: 20vw;position:absolute;bottom:-15em;left:-2em;">
    </div>
</template>

<script>
export default {
    name: 'project',
    data() {
        return{
            project: [
                {
                    name: "JO!NTY",
                    img: "jointy.jpg",
                    link: "#",
                    framework: ['Bootstrap', 'PHP', 'MySQL']
                },
                {
                    name: "Nakhonpratom Travel",
                    img: "nakhon.jpg",
                    link: "https://jacktnp.github.io/multi/",
                    framework: ['Bootstrap']
                },
                {
                    name: "Loofer",
                    img: "loofer.png",
                    link: "#",
                    framework: ['Bootstrap', 'Firebase']
                },
                {
                    name: "สันติ หนังคลาสสิค",
                    img: "santi.jpg",
                    link: "https://base.jacktnp.com/arch/",
                    framework: ['Bootstrap']
                },
                {
                    name: "Graphico",
                    img: "graphico.png",
                    link: "https://base.jacktnp.com/graphico/",
                    framework: ['-']
                },
                {
                    name: "Dormlab",
                    img: "dormlab.png",
                    link: "#",
                    framework: ['Bootstrap', 'Django (Python)']
                },
                {
                    name: "SmoIT <small>@ITKMITL</small>",
                    img: "smoit.png",
                    link: "https://smo.it.kmitl.ac.th/",
                    framework: ['Wordpress']
                },
                {
                    name: "ITFreshy2019 <br><small>(Mobile First)</small>",
                    img: "itfreshy.png",
                    link: "#",
                    framework: ['Bootstrap', 'Firebase', 'Vuejs']
                },
                {
                    name: "Cineario",
                    img: "cineario.jpg",
                    link: "https://tintinap.github.io/Cineario/",
                    framework: ['Bootstrap', 'Vuejs']
                },
                {
                    name: "EECi",
                    img: "eeci.png",
                    link: "https://jacktnp.github.io/eeci/",
                    framework: ['Bootstrap']
                },
                {
                    name: "ITGadgetMuseum <small>(Front-end)</small>",
                    img: "ggmuseum-frontend.png",
                    link: "https://gadgetmuseum.it.kmitl.ac.th/",
                    framework: ['Vue.js', 'Bootstrap']
                },
                {
                    name: "ITGadgetMuseum<br> <small>(UI for Back-end)</small>",
                    img: "ggmuseum-backend.png",
                    link: "https://projectbase01.herokuapp.com/admin/users/login",
                    framework: ['Node.js', 'Express.js', 'Bootstrap']
                },
            ]
        }
    },
    methods:{
        getImgUrl(img) {
            return require('@/assets/project/' + img)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pre-h1{
    display: inline-block;
    width: 7%;
    height: 2px;
    background: rgb(44, 62, 80);;
    margin-right: .75em;
    vertical-align: middle;
}
</style>
