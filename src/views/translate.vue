<template>
  <div id="translate" class="translate">
    <p>{{ $t('navBar.home')}}</p>
    <p>{{ $t('navBar.name')}}</p>
    <el-button
    @click="changeLaguages" 
    type="default"
    >切换语音</el-button>
  </div>
</template>
 
<script type="text/javascript">
import Cookies from 'js-cookie'
 
export default {
  name: "translate",
  data() {
    return {
      lang: Cookies.get('language') || 'zh',
    }
  },
  components: {
  },
  methods:{
    changeLaguages () {
      console.log(this.$i18n.locale)
      let lang = this.$i18n.locale === 'zh' ? 'en' : 'zh'
      this.$i18n.locale = lang;
      Cookies.set("language",lang)
    }
  }
}
</script>
 
<style lang="scss" scoped>
  p{
    padding: 10px 0;
  }
  
</style>
