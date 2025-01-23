<template>
    <div class="act-title">
        <div class="block">
            <el-image :src="titlePng" :style="{}" :fit="fit"></el-image>
        </div>
    </div>
</template>
<script>
// import { h } from 'vue';
import titlePng from '@/assets/coupon/title-screen.png'
export default {
    name: 'act-img',
    props: {
        height: {
            type: Number,
            default: 60
        },
        width: {
            type: Number,
            default: 100
        },
        fit: {
            type: String,
            default: ''
        },
        src: {
            type: String,
            default: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        }

    },
    data() {
        return {
            titlePng
        }
    }
}
</script>
<style lang="scss" scoped>
::v-deep .block {
    line-height: 0;
}

.act-title {}
</style>