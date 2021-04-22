<template>
  <div class="bottom">
      <div class="bottom_whole">
          <div class="list" v-for="(item,index) in Bottom" :key="index" @click="click(index)">
            <span>{{en?item.en_name:item.name}}</span>
          </div>
          <!-- <div class="list">Products</div>
          <div class="list">News</div>
          <div class="list">Contact</div>
          <div class="list" @click="toTop">Back to Top</div> -->
      </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  props:['Bottom'],
    data(){
        return{
             gotop: false,
             en:true
        }
    },
    mounted(){
         //此处true 需要加上 不加滚动事件可能绑定不成功
    window.addEventListener("scroll", this.handleScroll, true);
    },
    created(){
        if(Cookies.get('language')=='zh'){
              this.en=false
          }else{
              this.en=true
          }
    },
    methods:{
          handleScroll() {
      let scrolltop =
        document.documentElement.scrolltop || document.body.scrollTop;
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      //实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
    click(index){
      if(index!=5){
        this.$router.push(this.Bottom[index].path)
      }else{
        this.toTop();
        console.log(555)
      }
    }
    }
}
</script>

<style lang="scss" scoped>
    .bottom{
        width: 100%;
        height: 60px;
        position: fixed;
        bottom: 0;
        z-index: 1000;
       background-color: rgba(230,230,229,0.8);
        display: flex;
        justify-content: center;
        border-top: 1px solid black;
        .bottom_whole{
            display: flex;
            flex: 1;
            justify-content: center;
            .list{
                padding: 0 15px;
                line-height: 60px;
                font-size: 20px;
                cursor: pointer;
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
    }
</style>