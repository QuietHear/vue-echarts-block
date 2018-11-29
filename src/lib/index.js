/*
* @Author: aFei
* @Date: 2018-11-28 16:18:25
*/
/*
* @LastEditors: aFei
* @LastEditTime: 2018-11-29 15:17:57
*/
import vueChartsBlock from './vueChartsBlock';

const comment = {
    install(Vue) {
        Vue.component('vueChartsBlock', vueChartsBlock);
    },
};
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(comment);
}

export default comment;
