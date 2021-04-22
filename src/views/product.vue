<template>
  <div class="product">
      <tab-bar :Tab="Tab"></tab-bar>
      <!-- 产品轮播图 -->
    <el-carousel indicator-position="outside">
    <el-carousel-item v-for="(item,index) in data.carousel " :key="index">
      <img :src="item.path" alt="">
      <h3 class="medium"><span style="font-size:30px;font-weight:bold;">{{en?item.en_content:item.content}}</span></h3>
    </el-carousel-item>
  </el-carousel>
  <!-- 产品1介绍 -->
  <div v-for="(item,indexs) in data.above" :key="indexs" class="product11">
    <!-- <div class="product1_tro">
    <div class="product1_tro_t">
      <span>{{en?item.en_name:item.name}}</span>
    </div>
    <div class="product1_tro__b1">
      <img :src="item.path" alt="">
      <div class="text_content">
        <span>{{en?item.en_content:item.content}}</span>
      </div>
      
    </div>
  </div> -->
  <!-- 产品1产品简介 -->
  <!-- <div class="product1_tros" v-for="(item,index) in item.pri_cov" :key="index">
    <img :src="item.img" alt="">
    <span>{{item.content}}</span>
  </div> -->
  <span class="intro_detail"></span>
   <div class="product1_tro__b" v-for="(item,index) in item.pri_cov" :key="index">
      <img :src="item.img" alt="">
      <div class="text_content">
        <span class="text_content_t" style="font-size:24px;font-weight:bold;">
          {{en?data.above[indexs].en_name:data.above[indexs].name}}
        </span>
        <div v-html="en?item.en_content:item.content"></div>
      </div>
      
    </div>
    <bottom :Bottom="Bottom"></bottom>
  </div>
  </div>
  
</template>

<script>
import Cookies from 'js-cookie'
import TabBar from '../components/TabBar'
import bottom from '../components/Bottom'
export default {
    data(){
        return{
          Tab:[],
          data:{},
          en:true,
          Bottom:[]
        }
    },
    created(){
        if(Cookies.get('language')=='zh'){
              this.en=false
          }else{
              this.en=true
          }
      this.getHome();
      this.getData();
    },
    components:{
        TabBar,
        bottom
    },
    computed:{
      
    },
    methods:{
      getHome(){
         this.$ajax({
                url:'/index/index/index',
                data:{
                 
                }
            }).then(res=>{
              // this.data=res.data
              console.log(this.data.video)
              this.Tab=res.data
              this.Bottom=res.data.bottom_menu
        })
      },
      getData(){
         this.$ajax({
                url:'/index/index/product',
                data:{
                 
                }
            }).then(res=>{
              this.data=res.data
        })
      }
    }
}
</script>

<style lang="scss" scoped>


.product11{
  padding-bottom: 20px;

}
    .product1_tro__b{
      // width: 100%;
      position: relative;
      padding: 0 2%;
      // height: 600px;
      display: flex;
      flex-direction: row;
      margin-top: 40px;
      justify-content: space-between;
      img{
        max-width: 80%;
        max-height:290px;
        padding-left: 70px;
        // padding: 0 70px;
      }
      .text_content{
        width:30%;
        // padding-left: 15px;
        text-align: left;
        display: flex;
        height: 255px;
        font-size: 12px;
        overflow: hidden;
        padding-right: 70px;
        // padding-left: 30px;
        flex-direction: column;
        align-items: center;
        //  padding: 0 70px;
           @media screen and (max-width: 1024px) {
      height: 230px!important;
   }
    @media screen and (max-width: 1280px) {
      height: 240px!important;
   }
      @media screen and (max-width: 1366px) {
      height: 250px!important;
   }
       @media screen and (max-width: 1440px) {
      height: 270px!important;
   }
        @media screen and (max-width: 1600px) {
      height: 300px!important;
   }
           @media screen and (max-width: 1680px) {
      height: 320px!important;
   }
             @media screen and (max-width: 1920px) {
      height: 360px!important;
   }
        span{
       text-align: left;
      //  letter-spacing: 2px;
      color:black;
      
      font-size: 16px;
    -webkit-animation-name: fadeInOut;
     -webkit-animation-duration: 4s;
     transition: all .4s linear;
      }
      }
  
    }
.intro_detail{
  font-size: 25px;
  font-weight: bold;
  line-height: 70px;
  // margin-top: 25px;
}
/deep/ .el-carousel__container{
  // height: 400px!important;
       @media screen and (min-width: 480px) {
        height: 400px!important;
      
   }
}
/deep/ .el-carousel__item--card.is-active{

}
/deep/ .el-carousel__arrow{
  height: 60px;
  width: 60px;
}
 /deep/ .el-carousel{
   margin-top: 83px;
 }
 .carousel{
   margin-top: 40px;
 }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    // opacity: 0.75;
    transform: translate(-50%,-50%);
    position: absolute;
    top:50%;
    left: 50%;
    color: white;
    line-height: 350px;
    margin: 0;
        -webkit-animation-name: fadeInOut;
     -webkit-animation-duration: 4s;
    //  transition: all .4s linear;
  }

  .el-carousel__item  img{
   width: 100%;
    height: 100%;
  }
  .el-carousel__item:nth-child(2n) {
    // background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    // background-color: #d3dce6;
  }
  .product1_tro{
    display: flex;
    margin-top: 60px;
    flex-direction: column;
    // margin-bottom: 80px;
    .product1_tro_t{
      text-align: center;
      font-size: 26px;
      font-weight: bold;

    }
    .product1_tro__b1{
      width: 100%;
      position: relative;
      // height: 600px;
      margin-top: 40px;
      img{
        max-width: 100%;
        max-height: 100%;
      }
      .text_content{
        display: flex;
        flex-direction: column;
        width: 80%;
        // height: 656px;
          position: absolute;
      transform: translate(-50%,-50%);
      top: 50%;
     
      // padding: 15px;
      left:50%;
        span{
       text-align: left;
      //  letter-spacing: 2px;
      color: white;
      font-size: 25px;
    -webkit-animation-name: fadeInOut;
     -webkit-animation-duration: 4s;
     transition: all .4s linear;
      }
      }
  
    }
  }
  .product1_tros{
    width: 100%;
    position: relative;
    img{
      width: 100%;
      max-height: 100%;
    }
    span{
      position: absolute;
      transform: translate(-50%,-50%);
      top: 50%;
      left:50%;
      color: white;
      font-size: 25px;
    -webkit-animation-name: fadeInOut;
     -webkit-animation-duration: 4s;
     transition: all .4s linear;
    }
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

  }
</style>