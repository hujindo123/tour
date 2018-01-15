/**
 * Created by Administrator on 2017/11/21.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin);


Vue.use(Vuex);
const store = new Vuex.Store({}); //其他module
store.registerModule('vux', { //名字自定义
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading;
    }
  }
});
export default store;

