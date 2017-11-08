var Loading = {
    opts: {
        type: 'top',    //top, bottom, middle

    }
}
Loading.install = function(Vue, options){
    //opt
    for (var property in options) {
		Loading.opt[property] = options[property];
    }
}
export default Loading;