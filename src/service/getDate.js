/**
 * Created by Administrator on 2017/11/21.
 */
import fetch from "../config/fetch";

/**
 * 用户中心
 */
export const getUserMessage = () => fetch('/login', {
  account: 'hujindong',
  password: '123456'
}, 'POST');
