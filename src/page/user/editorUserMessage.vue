<template>
  <div class="editor_user">
    <div class="container" v-show="panel">
      <img id="image" :src="url" alt="Picture">
      <button type="button" id="button" @click="crop">确定</button>
    </div>
    <div class="user_top">
      <span class="iconfont icon-fanhui"></span>
      <span class="register_singin">编辑个人资料</span>
    </div>
    <scroller lock-x height="-44">
      <div class="user_basic_message">
        <div class="tp">
          <div class="tp_left">
            头像
          </div>
          <div class="tp_right">
            <div class="picture"
                 :style="headerImage?'backgroundImage:url('+headerImage+')':'backgroundImage:url('+url+')'"></div>
            <input type="file" id="change" name="file" accept="image/png,image/gif,image/jpeg" @change="change">
            <i class="iconfont icon-touxiang" style="display: none;"></i>
            <i class="iconfont icon-fanhui-copy"></i>
          </div>
        </div>

        <div class="bs_other">
          <group>
            <cell :title="'昵称'" is-link @click.native="showComponents('昵称')" :value="'鲁迅居然姓周'" class="require"></cell>
          </group>
          <group>
            <cell :title="'真实姓名'" is-link :link="{path:'/demo'}" :value="'设置'"></cell>
          </group>
          <group>
            <cell :title="'性别'" is-link :link="{path:'/demo'}" :value="'女'" class="require"></cell>
          </group>
          <group>
            <cell :title="'生日'" is-link :link="{path:'/demo'}" :value="'1995-12-26'" class="require"></cell>
          </group>
          <group>
            <cell :title="'电话'" is-link :link="{path:'/demo'}" :value="'135***2666'"></cell>
          </group>
          <group>
            <cell :title="'QQ'" is-link :link="{path:'/demo'}" :value="'设置'"></cell>
          </group>
          <group>
            <cell :title="'微信'" is-link :link="{path:'/demo'}" :value="'设置'"></cell>
          </group>
          <group>
            <cell :title="'驾驶证'" is-link :link="{path:'/demo'}" :value="'上传'"></cell>
          </group>
          <group>
            <cell :title="'个人简介'" is-link :link="{path:'/demo'}" :value="'设置'" class="require"></cell>
          </group>
        </div>

      </div>
    </scroller>
    <update v-show="isShow" :type="type"></update>
  </div>
</template>

<script>
  import Cropper from 'cropperjs';
  import {Scroller, Badge, Group, CellBox, Cell} from 'vux';
  import update from 'src/components/update/update';
  export default {
    components: {
      Scroller,
      Badge,
      Group,
      CellBox,
      Cell,
      update
    },
    data () {
      return {
        panel: false,
        url: '',
        headerImage: '',
        isShow: false,
        type: ''
      }
    },
    mounted () {
      //初始化这个裁剪框
      var self = this;
      var image = document.getElementById('image');
      this.cropper = new Cropper(image, {
        aspectRatio: 1,
        viewMode: 1,
        background: false,
        zoomable: false,
        ready: function () {
          self.croppable = true;
        }
      });
    },
    methods: {
      /*图片*/
      getObjectURL (file) {
        var url = null;
        if (window.createObjectURL !== undefined) { //basic
          url = window.createObjectURL(file);
          console.log(url);
        } else if (window.URL !== undefined) { //mozilla(firefox)
          url = window.URL.createObjectURL(file);
        } else if (window.webkitURL !== undefined) { //webkit or chrome
          url = window.webkitURL.createObjectURL(file);
        }
        return url;
      },
      change (e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.panel = true;
        this.picValue = files[0];
        this.url = this.getObjectURL(this.picValue);
        //每次替换图片要重新得到新的url
        if (this.cropper) {
          this.cropper.replace(this.url);
        }
        this.panel = true;
      },
      crop () {
        this.panel = false;
        var croppedCanvas;
        var roundedCanvas;

        if (!this.croppable) {
          return;
        }
        //Crop
        croppedCanvas = this.cropper.getCroppedCanvas();
        //Round
        roundedCanvas = this.getRoundedCanvas(croppedCanvas);

        this.headerImage = roundedCanvas.toDataURL();
        this.postImg(this.headerImage);
      },
      getRoundedCanvas (sourceCanvas) {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var width = sourceCanvas.width;
        var height = sourceCanvas.height;

        canvas.width = width;
        canvas.height = height;

        context.imageSmoothingEnabled = true;
        context.drawImage(sourceCanvas, 0, 0, width, height);
        context.globalCompositeOperation = 'destination-in';
        context.beginPath();
        context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
        context.fill();

        return canvas;
      },
      /*图片-end*/
      postImg (t) {
        debugger;
        let pic = t.split(',')[1];
        /*let config = {
         headers: {'Content-Type': 'multipart/form-data'}
         };*/
        let formData = new FormData();
        formData.append('file', pic);
        formData.append('userId', sessionStorage.getItem('userId'));
        //console.log('userId' + formData.get('userId')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        this.axios('put', '/updateImg', formData, data => {
          sessionStorage.setItem('header', data.data.header);
        });
      },
      showComponents(v){
        this.type = v;
        this.isShow = true;
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";
  @import "../../../node_modules/cropperjs/dist/cropper.css";

  .editor_user {
    width: 100%;
    height: 100%;
    background: rgba(236, 236, 236, 1);
    display: flex;
    flex-flow: column;
    .container {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      z-index: 99;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      background: rgba(0, 0, 0, 1);
      #button {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 80px;
        height: 40px;
        border: none;
        border-radius: 5px;
        background: white;
      }
    }
    .user_top {
      display: flex;
      background: $fc;
      @include wh(100%, 44px);
      box-sizing: border-box;
      flex-flow: row;
      @include sc(14px, #fff);
      @include fj();
      line-height: 44px;
      overflow: hidden;
      .iconfont {
        padding: 2px 12px 0 12px;
        @include sc(22px, #fff);
      }
      .register_singin {
        width: 100%;
        position: relative;
        box-sizing: border-box;
        padding-right: 46px;
        text-align: center;
        @include sc(14px, #fff)
      }
    }
    .user_basic_message {
      .tp {
        padding: 24px 12px 24px 25px;
        background: #fff;
        margin-bottom: 10px;
        align-items: center;
        @include fj();
        display: flex;
        flex-flow: row;
        .tp_left {
          flex: 0 0 50px;
          width: 50px;
          height: 50px;
          line-height: 50px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          text-align: left;
        }
        .tp_right {
          display: flex;
          align-items: center;
          position: relative;
          .icon-fanhui-copy {
            @include sc(12px, rgba(215, 215, 215, 1));
          }
          .picture {
            @include wh(50px, 50px);
            right: 10px;
            position: absolute;
            overflow: hidden;
            display: inline-block;
            border-radius: 50%;
            margin-right: 5px;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          #change {
            @include wh(50px, 50px);
            position: relative;
            opacity: 0;
          }
          .bjxx {
            margin: 8px auto 0;
            width: 80px;
            padding: 3px;
            border: 1px solid #c7c7c7;
            border-radius: 15px;
            font-size: 12px;
            color: #fff;
          }

        }
      }
      .bs_other {
        .weui-cell {
          padding: 0 15px 0 25px;
          &.require {
            padding: 0 15px 0 13px;
            label {
              &:before {
                content: "*";
                color: red;
                left: 0;
                margin-right: 6px;
                vertical-align: middle;
                top: 15px;
              }
            }
          }
        }

        .weui-cells {
          margin-top: 0;
          @include sc(15px, rgba(57, 64, 67, 1));
          &:before {
            border: 0;
          }
        }
        .weui-cell_access .weui-cell__ft:after {
          border-width: 1px 1px 0 0
        }
      }
    }
  }
</style>
