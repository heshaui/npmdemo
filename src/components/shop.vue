<template>
    <div>
        <button @click="add">加</button>
        <input type="text" :value="value">
        <button @click="sub">
            减
        </button>
    </div>
</template>
<script>
import bus from './eventBus'
export default {
    props: {
        num: Number
    },
    created() {
        this.value = this.num
    },
    data() {
        return {
            value: 0
        }
    },
    methods: {
        add() {
            this.value ++
            bus.$emit('numchange', this.value)
        },
        sub() {
            if (this.value > 1) this.value --
            bus.$emit('numchange', this.value)
        }
    }
}
</script>