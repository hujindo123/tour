<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
  import {Loading} from 'vux'
  import {mapState} from 'vuex'
  export default {
    components: {
      Loading
    },
    computed: {
      ...mapState({
        isLoading: state => state.vux.isLoading
      })
    }
  }
</script>
<style lang="less">
  @import '~vux/src/styles/1px.less';
</style>
<style lang="scss">
  //@import "./style/reset.scss";
  .router-link-exact-active {
    i,span{
      color: #159C5E!important;
    }
  }
</style>
