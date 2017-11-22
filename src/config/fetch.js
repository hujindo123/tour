import Vue from "vue";
import {AjaxPlugin} from "vux";
import {baseUrl} from 'src/config/env';

Vue.use(AjaxPlugin);

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

