<template>
  <div class="editor_user">
    <div class="container" v-show="panel">
      <img id="image" :src="message.url" alt="Picture">
      <button type="button" id="button" @click="crop">确定</button>
    </div>
    <div v-show="!panel">
      <vTitle name="编辑个人资料"></vTitle>
      <div class="user_basic_message">
        <div class="tp">
          <div class="tp_left">
            头像
          </div>
          <div class="tp_right">
            <div class="picture"
                 :style="message.headerImage?'backgroundImage:url('+message.headerImage+')':'backgroundImage:url('+message.url+')'"></div>
            <input type="file" id="change" name="file" accept="image/*" @change="change">
            <!--
                          <input type="file" id="change" name="file"  capture="camera" accept="image/png,image/gif,image/jpeg" @change="change">
            -->
            <!--  <i class="iconfont icon-touxiang" ></i>-->
            <i class="iconfont icon-fanhui-copy"></i>
          </div>
        </div>
        <div class="bs_other">
          <group>
            <cell :title="'昵称'" is-link @click.native="showComponents('昵称', 'nickname', message.nickname)"
                  :value="message.nickname"
                  class="require"></cell>
          </group>
          <group>
            <cell :title="'真实姓名'" @click.native="showComponents('真实姓名', 'name', message.name)" is-link
                  :value="message.name"></cell>
          </group>
          <group>
            <cell :title="'性别'" is-link @click.native="showComponents1('性别', 'sex', message.sex)" :value="message.sex"
                  class="require"></cell>
          </group>
          <group>
            <datetime
              v-model="message.birthday"
              :title="'生日'"
              @on-confirm="updateBirthday(message.birthday)"
              class="require"></datetime>
          </group>
          <group>
            <cell :title="'电话'" is-link @click.native="showComponents1('电话', 'phone', message.phone)"
                  :value="'135***2666'"></cell>
          </group>
          <group>
            <cell :title="'QQ'" @click.native="showComponents('QQ','qq' ,message.qq)" is-link
                  :value="message.qq"></cell>
          </group>
          <group>
            <cell :title="'微信'" @click.native="showComponents('微信','wx' ,message.wx)" is-link
                  :value="message.wx"></cell>
          </group>
          <group>
            <cell :title="'个人简介'" @click.native="showComponents('个人简介','introduce' ,message.introduce)"
                  class="require" is-link :value="message.introduce"></cell>
          </group>
          <group>
            <label for="file">
              <cell :title="'驾驶证'" is-link :value="'上传'">
              </cell>
              <input type="file" id="file" accept="image/*"
                     style="opacity: 0;position: absolute;top: 0;left: 0;width: 100%;height: 100%;"/>
            </label>
          </group>
          <div style="padding: 15px">
            <img src="../../../static/img/car.png" style="width: 100%; height: auto;display: inline-block"/>
          </div>
        </div>
      </div>
      <update v-if="inputShow" :keys="keys" :name="name" :value="value" v-on:hide="hide"></update>
      <vRadio v-if="radioShow" :keys="keys" :name="name" :value="value" v-on:hide="hide"></vRadio>
      <vIntroduce v-if="txtShow" :keys="keys" :name="name" :value="value" v-on:hide="hide"></vIntroduce>
    </div>
  </div>
</template>

<script>
  import Cropper from 'cropperjs';
  import {Scroller, Badge, Group, CellBox, Cell, Datetime} from 'vux';
  import update from 'src/components/user/update';
  import vTitle from 'src/components/user/header';
  import vRadio from 'src/components/user/radio';
  import vIntroduce from 'src/components/user/introduce';

  export default {
    components: {
      Scroller,
      Badge,
      Group,
      Datetime,
      CellBox,
      Cell,
      update,
      vTitle,
      vRadio,
      vIntroduce
    },
    data () {
      return {
        panel: false,
        message: {
          url: '../../static/img/tx.png',
          headerImage: '',
          nickname: '鲁迅居然姓周', //设置
          name: '周树人', //设置
          birthday: '2015-11-12',
          qq: '123456',
          wx: '4sdw541154',
          sex: '男', //['保密', '男', '女']
          phone: '135***2666',
          introduce: '这人很懒，什么都没留下',
        },
        inputShow: false,
        radioShow: false,
        txtShow: false,
        keys: '',
        name: '',
        value: ''
      }
    },
    mounted () {
      //初始化这个裁剪框
      let image = document.getElementById('image');
      var self = this;
      this.cropper = new Cropper(image, {
        aspectRatio: 1,
        viewMode: 1,
        background: false,
        zoomable: false,
        ready: function () {
          this.croppable = true;
          self.croppable = true;
        }
      });
    },
    methods: {
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
        this.message.url = this.getObjectURL(this.picValue);
        //每次替换图片要重新得到新的url
        if (this.cropper) {
          this.cropper.replace(this.message.url);
        }
        this.panel = true;
      },
      crop () {
        this.panel = false;
        var croppedCanvas;
        var roundedCanvas;

        if (!this.croppable) {
          debugger;
          return;
        }
        //Crop
        croppedCanvas = this.cropper.getCroppedCanvas();
        //Round
        roundedCanvas = this.getRoundedCanvas(croppedCanvas);

        this.message.headerImage = roundedCanvas.toDataURL();
        this.postImg(this.message.headerImage);
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
      showComponents(key, name, value){
        this.keys = key;
        this.name = name;
        this.value = value;
        key === '个人简介' ? this.txtShow = true : this.inputShow = true;

      },
      updateBirthday(v){
        if (v !== this.message.birthday) {
          //axios data.message.birthday
          debugger;
        }
      },
      showComponents1(key, name, value){
        this.keys = key;
        this.value = value;
        this.name = name;
        this.radioShow = true;
      },
      hide(){
        /* 重新拉接口*/
        this.radioShow = false;
        this.inputShow = false;
        this.txtShow = false;
      },
      /* change (val, label) {
       console.log('change', val, label)
       }*/
    }
  }
</script>
<style lang="scss">
  @import "../../../node_modules/cropperjs/dist/cropper.css";
  @import "../../style/mixin";

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
      z-index: 1000;
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
          @include wh(50px, 50px);
          line-height: 50px;
          border-radius: 50%;
          color: #394043;
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
            @include sc(12px, #fff);
          }

        }
      }
      .bs_other {
        .weui-cell {
          padding: 0 15px 0 25px;
          padding-left: 25px !important;
          &.require {
            padding: 0 15px 0 13px;
            padding-left: 15px !important;
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
          &.vux-datetime {
            div p {
              @include sc(15px, rgba(57, 64, 67, 1));
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
          a:-webkit-any-link {
            text-decoration: none;
          }
        }
        .weui-cell_access .weui-cell__ft:after {
          border-width: 1px 1px 0 0
        }
        .scroller-content > .scroller-item {
          font-size: 0;
          color: red !important;
        }
      }
    }
  }
</style>

