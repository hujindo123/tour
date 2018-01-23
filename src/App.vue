<template>
  <div id="app">
    <router-view></router-view>
    <loading v-model="isLoading"></loading>
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
  @import "./style/reset.scss";
  .router-link-active {
    i,span{
      color: #159C5E!important;
    }
  }
</style>
