import Vue from "vue";
import {baseUrl} from 'src/config/env'
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

