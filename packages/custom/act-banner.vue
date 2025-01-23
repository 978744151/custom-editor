<template>
    <el-carousel :height="height + 'px'" :interval="interval" :type="card" :direction="direction">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
            <img :src="item.image" :alt="item.url" class="banner-image">
            <!-- <div class="banner-title" @click="open(item.href)">{{ item.url }}</div> -->
        </el-carousel-item>
    </el-carousel>
</template>

<script>
import banner from '@/assets/coupon/bg.png'

export default {
    name: 'act-banner',
    props: {
        height: {
            type: Number,
            default: 550
        },
        component: {
            type: Object,
            default: () => ({})
        },
        icon: {
            type: String,
            default: ''
        },
        bannerList: {
            type: Array,
            default: () => [{}]
        },
        card: {
            type: String,
            default: ''
        },
        direction: {
            type: String,
            default: 'horizontal'
        },
        interval: {
            type: Number,
            default: 5000
        },
        width: {
            type: Number,
            default: 492
        }
    },
    data() {
        return {
            banner
        }
    },
    methods: {
        open(url) {
            if (url) {
                window.open(url, '_blank')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
// .el-carousel__item {
//     position: relative;
//     overflow: hidden;

.banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

//     .banner-title {
//         position: absolute;
//         bottom: 0;
//         left: 0;
//         right: 0;
//         padding: 10px;
//         background: rgba(0, 0, 0, 0.5);
//         color: #fff;
//         font-size: 16px;
//         cursor: pointer;
//     }
// }</style>