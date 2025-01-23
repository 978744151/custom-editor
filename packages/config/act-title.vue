<template>
    <div class="act-img-config">
        <div>
            <div class="act-img-config-flex">
                <p class="act-img-config-title">字段属性</p>
            </div>
            <div class=" act-img-config-field">
                <!-- <el-form-item label="高度">
                    <el-input-number v-model="data.params.height" :min="0" :step="10" placeholder="高度">
                    </el-input-number>
                </el-form-item> -->
            </div>

        </div>
        <p class="act-img-config-title">活动标题</p>
        <div class="act-img-config-ad">
            <el-form-item label="上传图片">
                <avue-upload :action="action" :propsHttp="propsHttp" v-model="imageUrl"
                    list-type="picture-card"></avue-upload>
            </el-form-item>
        </div>

    </div>
</template>

<script>
export default {
    name: "config-actTitle",
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
            action: 'https://api.avuejs.com/imgupload',
            propsHttp: {
                url: 'url',
                name: 'name',
                res: 'data'
            },

        }
    },
}
</script>
<style lang="scss" scoped>
@import '../styles/config.scss';
</style>