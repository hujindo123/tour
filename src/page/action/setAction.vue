<template>
  <div class="set_action">
    <div class="user_top">
      <span class="iconfont icon-fanhui" @click="$router.go(-1)"></span>
      <span class="register_singin">发起活动</span>
      <span class="iconfont icon-wechaticon27" @click="submit" :style="{opacity: save ? 1:0.5}"></span>
    </div>
    <div class="editor_phone needsclick">
      <group class="wear_e">
        <x-input placeholder="请输入标题" v-model="title"></x-input>
      </group>
      <group class="wear_e">
        <cell :title="'出行信息'" :value="isChoice ? '已选择':'选择'" is-link @click.native="isShow=true"></cell>
      </group>
      <quill-editor ref="myTextEditor" class="needsclick"
                    v-model="content"
                    :options="editorOption"
                    :placeholder="'出行信息'"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @ready="onEditorReady($event)">
      </quill-editor>
    </div>
    <chocieMessage v-show="isShow" v-on:hideChoice="isShow=!isShow" v-on:onRight="choiceMessage"></chocieMessage>
  </div>
</template>

<script>
  import chocieMessage from 'src/page/action/chocieMessage';
  /*  import {VueEditor} from 'vue2-editor';*/
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'

  import {quillEditor} from 'vue-quill-editor'
  import {Group, Cell, XInput, XTextarea} from 'vux';
  export default {
    data () {
      return {
        isShow: false,
        isChoice: false,
        title: '',
        name: '01-example',
        content: `输入活动信息`,
        editorOption: {
          modules: {
            toolbar: [
              ['image']
            ]
          }
        }
      }
    },
    components: {
      Group,
      Cell,
      XInput,
      XTextarea,
      chocieMessage,
      quillEditor
    },
    computed: {
      editor() {
        return this.$refs.myTextEditor.quill
      },
      save(){
        if (this.isChoice && this.s.length>0 && this.content.length>0) {
          return true
        }
        return false
      }
    },
    mounted() {
    },
    methods: {
      choiceMessage(v){
        this.label = v;
        console.log(this.label);
        this.isChoice = true;
        this.isShow = !this.isShow
      },
      submit(){
        if(this.save){
          this.$router.push('/joinSucess/0');
        }
      },
      update (e) {   //上传照片
        var self = this;
        let file = e.target.files[0];
        /*eslint-disable no-undef */
        let param = new FormData();  //创建form对象
        param.append('file', file, file.name);  //通过append向form对象添加数据
        param.append('chunk', '0'); //添加form表单中其他数据
        console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          headers: {'Content-Type': 'multipart/form-data'}
        };
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        //添加请求头
        axios.post('http://172.16.0.61:3001/updateImg', param, config)
          .then(response => {
            if (response.data.code === 0) {
              self.ImgUrl = response.data.data;
            }
            console.log(response.data);
          });
      },
      /* uill.getSelection()*/
      async handleImageAdded (file, Editor, cursorLocation) {
        let formData = new FormData();
        formData.append('type', 1);//通过append向form对象添加数据
        formData.append('images', file);
        formData.append('userId', sessionStorage.getItem('userId'));
        try {
          let result = await this.$http({
            url: this.baseURL + '/updateImg',
            method: 'POST',
            data: formData
          });
          let url = this.imageUrl + result.data.url; //Get url from response
          Editor.insertEmbed(cursorLocation, 'image', url);
        } catch (err) {
          console.log(err.message);
        }
        /*this.axios({
         url: 'http://172.16.0.61:3001/updateImg',
         method: 'POST',
         data: formData
         }).then(result => {

         }).catch(err => {
         console.log(err);
         });*/
      },
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        /*
         * 窗口高度减去输入框高度和输入框到顶部的距离，即输入框高度，不过获取焦点时要加个延时

         */
        var self = this;
        self.s = document.body.offsetHeight

      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .set_action {
    @include wh(100%, 100%);
    background: rgba(236, 236, 236, 1);
    display: flex;
    flex-flow: column;
    position: absolute;
    left: 0;
    top: 0;
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
        @include wh(46px, 44px);
        flex: 0 0 46px;
        text-align: center;
        @include sc(22px, #fff);
      }
      .icon-wechaticon27 {
        font-size: 24px;
        color: rgba(255, 255, 255, 1);
      }
      .register_singin {
        flex: 1;
        text-align: center;
        @include sc(15px, #fff)
      }
    }
    .editor_phone {
      display: flex;
      flex: 1;
      background: #fff;
      flex-flow: column;
      .wear_e {
        flex: 0 0 49px;
        .weui-cells {
          margin-top: 0;
          @include sc(15px, rgba(57, 64, 67, 1));
          p {
            margin: 0;
          }
          &:before {
            border: 0;
          }
        }
        .weui-cell {
          padding-left: 0;
        }
        .weui-cell_access .weui-cell__ft:after {
          border-width: 1px 1px 0 0
        }
      }
      .quill-editor {
        flex: 1;
        display: flex;
        flex-flow: column;
        .ql-toolbar {
          width: 100%;
          height: 50px;
          border: 0;
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 300;
          background: #fff;
          &:after {
            width: 100%;
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            height: 1px;
            border-top: 1px solid #C7C7C7;
            color: #C7C7C7;
            -webkit-transform-origin: 0 100%;
            transform-origin: 0 100%;
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
          }
        }
        .ql-container {
          border: 0;
          flex: 1;
          padding-bottom: 60px;
        }
      }
    }
  }
</style>
