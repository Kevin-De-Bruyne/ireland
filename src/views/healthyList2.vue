<template>
   <div class="product2">
       <tab-bar :Tab="Tab"></tab-bar>
       <!-- 标题 -->
       <div class="whole">
           <!-- 第一栏 -->
         <div class="top" v-for="(item,index) in data.health" :key='index'>
             <div class="top_whole">
               <div class="top_t">
               <div class="left_box">
                 <img :src="item.path" alt="">
             </div>
             <div class="right_box">
                 <div class="title">
                   {{en?item.en_title:item.title}}
                 </div>
                 <div class="daily_content"  v-html="en?item.en_brief:item.brief">
                    
                 </div>
                <div class="learn_more" v-if="en" @click="listClick(item.id)">For more information, please click ...<span class="iconfont icon-youjiantou_huaban" style="padding-left:25px;font-weight:bold;"></span></div>
                 <div class="learn_more" v-else @click="listClick(item.id)">更多知识请点击 ...<span class="iconfont icon-youjiantou_huaban" style="padding-left:25px;font-weight:bold;"></span></div>
            </div>
               </div>
               <!-- <div class="top_b" v-html="en?item.en_brief:item.brief">
                
               </div> -->
      
             </div>
         
          </div>
          <!-- the way -->
          <!-- <div class="container">
            <div class="way">
              Ways to help kids catch up on growth
            </div>
          </div> -->
        
       </div>
      <bottom :Bottom="Bottom"></bottom>
      
   </div>
</template>

<script>
import Cookies from 'js-cookie'
import TabBar from '../components/TabBar.vue'
import bottom from '../components/Bottom'
export default {
  components: { TabBar,bottom },
  data(){
      return{
             Tab:{},
            data:{},
            en:true,
            Bottom:[]
      }
  },
  beforeCreate () {

//   document.querySelector('body').setAttribute('style', 'background-color:rgb(237,250,255)')

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
  methods:{
            listClick(id){
            this.$router.push({path:'/healthyDetail',query:{id:id}})
        },
          getHome(){
         this.$ajax({
                url:'/index/index/index',
                data:{
                 
                }
            }).then(res=>{
              this.Tab=res.data
              this.Bottom=res.data.bottom_menu
        })
      },
         getData(){
         this.$ajax({
                url:'/index/index/health',
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
body{
       background-color: rgb(237,250,255);
}
 .product2{
     margin: 0;
     padding: 0;
    //  height: 100%;
    //   background-color: rgb(237,250,255);
     .whole{
         padding: 100px 15% 100px  15%;
        
        //  width: 70%;
        //  height: 400px;
         .top{
             position: relative;
             width: 100%;
             padding: 50px 0 30px 0;
            //  height: 350px;
            display: flex;
            background-color: #fff;
            // justify-content: space-around;
           
            flex-direction: row;
            // align-items: center;
            .top_whole{
                width: 100%;
                display: flex;
                flex-direction: column;
                
                 border-bottom: 2px solid rgb(199,229,252);
                 .top_t{
                   display: flex;
                   justify-content:space-around;
                   flex-direction: row;
                 }
                 .top_b{
                   
                 }
                  .left_box{
                // position: absolute;
                // left: 30px;
                width:350px;
                // padding-right: 150px;
                height: 200px;
            //    transform: translateY(-50%);
            //     top: 50%;
                img{
                    width: 100%;
                    // border-radius: 50%;
                    height: 100%;
                }
            }
             .right_box{
                //  position: absolute;
                //  right: 30px;
                 width: 55%;
                //  top: 20px;
                 margin-left: 30px;
                // transform: translateY(-50%);
                // top: 50%;
                 .title{
                        //  color: rgb(0,50,142);
                         font-size: 22px;
                         font-weight: bold;
                         text-overflow: ellipsis;
                         overflow: hidden;
                         text-align: left;
                         white-space: nowrap;
                         border-bottom: 2px solid rgb(241,240,233);

                 }
                 .daily_content{
                     font-size: 16px;
                     padding-top: 20px;
                    //  color: rgb(52,60,123);
                     max-height: 60px;
                     text-align: left;
                     text-overflow: ellipsis;
                       overflow: hidden;
                       display: -webkit-box;
                    //  white-space: nowrap;
                         -webkit-box-orient: vertical;
               -webkit-line-clamp: 2;
                 }
                //  p{
                //      font-size: 20px;
                //  }
                 .learn_more{
                    //  width: 250px;
                    //  height: 40px;
                    // margin-top: 60px;
                    // padding: 15px 90px;
                    //  background-color:#00328e;
                    //  border-radius: 5px;
                     line-height: 40px;
                     cursor: pointer;
                     font-size: 14px;
                     margin-top: 60px;
                     text-overflow: ellipsis;
                     white-space: nowrap;
                     overflow: hidden;
                     padding-bottom: 50px;
                     text-align: left;
                    //  color: rgb(90,110,222);
                 }  
            }
          
             }
         }
         .container{
             padding-top: 20px;
            //  background-color: #fff;
           .way{
            width: 100%;
            background-color: rgb(45,189,242);
            color: white;
            font-size: 20px;
            font-weight: bold;
            
            text-align: center;
            height: 76px;
            line-height: 76px;
        }
         }
        //  way
   
     }
     
 }
</style>