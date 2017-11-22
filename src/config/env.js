/**
 * Created by Administrator on 2017/11/21.
 */
let mode = 'history';// 模式
let baseUrl = 'http://localhost:3001'; //接口地址
if (process.env.NODE_ENV == 'development') {

}else if(process.env.NODE_ENV == 'production'){

  // baseUrl = 'http://cangdu.org:8001';
}
export  {
  mode,// 模式
  baseUrl, //接口地址
}
