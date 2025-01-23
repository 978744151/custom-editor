<template>
    <div class="act-img-config">
        <div>
            <div class="act-img-config-flex">
                <p class="act-img-config-title"> 字段属性</p>
            </div>
            <div class=" act-img-config-field">
                <!-- <el-form ref="form" label-width="100px"> -->
                <el-form-item label="背景" label-width="110px">
                    <avue-upload :action="action" :propsHttp="propsHttp" v-model="actBg"
                        list-type="picture-card"></avue-upload>
                </el-form-item>
                <el-form-item label="背景是否全屏" label-width="110px">
                    <el-select v-model="isscreen" placeholder="请选择屏幕">
                        <el-option v-for="item in screenOptions" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="高度" label-width="110px">
                    <el-input-number v-model="data.params.height" :min="0" :step="10" placeholder="高度">
                    </el-input-number>
                </el-form-item>
                <el-form-item label="宽度" label-width="110px">
                    <el-input-number v-model="data.params.width" :min="0" :step="10" placeholder="高度">
                    </el-input-number>
                </el-form-item>
                <!-- </el-form> -->

                <!-- <el-form-item label="栅格">
                    <el-select v-model="data.span" placeholder="">
                        <el-option v-for="item in spanList" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item> -->
            </div>
        </div>
        <div class="act-img-config-flex cursor-move">
            <p class="act-img-config-title">优惠券</p>

        </div>
        <div class=" act-img-config-ad">
            <el-form-item label="选择活动">
                <el-select v-model="actId" placeholder="" @change="getActList">
                    <el-option v-for="item in options" :key="item.label" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>

        </div>
        <!-- <el-collapse>
            <Draggable :list="data.params.list">
            <el-collapse-item class="" :title="`图文导航`">
                <template slot="title">

                </template>


</el-collapse-item>
</Draggable>

</el-collapse> -->
        <!-- <div class="act-img-config-absolute" @click="addBanner">
            <i class="el-icon-plus"></i>
            添加图文导航
        </div> -->
    </div>
</template>

<script>
// import Draggable from 'vuedraggable'

export default {
    name: "config-actCoupon",
    props: ['data', 'defaultValues'],
    components: {
        // Draggable
    },
    data: function () {
        return {
            actBg: '',
            actId: '',
            spanList: [
                {
                    value: 24,
                    label: '1'
                }, {
                    value: 12,
                    label: '1/2'
                }, {
                    value: 8,
                    label: '1/3'
                },
                {
                    value: 6,
                    label: '1/4'
                },
                {
                    value: 4,
                    label: '1/6'
                }
            ],
            isscreen: '1', // 选中值
            screenOptions: [
                {
                    value: '0',
                    label: '否'
                },
                {
                    value: '1',
                    label: '是'
                },
            ],
            span: '12',
            imageUrl: '',
            page: this.data.params.page,
            options: [{
                value: [{ purchaseAmount: '10', couponType: 1, couponStatus: 0, couponName: '优惠券', merchant: '品牌', buttonType: 1 }, { purchaseAmount: '20', couponStatus: 1, buttonType: 2, couponType: 2, couponName: '优惠券' }],
                label: '商品详情'
            }, {
                value: [{ purchaseAmount: '10', couponType: 2, brandList: ['法思特哈尔滨商品专用', ''], merchant: '法西斯', couponStatus: 0, couponName: '法思特哈尔滨商品专用专用尔滨商品专用', buttonType: 1, applyItemId: 1, }, { purchaseAmount: '20', couponStatus: 0, couponType: 2, buttonType: 3, couponName: '优惠券' }, { purchaseAmount: '30', couponStatus: 1, couponType: 1, couponName: '法思特哈尔滨商品专用专用尔滨商品专用', buttonType: 5 }],
                label: '分类列表'
            }],
            action: 'https://api.avuejs.com/imgupload',
            propsHttp: {
                url: 'url',
                name: 'name',
                res: 'data'
            },
            activeNames: [],
        }
    },
    created() {
        if (!this.data.params.height) {
            this.$set(this.data.params, 'height', 168)
        }
    },
    methods: {
        addBanner() {
            this.data.params.list.push({
                href: '',
                image: '',
                url: ''
            })
        },
        getActList(list) {
            this.data.params.list = list
        },
        removeBanner(index) {
            this.data.params.list.splice(index, 1)
        }
    },
    watch: {
        'data.params.list': {
            handler(newVal) {
                this.activeNames = newVal.map((_, index) => index)
            },
            immediate: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/config.scss';

.cursor-move {
    cursor: move;
}
</style>