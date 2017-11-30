<template>
  <div class="list_search">
    <search
      :results="results"
      v-model="value"
      placeholder="搜索活动、回顾、目的地"
      ref="search"></search>
  </div>
</template>

<script>
  import {Search, Group, Cell, XButton} from 'vux'
  export default {
    data () {
      return {
        results: [],
        value: ''
      }
    },
    components: {
      Search,
      Group,
      Cell,
      XButton
    },
    props: {},
    methods: {
      back(){
        this.$emit('hide')
      },
      setFocus () {
        this.$refs.search.setFocus()
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .list_city {
    @include wh(100%, 100%);
    background: #fff;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
  }


</style>
