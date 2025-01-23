<template>
    <div class="act-img-config">
        <div>
            <div class="act-img-config-flex">
                <p class="act-img-config-title">字段属性</p>
            </div>
            <div class=" act-img-config-field">
                <!-- <el-form ref="form" label-width="100px"> -->
                <el-form-item label="背景" label-width="110px">
                    <avue-upload :action="action" :propsHttp="propsHttp" v-model="bg"
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

        <el-collapse v-model="activeNames">
            <Draggable :list="data.params.list">
                <el-collapse-item class="" :title="`图文导航${index + 1}`" v-for="(item, index) in data.params.list"
                    :key="index" :name="index">
                    <template slot="title">
                        <div class="act-img-config-flex cursor-move">
                            <p class="act-img-config-title">图文导航{{ index + 1 }}</p>
                            <el-button type="text" @click.stop="removeBanner(index)"
                                style="margin-left: 20px;">删除</el-button>
                        </div>
                    </template>

                    <div class=" act-img-config-ad">
                        <el-form-item label="上传图片">
                            <avue-upload :action="action" :propsHttp="propsHttp" v-model="item.image"
                                list-type="picture-card"></avue-upload>
                        </el-form-item>
                        <el-form-item label="跳转页面">
                            <el-select v-model="item.url" placeholder="">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="图片链接">
                            <el-input v-model="item.href" :defaultValues="defaultValues" clearable
                                placeholder="链接"></el-input>
                        </el-form-item>
                    </div>
                </el-collapse-item>
            </Draggable>

        </el-collapse>
        <div class="act-img-config-absolute" @click="addBanner">
            <i class="el-icon-plus"></i>
            添加图文导航
        </div>
    </div>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
    name: "config-actNav",
    props: ['data', 'defaultValues'],
    components: {
        Draggable
    },
    data: function () {
        return {
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
                value: '1',
                label: '商品详情'
            }, {
                value: '2',
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
            this.$set(this.data.params, 'height', 255)
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