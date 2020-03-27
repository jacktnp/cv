<template>
<section class="head-cover">
    <div class="cover">
        <!-- Navbar -->
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark pt-4">
                <a class="navbar-brand d-block d-md-none" href="#">LOGO</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">ABOUT ME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">PROJECT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active d-none d-sm-block" href="#">LOGO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">SKILL</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ACHIEVEMENT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <!-- Cover -->
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-6 d-none d-md-block">
                    <img src="../assets/jacktnp.svg" class="w-50">
                </div>
                <div class="col-md-6">
                    <h1 class="title"><span>THANAPON</span><br><span style="font-weight: 100;">WONGPRASERT</span></h1>
                    <br>
                    <p class="intro">
                        นายธนพนธ์ วงศ์ประเสริฐ (แจ็ค) ศึกษาอยู่ชั้นปีที่ 3 คณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง<br>แขนงวิชาวิศวกรรมซอฟต์แวร์ (Software Engineering)<br>สนใจด้านการพัฒนาเว็บไซต์ฝั่งหน้าบ้าน (Front-end Developer)<br>และพร้อมที่จะเรียนรู้สิ่งใหม่ ๆ อยู่เสมอ 
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(0, 110, 173, 0.692)" fill-opacity="1" d="M0,32L120,64C240,96,480,160,720,170.7C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </div>
    <div class="wave" style="z-index:33;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L60,202.7C120,181,240,139,360,138.7C480,139,600,181,720,213.3C840,245,960,267,1080,250.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>
</section>
</template>

<script>
export default {
  name: 'cover',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cover{
    width: 100%;
    height: 35rem;
    background: #0099ff; /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #1488cc, #2b32b2); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #1488cc, #2b32b2); /*W3C IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+*/
}
.nav-link{
    /* color: #fff !important; */
    margin: 0em .35em;
    font-weight: 600;
    border-radius: .3em;
    transition: .5s;
    text-align: center;
}
.nav-link:hover, .nav-link.active{
    background: rgba(255, 255, 255, 0.911);
    color: #1488cc !important;
    transform: scale(1.05);
}
.title{
    color: #fff;
    font-weight: bold;
    text-align: right;
}
.intro{
    color: rgb(221, 221, 221);
    text-align: right;
}
.wave{
    position: absolute;
    bottom:9em;
    width: 100%;
    transition: .25s;
}

@media screen and (max-width: 650px) {
    .title, .intro{
        text-align: center;
        z-index: 99;
    }
    .wave{
        display: none;
    }
}

</style>
