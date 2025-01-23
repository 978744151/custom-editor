<template>
    <div class="act-coupon" :fallbackOnBody="true">
        <div :span="span" v-for="(item, index) in list" :key="index" class="act-coupon-item">
            <!-- <div class="block">
                <el-image @click="open(item.href)"
                    :src="item.image || 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"
                    :style="{ height: height + 'px', width: width + 'px' }"></el-image>
            </div> -->
            <coupon-item :item="item" v-bind="$attrs"></coupon-item>
        </div>
    </div>
</template>

<script>
import couponItem from '../componets/coupon-item.vue';
export default {
    components: {
        couponItem
    },
    name: 'act-nav',
    props: {
        height: {
            type: Number,
            default: 168
        },
        width: {
            type: Number,
            default: 492
        },
        component: {
            type: Object,
            default: () => ({})
        },
        icon: {
            type: String,
            default: ''
        },
        list: {
            type: Array,
            default: () => [{}]
        },
        span: {
            type: Number,
            default: 24
        },
    },
    watch: {
        component(val) {
            console.log(val)
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
::v-deep .block {
    line-height: 0;
}

.act-coupon {
    // width: 1190px; // 设置固定宽度：214px * 5 + 20px * 4 = 1190px
    margin: 0 auto; // 居中显示
    display: flex;
    flex-wrap: wrap;
    padding: 0px 50px;
    justify-content: space-between;
    width: 1104px;
    padding-top: 24px;

    // background-color: red;
    &-item {
        width: 492px;
        height: 168px;
        margin-bottom: 24px;
        // width: 214px;
    }
}
</style>