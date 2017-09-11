<template>
    <div>
        Template
        <mu-popup v-if="showMsg">发的撒多撒放散阀</mu-popup>
        <mu-popup  position="top" :overlay="false"
                  :open="showMsg">
            <p>
                发大水范德萨范德萨
            </p>
        </mu-popup>
        <input type="button" @click="showMyCustomComponent" value="测试队长">
    </div>
</template>
<script>
    import Toast from '@/common/toast'
    export default {
        data() {
            return {
                showMsg:false,
            };
        },
        mounted(){
            this.showMsg = true;
        },
        methods:{
            showMyCustomComponent:function(){
                Toast({
                    type:11
                });
            }
        },
        components:{
//            Alert:import('muse-components/popup')
            'mu-popup':r=>require(['muse-components/popup'], r)
        }
    }
</script>
<style scoped>

</style>