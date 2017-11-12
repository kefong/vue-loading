<template>
    <div class="vue-loading-bar" :style="{'width':width + '%', 'opacity': opacity}" v-show="enabled"></div>
</template>
<script>
export default {
    name: 'loading-bar',
    data: function(){
        return {
            width: 10,
            enabled: false,
            opacity:0
        }
    },
    created: function(){
        var that = this;
        this.$loading.bus.$on('loadingBarShow', function(width){
            that.show(width);
        });
        this.$loading.bus.$on('loadingBarHide', function(){
            that.hide();
        });
    },
    methods: {
        show: function(width){
            var that = this;

            this.enabled = true;
            this.opacity = 1;
            this.width = typeof(width) == 'number'? width : 10;
            this.width = this.width < 30? 30:this.width;
            if(this.width == 100){
                setTimeout(function(){			
                    that.hide();
                }, 800);
            }
        },
        hide: function(){
            this.enabled = false;
            this.opacity = 0;
        }
    }
}
</script>
<style lang="postcss" scoped>
.vue-loading-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background-color: #77b6ff;
    box-shadow: 0 0 10px rgba(119,182,255,0.7);
    transition: width 0.4s ease;
    width: 0;
}
</style>


