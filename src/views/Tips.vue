<template>
    <div class="healthyList">
        <tab-bar :Tab="Tab"></tab-bar>
        <div class="content">
            <div class="list" v-for="(item,index) in data.health" :key="index">
                <!-- 头部 -->
                <div class="list_t">
                    {{en?item.en_title:item.title}}<span class="iconfont icon-more" @click="listClick(item.id)"></span>
                </div>
                <!-- 底部 -->
                <div class="list_b">
                <div class="list_l">
                    <img :src="item.path" alt="">
                </div>
                <div class="list_r" v-html="en?item.en_content:item.content">
                   <!-- {{en?item.en_content:item.content}} -->
                </div>
                </div>
              
            </div>
        </div>
         <!-- <bottom></bottom> -->
    </div>
</template>

<script>
import Cookies from 'js-cookie'
import Bottom from '../components/Bottom.vue'
import TabBar from '../components/TabBar.vue'
export default {
  components: { TabBar, Bottom },
    data(){
        return{
            Tab:{},
            data:{},
            en:true
        }
    },
    created(){
        // var a="abcdefgga"
        // var b=a.indexOf('d')
        // const c=a.substring(b+1,a.length)
        // console.log(c)
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
            this.$router.push({path:'/tipsDetail',query:{id:id}})
        },
        getHome(){
             this.$ajax({
                url:'/index/index/index',
                data:{
                 
                }
            }).then(res=>{
              // this.data=res.data
              console.log(this.data.video)
              this.Tab=res.data
              // this.Bottom=res.data.bottom_menu
        })
        },
        getData(){
            this.$ajax({
                url:'/index/index/tips',
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
.healthyList{
    // height: 100vh;
}
    .content{
        padding: 90px 70px 0 70px; 
        .list{
            display: flex;
            flex-direction: column;
            margin-top: 40px;
            .list_t{
                text-align: left;
                font-size: 30px;
                font-weight: bold;
                span{
                    margin-left: 20px;
                    font-size: 35px;
                    cursor: pointer;
                    // font-weight: bold;
                }
            }
            .list_b{
                display: flex;
                flex-direction: row;
                margin-top: 30px;
             .list_l{
                width: 50%;
                // height: 400px;
                img{
                    width: 100%;
                    max-height: 100%;
                }
            }
            .list_r{
                width: 50%;
                font-size: 18px;
                height: 210px;
                display: -webkit-box;
             -webkit-box-orient: vertical;
            //    -webkit-line-clamp: 8;
               text-align: left;
                // white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                padding-left: 25px;
            }
            }
            
        }
    }
</style>