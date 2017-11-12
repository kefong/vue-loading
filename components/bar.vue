<template>
    <div class="vue-loading-bar" :style="{'width':width + '%'}" v-show="enabled"></div>
</template>
<script>
export default {
    name: 'loading-bar',
    data: function(){
        return {
            width: 10,
            enabled: false
        }
    },
    created: function(){
        var that = this;
        this.$loading.bus.$on('loadingBarShow', function(width){
            that.enabled = true;
            that.width = typeof(width) == 'number'? width : 10;
        });
        this.$loading.bus.$on('loadingBarHide', function(){
            that.enabled = false;
        });
    },
    methods: {
        updateWidth: function(width){
            this.width = width;
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


