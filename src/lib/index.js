/*
* @Author: aFei
* @Date: 2018-11-28 16:18:25
*/
/*
* @LastEditors: aFei
* @LastEditTime: 2018-11-29 10:48:20
*/
import VueChartsBlock from './VueChartsBlock';

const comment = {
    install(Vue) {
        Vue.component('VueChartsBlock', VueChartsBlock);
    },
};
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(comment);
}

export default comment;
