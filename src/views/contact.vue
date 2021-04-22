<template>
  <div class="contact">
      <tab-bar :Tab="Tab"></tab-bar>
      <div class="whole">
        <!-- <div class="name">
            <span class="name_t">{{en?data.en_title:data.title}}</span><span class="name_Detail">{{en?data.en_content:data.content}}</span>
        </div> -->
        <div class="contact_info">
             <el-carousel :interval="5000" arrow="always">
              <el-carousel-item v-for="(item ,index) in data.path " :key="index">
                 <img :src="item" alt="">
              </el-carousel-item>
             </el-carousel>
             <div class="contact_title">Contact Information</div>
             <div class="contact_content" v-html="en?data.en_contact:data.contact"></div>
        </div>
        <div class="email">
            <div class="email_t">Email</div>
            <div class="email_content" v-html="data.email"></div>
        </div>
        <div class="address"></div>
      </div>
       <bottom :Bottom="Bottom"></bottom>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import TabBar from '../components/TabBar.vue'
import bottom from '../components/Bottom'
export default {
  components: { TabBar,bottom},
    data(){
        return{
                Tab:{},
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
    methods:{
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
                url:'/index/index/contact',
                data:{
                 
                }
            }).then(res=>{
                this.data=res.data.contact
        })
      }
    }
}
</script>

<style lang="scss" scoped>
    .contact{
        padding: 0;
        margin: 0;
        .whole{
            padding: 0 20px;
            .name{
                margin-top: 120px;
                .name_Detail{
                  padding-left: 30px;
                  text-align: center;
                  font-size: 27px;
                }
                // font-weight: bold;
                .name_t{
                    font-weight: bold;
                    font-size: 30px;
                }
            }
            .contact_info{
                margin-top: 40px;
                
                  .el-carousel__item h3 {
                   color: #475669;
                   font-size: 18px;
                   opacity: 0.75;
                   line-height: 300px;
                   margin: 0;
         }
            /deep/ .el-carousel__container{
                width: 100%;
                height: 550px;
                margin-top: 50px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
               .el-carousel__item:nth-child(2n) {
                  background-color: #99a9bf;
        }
  
              .el-carousel__item:nth-child(2n+1) {
                 background-color: #d3dce6;
         }
         .contact_title{
             font-size: 25px;
             font-weight: bold;text-align: center;
             margin-top: 30px;
             color: rgb(2,159,140);
         }
         .contact_content{
             width: 60%;
             margin: 0 auto;
             border-bottom:1px solid black;
             margin-top: 25px;
             display: flex;
            //  margin-left: 45%;
             text-align: left;
             padding-bottom: 20px;
             flex-direction: column;
             line-height: 15px;
             align-items: center;
            //  justify-content: center;
             p{
                 padding-left: 30px;
                 line-height: 0!important;
             }
         }
            }
            .email{
                display: flex;
                flex-direction: column;
                padding-bottom: 154px;
                .email_t{
                    margin-top: 30px;
                    text-align: center;
                    font-size: 25px;
                    font-weight: bold;
                    color: rgb(2,159,140);
                }
                 .email_content{
             width: 60%;
             margin: 0 auto;
             text-align: justify;
             display: flex;
             justify-content: center;
             align-items: center;
             flex-direction: column;
             padding-bottom: 80px;
             border-bottom:1px solid black;
             margin-top: 25px;
         }
            }
        }
    }
</style>