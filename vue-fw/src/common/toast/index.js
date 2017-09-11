import toastVue from './toast.vue'
import Vue from 'vue'

console.log(toastVue);
let ToastConstructor = Vue.extend(toastVue);
const defaults = {
    text: null,
    fullscreen: true,
    body: false,
    lock: false,
    customClass: '',
    type:123243
};
let Toast = (options={}, callback)=>{
    if (Vue.prototype.$isServer) return;
    options = Object.assign({}, defaults, options);
    let parent = document.body;
    let instance = new ToastConstructor({
            el: document.createElement('div'),
            data: options
    });
    parent.appendChild(instance.$el);
    Vue.nextTick(() => {
        instance.visible = true;
    });
    instance.$on('')
    return instance;
}

export default Toast;