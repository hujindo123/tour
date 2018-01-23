/**
 * Created by Administrator on 2017/11/21.
 */
import fetch from "../config/fetch";

/**
 * banner
 */
export const banner = () => fetch('/banner');
export const guanggao = () => fetch('/guanggao');
export const list0 = (count) => fetch('/list0', {
  count: count
});
export const list = () => fetch('/list');
export const list1 = () => fetch('/list1');
/*// 发起*/
export const list2 = () => fetch('/list2'); //参与
export const list3 = () => fetch('/list3');//收藏
export const details = () => fetch('/details');
