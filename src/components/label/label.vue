<template>
  <div class="place_component">
    <div class="checker_popup">
      <div v-for="(items, indexs) in popup.label" class="items_c">
        <div class="item" v-for="(item, index) in items" @click="onItemClick(item,indexs,index)"
             :class="{'item-selected': data[indexs] === item }">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Checker,
    CheckerItem,
  } from 'vux';
  export default {
    components: {
      Checker,
      CheckerItem,
    },
    props: {
      arrData: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        popup: {
          label: [
            ['交友', '亲子游'],
            ['近郊', '长途'],
            ['民俗', '娱乐']
          ],
          showPopup: false,
        },
        data: this.arrData,
        Label: false
      }
    },
    mounted(){

    },
    created(){
    },
    methods: {
      /*切换导航*/
      onItemClick (value, indexs, index) {
        if (this.data[indexs] === value) {
          document.getElementsByClassName('items_c')[indexs].children[index].className = 'item';
          this.data[indexs] = "";
        } else {
          let i = document.getElementsByClassName('items_c')[indexs].children.length;
          for (let j = 0; j < i; j++) {
            document.getElementsByClassName('items_c')[indexs].children[j].className = 'item';
          }
          document.getElementsByClassName('items_c')[indexs].children[index].className = 'item item-selected';
          this.data[indexs] = value;
        }
        this.$emit('getTab', this.data)
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .place_component {
    .checker_popup {
      position: relative;
      z-index: 200;
      left: 0;
      background: #fff;
      padding: 10px;
      .items_c {
        display: inline-block;
        .item {
          @include sc(13px, rgba(76, 76, 76, 1));
          padding: 5px 15px;
          line-height: 1.3;
          border-radius: 3px;
          border: 1px solid #b1b1b1;
          margin-top: 10px;
          display: inline-block;
          margin-right: 13px;
          &.item-selected {
            background: rgba(204, 245, 226, 1);
            color: $fc;
            border: 1px solid $fc;
          }
        }
      }
    }
  }

</style>
