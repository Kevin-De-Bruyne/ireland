<template>
  <div class="healthyDetail">
      <tab-bar :Tab="Tab"></tab-bar>
      <div class="content">
         <div class="content_t">
             <div class="title">{{en?data.en_title:data.title}}</div>
         </div>

         <div class="bottom" v-if="$route.query.id==1">
             <!-- <div class="bottom_t"><span style="padding-left:20px;"></span></div> -->
             <!-- <div class="bottom_content" v-html="en?data.en_content:data.content">

             </div> -->
        <div class="tricks">
          <div class="trickss">
                <span> 
                    <!-- {{en?'Recommended recipes':'推荐食谱'}} -->
                    {{en?data.en_subhead:data.subhead}}
             </span>
          </div>
           
         </div>
            <!-- <div class="bottom_t">
                 文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环
绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕
绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕
绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕
绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕
            </div> -->
            <div class="bottom_b">
            <img :src="data.img" alt="图片" class="bottom_l"/>  

          <div class="bottom_r">
              <div class="bottom_r_list" v-for="(item,index) in data.content_list" :key="index">
                  <div class="bottom_list_t">
                     {{en?item.en_title_:item.title_}}
                  </div>
                  <div class="bottom_list_b">
                    {{en?item.en_content_:item.content_}}
                  </div>
                  <br>
              </div>

         </div>
            </div>
         <div class="tricks" >
          <div class="trickss">
                <span> 
                    {{en?'Recommended recipes':'推荐食谱'}}
                   <!-- 推荐食谱 -->
             </span>
          </div>
           
         </div>
         <!-- 香草奶昔数组 -->
         <div class="naixi_box" v-for="(item,index) in data.cookbook" :key="index">
             <div class="naixi_l">
                 <img :src="item.img" alt="">
             </div>
             <div class="naixi_r">
                 <!-- <div class="naixi_title">{{en?item.en_recipe_name:item.recipe_name}}</div> -->
                 <!-- <div class="peiliao">{{en?item.en_batching:item.batching}}</div> -->
                 <div class="naixi_content" v-html="en?item.en_batching:item.batching">
                      
                 </div>
                     <!-- 操作指南 -->
             <div class="caozuo">
            <!-- <div class="caozuo_t">{{en?item.en_manual_title:item.manual_title}}</div> -->
            <div class="caozuo_b" v-html="en?item.en_manual:item.manual">
                 
               
            </div>
        </div>
             </div>
         </div>
  
          <!-- 意大利面数组 -->
         <!-- <div class="naixi_box">
             <div class="naixi_ls">
                 <img src="../assets/pasta.png" alt="">
             </div>
             <div class="naixi_r">
                 <div class="naixi_title">香草奶昔</div>
                 <div class="peiliao">配料</div>
                 <div class="naixi_content">
                      文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕
                      文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕
                      文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕
                       文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕
                      文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕
                      文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕
                       文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕文字环绕
                  
                      
                 </div>
             </div>
         </div> -->
    
         

         </div>
         <!-- ------------第二种样式 -->
              <div class="bottom" v-if="$route.query.id==7">
             <!-- <div class="bottom_t"><span style="padding-left:20px;"></span></div> -->
             <!-- <div class="bottom_content" v-html="en?data.en_content:data.content">

             </div> -->
               <div class="bottom_t2">
                   <img :src="data.path" alt="">
               </div>
               <div class="tricks">
                 <div class="trickss">
                 <span> 
                    <!-- {{en?'Recommended recipes':'推荐食谱'}} -->
                    {{en?data.en_subhead:data.subhead}}
                </span>
               </div>
           
               </div>
               <div class="bottom_b2">
                  <div class="bottom_r_list" v-for="(item,index) in data.content_list" :key="index">
                  <div class="bottom_list_t">
                      {{en?item.en_title_:item.title_}}
                  </div>
                  <div class="bottom_list_b">
                      {{en?item.en_content_:item.content_}}
                  </div>
                  <br>
              </div>
               </div>
                <div class="tricks" >
                  <div class="trickss">
                   <span> 
                    {{en?'Recommended recipes':'推荐食谱'}}
                   <!-- 推荐食谱 -->
                  </span>
                  </div>
               </div>
                       <!-- 香草奶昔数组 -->
         <div class="naixi_box" v-for="(item,index) in data.cookbook" :key="index">
             <div class="naixi_l">
                 <img :src="item.img" alt="">
             </div>
             <div class="naixi_r">
                 <!-- <div class="naixi_title">{{en?item.en_recipe_name:item.recipe_name}}</div> -->
                 <!-- <div class="peiliao">配料</div> -->
                 <div class="naixi_content" v-html="en?item.en_batching:item.batching">
                     
                      
                 </div>
                     <!-- 操作指南 -->
        <div class="caozuo">
            <!-- <div class="caozuo_t">{{en?item.en_manual_title:item.manual_title}}</div> -->
            <div class="caozuo_b" v-html="en?item.en_manual:item.manual">
                
            </div>
        </div>
             </div>
         </div>
        </div>
        <!-- 第三种样式 -->
           <!-- ------------第二种样式 -->
              <div class="bottom" v-if="$route.query.id==9">
             <!-- <div class="bottom_t"><span style="padding-left:20px;"></span></div> -->
             <!-- <div class="bottom_content" v-html="en?data.en_content:data.content">

             </div> -->
               <div class="bottom_t2">
                   <img :src="data.path" alt="">
               </div>
               <div class="tricks">
                 <div class="trickss">
                 <span> 
                    <!-- {{en?'Recommended recipes':'推荐食谱'}} -->
                   {{en?data.en_subhead:data.subhead}}
                </span>
               </div>
           
               </div>
               <div class="bottom_b2">
                  <div class="bottom_r_list" v-for="(item,index) in data.content_list" :key="index">
                  <div class="bottom_list_t">
                       {{en?item.en_title_:item.title_}}
                  </div>
                  <div class="bottom_list_b">
                      {{en?item.en_content_:item.content_}}
                  </div>
                  <br>
              </div>
               </div>
                <div class="tricks" >
                  <div class="trickss">
                   <span> 
                    {{en?'Recommended recipes':'推荐食谱'}}
                   <!-- 推荐食谱 -->
                  </span>
                  </div>
               </div>
                       <!-- 香草奶昔数组 -->
                   <!-- 意大利面数组 -->
         <div class="naixi_box" v-for="(item,index) in data.cookbook" :key="index">
             <div class="naixi_ls">
                 <img :src="item.img" alt="">
             </div>
             <div class="naixi_r">
                 <!-- <div class="naixi_title">{{en?item.en_recipe_name:item.recipe_name}}</div> -->
                 <!-- <div class="peiliao">配料</div> -->
                 <div class="naixi_content" v-html="en?item.en_batching:item.batching">
                    
                      
                 </div>
            <div class="caozuo">
            <!-- <div class="caozuo_t">{{en?item.en_manual_title:item.manual_title}}</div> -->
            <div class="caozuo_b"  v-html="en?item.en_manual:item.manual">
                  
            </div>
        </div>
             </div>
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
            Bottom:[],
            alen:false
        }
    },
    created(){
          if(Cookies.get('language')=='zh'){
              this.en=false
          }else{
              this.en=true
          }
    },
    mounted(){
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
                url:'/index/index/tips_detail',
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
                
                font-size: 14px;
                  background-color:rgba(230,230,229,0.8);
                text-align: center;
                // padding: 15px 60px;
                // height: 70px;
                // line-height: 70px;
           
                display: flex;
                justify-content: center;
                //margin-top: 30px;
                .trickss{
                    // width: 700px;
                    height: 100%;
                   color: rgb(77,77,77);
                    // background-color:rgb(210,210,210);
                    padding: 10px 25px;
                    font-weight: bold;
                    font-size: 14px;
                    display: flex;
                    text-align: center;
                    justify-content: center;
                    align-items: center;
                    // line-height: 70px;
                    span{

                    }
                }
             
            }
            .bottom{
                padding: 30px 20% 80px 20%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                // img{
                //     float: left;
                // }
                .bottom_t{
                    width: 100%;
                    // background-color:rgb(251,1,98);
                    // font-size: 18px;
                    text-align: left;
                    max-height: 150px;
                    overflow: hidden;
                    margin-top: 30px;
                    // line-height: 60px;
                    
                }
                .bottom_content{
                    margin-top: 30px;
                     max-width: 700px;
                    text-align: left;
                    margin: 30px auto 40px auto;
                }
                .bottom_b{
                    margin-top: 30px;
                    // padding: 0 15%;
                   width: 75%;  
                     .bottom_l{
                    width: 300px;
                    max-height: 400px;
                    // margin-top: 20px;   
                    padding-bottom: 30px;
                 float: left;
                }
                .bottom_r{
                //   width: 70%;
                    // overflow: hidden;
                    .bottom_r_list{
                        display: flex;
                        padding-bottom: 15px;
                    flex-direction: column;
                    padding-left: 30px;
                        .bottom_list_t{
                            font-size: 12px;
                            font-weight: bold;
                            text-align: left;
                        }
                        .bottom_list_b{
                            text-align: left;
                            text-align: justify;
                        }
                    }
                }
                }
               .bottom_t2{
                   display: flex;
                   width:75%;
                   img{
                       max-width: 100%;
                       max-height: 100%;
                   }
               }
               .bottom_b2{
                   width:75%;
                   display: flex;
                   flex-direction: column;
                   margin: 30px 0 20px 0;
                   justify-content: center;
                //    max-width: 900px;
                     .bottom_r_list{
                        display: flex;
                        padding-bottom: 5px;
                    flex-direction: column;
                    // padding-left: 30px;
                        .bottom_list_t{
                            font-size: 13px;
                            font-weight: bold;
                            text-align: left;
                        }
                        .bottom_list_b{
                            text-align: left;
                            text-align: justify;
                        }
                    }
               }
            //    奶昔
               .naixi_box{
                //   padding: 0 10%;
                // width: 100%;
                // display: flex;
                width: 75%;
                margin-top: 15px;
                // flex-direction: row;
                   .naixi_l{
                        float: left;
                        padding-right: 30px;
                        width: 300px;
                        max-height: 400px;
                          img{
                           width: 100%;
                           height: 100%;
                        }
                   }
                    .naixi_ls{
                        float: right;
                        padding-left: 30px;
                        // min-width: 500px;
                        // min-height: 300px;
                        width: 330px;
                        max-height: 400px;
                        text-align: right;
                        img{
                           width: 100%;
                           height: 240px;
                        }
                   }
                   .naixi_r{
                    //    display: flex;
                    //    flex-direction: column;
                    margin-top: -12px;
                       text-align: left;
                      
                       .naixi_title{
                           font-size: 15px;
                           font-weight: bold;
                       }
                       .peiliao{
                           margin-top: 15px;
                           font-size: 14px;
                           
                       }
                       .naixi_content{
                            // margin-top: 20px;
                            // display: flex;
                            // height: 100%;
                            // display: flex;
                            // flex-direction: column;
                       }
                   }
               }
            //    操作指南
            .caozuo{
                margin-top: 10px;
                display: flex;
                width: 100%;
                flex-direction: column;
                // align-items: center;
                justify-content: flex-start;
                .caozuo_t{
                    // font-size: 15px;
                    // font-weight: bold;
                    text-align: left;
                }
                .caozuo_b{
                    margin-top: 15px;
                }
            }
            }
        }
     }
</style>