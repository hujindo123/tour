<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <div class="h1"> 1231</div>
      <br>
      <div style="font-size: 14px; width: 50%;height: 40px;  background: red;  line-height: 40px;">1231</div>
    </div>
  </div>
</template>

<script>
  import {Group, Cell} from 'vux'
  import {getUserMessage} from 'src/service/getDate';
  export default {
    components: {
      Group,
      Cell
    },
    data(){
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!',
      }
    },
    mounted(){
      //console.log(this.$wechat.config);
      this.test();
    },
    methods: {
      async test(){
        let result = await getUserMessage();
      }
    }
  }
</script>

<style>
  .vux-demo {
    text-align: center;
  }

  .logo {
    width: 100px;
    height: 100px
  }

  .h1 {
    width: 16rem;
    height: 4rem;
    line-height: 4rem;
    background: red;
    font-size: 1.4rem;
  }
</style>
