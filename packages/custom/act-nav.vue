<template>
    <!-- <el-carousel :height="height + 'px'" :interval="5000">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
            <img :src="item.image" :alt="item.url" class="banner-image">
            <div class="banner-title" @click="open(item.href)">{{ item.url }}</div>
        </el-carousel-item>
    </el-carousel> -->
    <!-- <el-row :gutter="20"> -->
    <div class="act-nav" :fallbackOnBody="true">
        <div :span="span" v-for="(item, index) in list" :key="index" class="act-nav-item">
            <div class="block">
                <el-image @click="open(item.href)"
                    :src="item.image || 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"
                    :style="{ height: height + 'px', width: width + 'px' }"></el-image>
                <!-- <el-tag type="success">{{ item.href }}</el-tag> -->
            </div>
        </div>
    </div>
    <!-- </el-row> -->
</template>

<script>

export default {
    components: {
        // Draggable
    },
    name: 'act-nav',
    props: {
        height: {
            type: Number,
            default: 255
        },
        width: {
            type: Number,
            default: 214
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

.act-nav {
    width: 1200px;
    // width: 1190px; // 设置固定宽度：214px * 5 + 20px * 4 = 1190px
    margin: 0 auto; // 居中显示
    display: flex;
    flex-wrap: wrap;
    padding: 37px;
    gap: 14px;
    // background-color: red;

    &-item {
        // width: 214px;
    }
}
</style>