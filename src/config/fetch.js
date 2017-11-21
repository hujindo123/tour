import Vue from "vue";
import {AjaxPlugin} from "vux";

Vue.use(AjaxPlugin); //console.log(Vue.http) this.$http

const baseUrl = 'http://localhost:3001';
export default async (url, data, method) => {
  const m = method ? 'POST' : 'GET';
  if (!data) {
    data = {};
  }
  data['userId'] = sessionStorage.getItem('userId') ? sessionStorage.getItem('userId') : '';
  return new Promise(function (resolve, reject) {
    Vue.http({
      method: m,
      url: baseUrl + url,
      params: data
    }).then(response => {
      resolve(response.data);
    }, (error) => {
      reject(error.data);
    });
  });
}

