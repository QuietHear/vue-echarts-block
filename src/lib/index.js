/*
* @Author: aFei
* @Date: 2018-11-28 16:18:25
*/
/*
* @LastEditors: aFei
* @LastEditTime: 2018-11-28 16:18:20
*/
import chart from './chart';

const comment = {
    install(Vue) {
        Vue.component('chart', chart);
    },
};
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(comment);
}

export default comment;