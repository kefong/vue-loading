import bar from './components/bar'
import Vue from 'vue'
var Loading = {
    bus: new Vue(),
    opts: {        
        body: null,
        type: 'line',    //line, circle
    },
    show: function(width){
        Loading.bus.$emit('loadingBarShow', typeof(width) === 'number'?width:10);
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
    Vue.prototype.$loading = Loading;
}
export default Loading;