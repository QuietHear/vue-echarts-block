/*
* @Author: aFei
* @Date: 2018-11-28 16:18:25
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2022-11-16 16:43:23
*/
import vueEchartsBlock from './vueEchartsBlock';

const comment = {
    install(Vue) {
        Vue.component('vueEchartsBlock', vueEchartsBlock);
    },
};
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(comment);
}

export default comment;
