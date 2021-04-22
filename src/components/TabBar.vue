<template>
  <div class="tab">
      <div class="tab_content">
          <div class="nav">
              <!-- <div class="nav_l"> -->
                  <div class="nav_icon">
                      <img :src="Tab.logo" alt="">
                  </div>
                  <!-- <div class="nav_name">{{}}</div> -->
                  <div class="nav_sclence"><span>{{en?Tab.en_logo_text:Tab.logo_text}}</span></div>
                      <div class="nav_r">
                   <div class="list" v-for="(item,index) in Tab.head_menu" :key="index" @click="$router.push(item.path)">
                       <span v-if="en==true">{{item.en_name}}</span>
                       <span v-else>{{item.name}}</span>
                   </div>
                       
                      </div>
                        
              <!-- </div> -->
          
          </div>
          <div class="contact">
              <div class="contact_c">
                  <span @click="zh">English</span>
              </div>
                <div class="contact_r">
                  <span @click="ens">中文</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
    props:['Tab'],
    created(){
          if(Cookies.get('language')=='zh'){
              this.en=false
          }else{
              this.en=true
          }
    },
    data(){
        return{
            en:true
        }
    },
    watch:{
        
    },
    methods:{
        ens(){
         
           console.log(this.$i18n.locale)
    //   let lang = this.$i18n.locale === 'zh' ? 'en' : 'zh'
      let lang = this.$i18n.locale ='zh'
      this.$i18n.locale = lang;
      Cookies.set("language",'zh')
      this.en=false
      console.log(Cookies.get('language'))
       window.location.reload()
        },
        zh(){
         
           console.log(this.$i18n.locale)
    //   let lang = this.$i18n.locale === 'zh' ? 'en' : 'zh'
      let lang = this.$i18n.locale = 'en'
      this.$i18n.locale = lang;
      Cookies.set("language",'en')
      this.en=true
       window.location.reload()
        }
    }
}
</script>

<style lang="scss" scoped>
  ::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
    .tab{
        width: 100%;
        background-color: rgba(230,230,229,0.8);
        position: fixed;
        top: 0;
        overflow-x: scroll;
        display: flex;
        justify-content: center;
        z-index: 1001;
        .tab_content{
            width: 91%;
            height: 83px;
            display: flex;
            // justify-content: center;
            align-items: center;
            justify-content: space-around;
            .nav{
                // max-width: 1400px;
                // margin-left: -50px;
                align-items: center;
                display: flex;
                justify-content: space-around;
                flex-direction: row;
                    .nav_name{
                        padding-left: 15px;
                        font-size: 20px;
                        font-weight: bold;
                    }
                    
                    .nav_icon{
                        padding-left:150px;
                        // width: 120px;
                        // height: 40px;
                            @media screen and(max-width:480px){
                         padding-left: 350px;
                         width: 60px;
                        //  height: 20px;
                     }
                        img{
                            max-width: 100%;
                            max-height: 60px;
                            min-width: 50px;
                            min-height: 60px;
                        }
                    }
                        .nav_sclence{
                    width: 100px;
                    height: 40px;
                    margin-left: 15px;
                    font-size:13px;
                    text-align: center;
                    padding-right: 15px;
                    white-space: nowrap;
                    display: flex;
                    align-items: center;
                    // line-height: 24px;
                    border-right: 1px solid black;
                       @media screen and(max-width:480px){
                           width: 70px;
                           font-size: 10px;
                     }
                }
                 .nav_r{
                    //  width: 400px;
                display: flex;
                // width:720px;
              
                .list{
                    // font-size: 0.3rem;
                    // height: 10px;
                    // width: 118px;
                    // overflow: hidden;
                    cursor: pointer;
                    white-space: nowrap;
                    margin-left: 5px;
                    padding: 0 10px;
                     @media screen and(min-width:480px){
                         font-size: 13px;
                     }
                      @media screen and(max-width:480px){
                        //  font-size: 0.42rem;
                        font-size: 0.8rem;
                         padding: 0 5px;
                        //  background-color: red;
                     }
                }
            }
                // }
               
            }
           .contact{
               cursor: pointer;
               display: flex;
               justify-content: space-between;

           }
           .contact_l{
               display: flex;
               flex-direction: row;
               padding-right: 15px;
               border-right: 1px solid black;
               .contact_list{
                   margin: 0 5px;
                   img{
                       max-width: 100%;
                       height: 100%;
                   }
               }
           }
           .contact_c{
               margin-left: 15px;
               font-size: 13px;
                line-height: 23px;
                padding-right: 15px;
                border-right: 1px solid black;
                display: flex;
                align-items: center;
                  @media screen and(max-width:480px){
                         font-size: 0.15rem;
                         padding: 0 5px;
                          
                }
            
           }
             .contact_r{
                //  padding-right: 50px;
               margin-left: 15px;
               font-size: 13px;
               padding-right: 20px;
               white-space: nowrap;
                line-height: 23px;
                  @media screen and(max-width:480px){
                         font-size: 0.15rem;
                         padding: 0 5px;
                }
            
           }
        }
    }
</style>