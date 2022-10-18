<template>
    <div>{{ msg }}</div>
</template>
<script>
import bus from './eventBus'
export default {
    data() {
        return {
            msg: ''
        }
    },
    created() {
        bus.$on('numchange', value => {
            this.msg = `您选择了${value}件商品`
        })
    }
}
</script>