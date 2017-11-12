import bar from './components/bar'
import Vue from 'vue'
var Loading = {
    bus: new Vue(),
    opts: {        
        body: null,
        type: 'line',    //line, circle
    },
    show: function(loaded, total){
        var width = 0;
        loaded = typeof(loaded) === 'number'?loaded:0;
        total = typeof(total) === 'number'?total:0;
        width = (loaded == 0 || total == 0)?0:loaded / total * 100;
        Loading.bus.$emit('loadingBarShow', width);
    },
    hide: function(){
        Loading.bus.$emit('loadingBarHide');
    }
}
Loading.install = function(Vue, options){
    var that = this;
    Vue.component(bar.name, bar);
    // opt
    /*for (var property in options) {
		Loading.opt[property] = options[property];
    }*/
    window.$loading = Vue.prototype.$loading = Loading;
}
export default Loading;