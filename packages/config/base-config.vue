<template>
    <div class="act-img-config">
        <div>
            <div class="act-img-config-flex">
                <p class="act-img-config-title">基础字段</p>
            </div>
            <div class=" act-img-config-field">
                <el-form-item label="高度">
                    <el-input-number v-model="data.params.height" :step="10" placeholder="高度">
                    </el-input-number>
                </el-form-item>
                <!-- <el-form-item label="高度">
                    <el-input-number v-model="data.params.width" :step="10" placeholder="高度">
                    </el-input-number>
                </el-form-item> -->
                <el-form-item label="卡片化">
                    <el-select v-model="data.params.card" placeholder="">
                        <el-option v-for="item in cardList" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="方向">
                    <el-select v-model="data.params.direction" placeholder="">
                        <el-option v-for="item in directionList" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="切换时间">
                    <el-input-number v-model="data.params.interval" :step="1000" placeholder="高度">
                    </el-input-number>
                </el-form-item>
            </div>

        </div>
        <div v-for="(item, index) in data.params.bannerList" :key="index">
            <div class="act-img-config-flex">
                <p class="act-img-config-title">轮播图{{ index + 1 }}</p>
                <el-button type="text" @click="removeBanner(index)">删除</el-button>
            </div>
            <div class=" act-img-config-ad">
                <el-form-item label="上传图片">
                    <avue-upload :action="action" :propsHttp="propsHttp" v-model="item.image"
                        list-type="picture-card"></avue-upload>
                </el-form-item>
                <el-form-item label="跳转页面">
                    <el-select v-model="item.href" placeholder="">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="图片链接">
                    <el-input v-model="item.url" :defaultValues="defaultValues" clearable placeholder="链接"></el-input>
                </el-form-item>
            </div>
        </div>
        <div class="act-img-config-absolute" @click="addBanner">
            <i class="el-icon-plus"></i>
            添加轮播图
        </div>
    </div>
</template>

<script>
import banner from '@/assets/coupon/bg.png'

export default {
    name: "config-actBanner",
    props: ['data', 'defaultValues'],
    data: function () {
        return {
            imageUrl: '',
            page: this.data.params.page,
            options: [{
                value: '1',
                label: '商品详情'
            }, {
                value: '2',
                label: '分类列表'
            }],
            card: this.data.params.card,
            direction: this.data.params.direction,
            directionList: [{
                value: 'horizontal',
                label: '水平'
            }, {
                value: 'vertical',
                label: '垂直'
            }],
            cardList: [{
                value: '',
                label: '否'
            }, {
                value: 'card',
                label: '是'
            }
            ],
            action: 'https://api.avuejs.com/imgupload',
            propsHttp: {
                url: 'url',
                name: 'name',
                res: 'data'
            }
        }
    },
    created() {
        if (!this.data.params.height) {
            this.$set(this.data.params, 'height', 550)
        }
    },
    methods: {
        addBanner() {
            this.data.params.bannerList.push({
                href: '',
                height: this.data.params.height || 550,
                image: banner,
                url: ''
            })
        },
        removeBanner(index) {
            this.data.params.bannerList.splice(index, 1)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/config.scss';
</style>