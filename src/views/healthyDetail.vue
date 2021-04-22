<template>
  <div class="healthyDetail">
      <tab-bar :Tab="Tab"></tab-bar>
      <div class="content">
         <div class="content_t">
             <div class="title">{{en?data.en_title:data.title}}</div>
         </div>
         <div class="tricks">
          <div class="trickss">
                <span>   
             </span>
          </div>
           
         </div>
         <div class="bottom">
             <!-- <div class="bottom_t"><span style="padding-left:20px;"></span></div> -->
             <div class="bottom_content" v-html="en?data.en_content:data.content">

             </div>
         </div>
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
    methods:{
          getHome(){
         this.$ajax({
                url:'/index/index/index',
                data:{
                 
                }
            }).then(res=>{
              // this.data=res.data
            //   console.log(this.data.video)
              this.Tab=res.data
              this.Bottom=res.data.bottom_menu
        })
      },
       getData(){
         this.$ajax({
                url:'/index/index/health_detail',
                data:{
                    id:this.$route.query.id
                }
            }).then(res=>{
              this.data=res.data
        })
      }
    }
    }

</script>

<style lang="scss" scoped>
     .healthyDetail{
         margin: 0;
         padding: 0;
        .content{
            padding: 90px 0px 0 0px;
            display: flex;
            flex-direction: column;
            .content_t{
                display: flex;
                flex-direction:row;
                margin-top: 40px;
                // color: rgb(95,29,95);
                font-weight: bold;
                // text-align: left;
                white-space: wrap;
                justify-content: space-around;
                .title{
                    font-size: 27px;
                    width: 50%;
                    // line-height: 304px;
                }
                .pic{
                    padding-left: 30px;
                    width: 50%;
                    img{
                        max-width: 100%;
                        max-height: 100%;
                    }
                }
            }
            .tricks{
                width: 100%;
                background-color:rgb(210,210,210);
                font-size: 14px;
                color: rgb(95,29,95);
                text-align: center;
                // padding: 15px 60px;
                // height: 70px;
                // line-height: 70px;
           
                display: flex;
                justify-content: center;
                margin-top: 30px;
                .trickss{
                    width: 400px;
                    height: 100%;
                    padding: 30px 0;
                    display: flex;
                    color: rgb(77,77,77);
                    text-align: left;
                    justify-content: center;
                    align-items: center;
                    // line-height: 70px;
                    span{

                    }
                }
             
            }
            .bottom{
                // padding: 30px 15% 60px 15%;
                padding-bottom: 60px;
                display: flex;
                flex-direction: column;
                .bottom_t{
                    width: 100%;
                    background-color:rgb(251,1,98);
                    font-size: 18px;
                    text-align: left;
                    color: white;
                    height: 60px;
                    line-height: 60px;
                    
                }
                .bottom_content{
                    margin: 30px auto 40px auto;
                    text-align: left;
                    overflow: hidden;
                    // display: flex;
                    // flex-direction: row;
                    // justify-content: center;
                    max-width: 700px;
                    img{
                        float: left;
                    }
                    span{
                        float: right;
                        line-height: 10px;
                    }
                }
            }
        }
     }
</style>