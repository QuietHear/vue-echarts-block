/*
* @Author: aFei
* @Date: 2018-11-28 16:18:25
*/
/*
* @LastEditors: aFei
* @LastEditTime: 2018-11-29 10:09:24
*/
import charts from './charts';

const comment = {
    install(Vue) {
        Vue.component('charts', charts);
    },
};
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(comment);
}

export default comment;
