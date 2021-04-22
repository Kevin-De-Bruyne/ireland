<template>
  <div class="home">
     <tab-bar :Tab="Tab"></tab-bar>
     <div class="video_box">
       <video width="100%" :src="data.video" height="100%"  controls="controls" autoplay>
         <source :src="data.video" type="video/mp4">
       </video>
     </div>
    <div class="cow" style="margin-top:1px;">
    <img :src="data.banner[0].path" alt="">
    <div class="cow_wholes">
       <!-- <span class="cow_title">{{en==true?data.img_con[1].en_title:data.img_con[1].title}}</span> -->
    <span class="cow_contents" v-html="en==true?data.banner[0].en_content:data.banner[0].content"></span>
    </div>
   
    <!-- <span class="cow_content">{{echo(data.img_con[1].content)}}</span> -->
  </div>
     <!-- 我们的故事 -->
     <div class="super_box">
       <img :src="data.welcome_img" alt="">
       <div class="super_whole">
        <span  class="super_title">{{ en==true?data.en_welcome:data.welcome}}</span>
        <span v-html="en?data.en_wel_con:data.wel_con" class="super_content"></span>
       </div>
       
     </div>
     <!-- 我们的农场 -->
     <div class="product_box">
       <img :src="data.img_con[0].path" alt="">
       <div class="pro_whole">
          <div class="pro_title" v-if="en==true">{{data.img_con[0].en_title}}</div>
       <div class="pro_title" v-else><span>{{data.img_con[0].title}}</span></div>
       <span class="pro_content" v-html="en==true?data.img_con[0].en_content:data.img_con[0].content"></span>
       </div>
      
     </div>

  <!-- 我们的牛 -->
  <div class="cow">
    <img :src="data.img_con[1].path" alt="">
    <div class="cow_whole">
       <span class="cow_title">{{en==true?data.img_con[1].en_title:data.img_con[1].title}}</span>
    <span class="cow_content" v-html="en==true?data.img_con[1].en_content:data.img_con[1].content"></span>
    </div>
   
    <!-- <span class="cow_content">{{echo(data.img_con[1].content)}}</span> -->
  </div>
  <!-- 牛奶 -->
    <div class="sheep_box">
       <div class="sheep_c">
          <div class="sheep_l">
            <!-- <video width="100%" :src="data.video_text.path" height="100%"  controls="controls" autoplay> -->
              <!-- <source src=""> -->
           <!-- </video> -->
           <img :src="data.video_text.path" alt="">
          </div>
          <div class="sheep_r">
            <div class="sheep_r_content">
                <div class="sheep_title"><span>{{en==true?data.video_text.en_title:data.video_text.title}}</span></div>
                <div class="sheep_content" v-html="en==true?data.video_text.en_content:data.video_text.content"></div>
            </div>
          </div>
       </div>
       <div class="sheep_bottom">
         <div class="sheep_list" v-for="(item,index) in data.icon_con" :key="index">
           <div class="sheep_list_t">
             <img :src="item.path" alt="">
           </div>
           <div class="sheep_list_b">{{en?item.en_name:item.name}}</div>
         </div>
       </div>
     </div>
          <!-- 我们的羊 -->
     <!-- <swiper :options="swiperOption" ref="mySwiper">
	    <swiper-slide style="height:1200px;" v-for="(item,index) in data.banner" :key="index">
           <img :src="item.path" alt="" @click="show=true">
           <transition name="fade">
             <span v-if="show" v-html="en?item.en_content:item.content" style="font-size:26px;"></span>
           </transition> -->
         <!-- <transition name="fade"><div v-if="show">I'm Slide 1</div></transition> -->
      <!-- </swiper-slide> -->
   	 <!-- <div class="swiper-pagination"  slot="pagination"></div>
  </swiper> -->

     <!-- 底部 -->
     <bottom :Bottom="Bottom"></bottom>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TabBar from '../components/TabBar'
import bottom from '../components/Bottom'
import {getData} from '../i18n/lang/en.js'
export default {
  name: 'home',
  components: {
    TabBar,
    bottom
  },
  data(){
      return {
      data:{},
      Tab:{
        
      },
      en:true,
      Bottom:[],
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        effect:'fade', 
  //        fadeEffect: {
  //   crossFade: false,
  // },
        autoHeight: true,
        observer: true,
        observeParents: true,
      //    autoplay: {
      //     delay: 3000,
      //     stopOnLastSlide: false,
      //     disableOnInteraction: true,
      // },
        height: window.innerHeight,
        speed:1200,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      show:true
    }

  },
   computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  created(){
    console.log(Cookies.get('language'))
    if(Cookies.get('language')=='zh'){
              this.en=false
          }else{
              this.en=true
      }
    this.getData();
    // getData().then(res=>{
    //   this.Tab.nav_name=res.data.en_logo_text
    //   console.log(this.Tab.nav_name)
    // });
  },
  methods:{
       getData(){
        this.$ajax({
                url:'/index/index/index',
                data:{
                 
                }
            }).then(res=>{
              this.data=res.data
              console.log(this.data.video)
              this.Tab=res.data
              this.Bottom=res.data.bottom_menu
        })
    }
  }
}
</script>
<style scoped lang="scss">
    @-webkit-keyframes fadeInOut {
    0% {
        opacity:0;
     }
    25% {
        opacity:0.3;
    }
    50% {
        opacity: 0.5;    
    }
    75% {
        opacity:0.7;
    }
   100% {
        opacity:1;
    }
}
/deep/ .swiper-wrapper{
  width: 100vw;
  height: 51.25vw!important;
}
.swiper-slide-active{
  // max-height: 900px!important;
   width: 100vw;
   height: 51.25vw!important;
   overflow: hidden;
  // transform: translate3d(0px, -320px, 0px);
  // @media screen and (max-width: 830px) {
  //      height: 320px!important;
  //  }
  img{
    width: 100%;
    max-height: 100%;
  }
}
.swiper-slide{
   width: 100vw;
   position: relative;
  //  height:51.25vw!important;
  // max-height: 100%;
   overflow: hidden;
  // max-height: 900px!important;
  // transform: translate3d(0px, -320px, 0px);
  //  @media screen and (max-width: 830px) {
  //      height: 320px!important;
  //  }
  img{
    width: 100%;
    max-height: 100%;
  }
  span{
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    // font-size: 28px;
    font-weight: normal;
    // font-size: 26px;
    // font-size: 16px!important;
    color: white;
  }
}
 .fade-enter{
         opacity: 0;
        //  transform: translateY(-300px);
       }
  .fade-enter-to{
          opacity: 1;
        //  transform: translateY(0px);
       }
       .fade-enter-active{
         transition: all .6s;
       }
.slogan{

  margin-top: 100px;
  span{
      font-size: 25px;
  }
}
    .super_box{
      width: 100%;
      // margin-top: 55px;
      position: relative;
        .super_whole{
    position: absolute;
    transform: translate(-50%,-50%);
    // text-align: left;
    line-height: 30px;
    width: 70%;
    top: 50%;
    display: flex;
    // align-items: center;
    align-items: center;
    flex-direction: column;
    left: 50%;
    // font-size: 28px;
    // font-weight: normal;
    // font-size: 26px;
    // font-size: 16px!important;
    color: white;
    .super_title{
      white-space: nowrap;
      font-size: 28px;
      font-weight: bold;
    }
    .super_content{
      text-align: left;
    }
  }
      img{
        width: 100%;
        max-height: 100%;

      }
    }
      .product_box{
      position: relative;
      width: 100%;
      img{
        width: 100%;
        max-height: 100%;

      }
      .pro_whole{
        transform: translate(-50%,-50%);
        position: absolute;
        top: 70%;
        left: 50%;
        width: 100%;
          display: flex;
          align-items: center;
        flex-direction: column;
      }
      .pro_title{
        font-size: 28px;
        font-weight: bold;
       width:70%;
       margin: 0 auto;
       text-align: justify;
      //  text-align: center;
        color: white;
        display: flex;
        
      -webkit-animation-name: fadeInOut;
     -webkit-animation-duration: 4s;
     transition: all .4s linear;
      }
      .pro_content{
        font-size: 26px;
        margin-top: 25px;
        color: white;
        width: 70%;
        height: 490px;
        // line-height: 0px;
        position: relative;
        text-align: left;
        overflow: hidden;
      -webkit-animation-name: fadeInOut;
     -webkit-animation-duration: 4s;
    //  text-align: left;
     transition: all .4s linear;
    //  p span{
    //    transform: translate(-50%,-50%);
    //    top: 50%;
    //    left: 50%;
    //    position: absolute;
    //  }
     p{
       line-height: 0;
     }
      }
    }
    .cow{
      width: 100%;
      position: relative;
      img{
        width: 100%;
        max-height: 100%;

      }
      .cow_whole{
          position: absolute;
        margin-top: 25px;
        transform: translate(-50%,-50%);
        top:58%;
         width: 100%;
        left: 50%;
        align-items: center;
        display: flex;
        flex-direction: column;
      }
            .cow_wholes{
          position: absolute;
        margin-top: 25px;
        transform: translate(-50%,-50%);
        top:50%;
         width: 100%;
        left: 50%;
        align-items: center;
        display: flex;
        flex-direction: column;
      }
      .cow_title{
        font-weight: bold;
        color:white;
        font-size: 28px;
      -webkit-animation-name: fadeInOut;
     -webkit-animation-duration: 4s;
     transition: all .4s linear;
      }
        .cow_content{
            //  font-size: 26px;
        // margin-top: 25px;
        color: white;
        text-align: left;
        width: 70%;
        height: 490px;
        margin-top: 100px;
        // line-height: 0!important;
        // text-overflow: ellipsis;
        overflow: hidden;
        // line-height: 0;
        // line-height: 10px;
        // white-space: nowrap;
        display: flex;
        flex-direction: column;
        // align-items: center;
        // justify-content: center;
        // align-items: center;
        // min-width: 1000px;
      -webkit-animation-name: fadeInOut;
     -webkit-animation-duration: 4s;
    //  text-align: left;
     transition: all .4s linear;
      }
        .cow_contents{
        font-size: 26px;
        margin-top: 25px;
        color: white;
        text-align: left;
        width: 70%;
        max-height: 490px;
        // line-height: 0;
        // text-overflow: ellipsis;
        overflow: hidden;
        // line-height: 0;
        // white-space: nowrap;
        display: flex;
        flex-direction: column;
        // align-items: center;
        justify-content: center;
        // align-items: center;
        // min-width: 1000px;
      -webkit-animation-name: fadeInOut;
     -webkit-animation-duration: 4s;
    //  text-align: left;
     transition: all .4s linear;
      }
    }
    .sheep_box{
      // width: 100%;
      padding:  20px 7%;
      // height: 450px;
      background-image: linear-gradient(to bottom,#ededed,rgb(254,254,254));
      .sheep_c{
        width: 100%;
       height: 450px;
        // background-color:red;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        @media screen and (max-width: 830px) {
       height: 150px;

   }
   .sheep_l{
         width: 50%;
         height: 100%;
         display: flex;
         align-items: center;
         justify-content: center;
         img{
           max-width: 100%;
           max-height: 100%;
         }
       }
       .sheep_r{
         width: 50%;
         display: flex;
         position: relative;
         flex-direction: column;
         .sheep_r_content{
           padding-left: 25px;
           position: absolute;
           width: 100%;
           transform: translate(-50%,-50%);
           top: 50%;
           left: 50%;
           display: flex;
           flex-direction: column;
           .sheep_title{
           width: 100%;
           display: flex;
           justify-content: center;
           font-size: 22px;

         }
         .sheep_content{
           font-size: 18px;
          // max-height: 310px;
          height: 400px;
              display: flex;
              text-align: left;
             -webkit-box-orient: vertical;
               -webkit-line-clamp:16;
          overflow: hidden;
          // text-overflow:ellipsis; 
           align-items: center;
           flex-direction: column;
         }
         }
      
       }
      }

      .sheep_bottom{
        display: flex;
        // flex: 1;
        margin-top: 35px;
        justify-content:space-around;
        .sheep_list{
          display: flex;
          // flex: 1;
          flex-direction: column;
          align-items: center;
          .sheep_list_t{
            width: 60%;
            margin: 0 15px;
            
            height: 140px;
            // background-color: red;
            img{
              max-width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .sheep_list_b{
            margin-top: 15px;
            font-size: 14px;
          }
        }
      }
    }
      .swiper-container {
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    .swiper-slide {
        text-align: center;
        // font-size: 18px;
        // background: #fff;
    }
    .video_box{
      width: 100%;
      margin-top: 83px;
      height: 600px;
      position: relative;
      span{
        position: absolute;
        transform: translate(-50%,-50%);
        top: 50%;
        left: 50%;
        font-size: 26px;
      }
      img{
        width: 100%;
        height: 100%;
      }
      video{
        width: 100%;
        height: 100%;
      }
    }
</style>
