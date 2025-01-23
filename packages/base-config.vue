<template>
    <div class="base-config">
        <el-form label-suffix="：" labelPosition="left" labelWidth="90px" size="small">
            <el-form-item label="专题名称">
                <el-input v-model="data.name" clearable placeholder="专题名称"></el-input>
            </el-form-item>
            <el-form-item label="专题时间">
                <el-date-picker v-model="data.time" type="datetimerange" range-separator="至" start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="专题描述">
                <el-input v-model="data.desc" clearable placeholder="专题描述" type="textarea" rows="5"></el-input>
            </el-form-item>
            <el-form-item label="背景颜色">
                <el-color-picker v-model="data.background" show-alpha></el-color-picker>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import fields from './fieldsConfig.js'

const dateArr = [
    'year', 'month', 'week', 'date', 'datetime', 'time', 'daterange', 'timerange', 'datetimerange', 'dates'
]

export default {
    name: 'widget-config',
    props: ['data', 'defaultValues'],
    computed: {
        getComponent() {


            const prefix = 'config-'
            const { type, component } = this.data
            console.log('name', type, component);
            if ((!type) && type != 'ueditor') return prefix + 'custom'
            let result = 'input'

            if ([undefined, 'input', 'password', 'url'].includes(type)) result = 'input'
            else if (dateArr.includes(type)) result = 'date'
            else if (['array', 'img'].includes(type)) result = 'array'
            else if (['tree', 'cascader'].includes(type)) result = 'tree'
            else if (['radio', 'checkbox', 'select'].includes(type)) result = 'select'
            else result = type
            console.log(prefix + result);
            return prefix + result
        }
    },
    watch: {
        'data.required'(val) {
            if (val) this.validator.required = { required: true, message: `${this.data.label}必须填写` }
            else this.validator.required = null
            this.generateRule()
        },
        'data.pattern'(val) {
            if (val) this.validator.pattern = { pattern: new RegExp(val), message: `${this.data.label}格式不匹配` }
            else this.validator.pattern = null
            this.generateRule()
        }
    },
    data() {
        return {
            fields,
            collapse: ['1', '2', '3'],
            validator: {
                type: null,
                required: null,
                pattern: null,
                length: null
            }
        }
    },
    mounted() {
        console.log('this.data', this.data)

    },
    methods: {
        handleChangeType(type) {
            if (!type) return
            let config
            for (let f of this.fields) {
                config = f.list.find(l => l.type == type)
                if (config) break
            }
            if (!config) return
            for (let key in config) {
                if (config && Object.prototype.hasOwnProperty.call(config, key) && !['icon', 'label', 'span'].includes(key)) this.data[key] = config[key]
            }
        },
        generateRule() {
            const rules = []
            Object.keys(this.validator).forEach(key => {
                if (this.validator[key]) rules.push(this.validator[key])
            })
            if (rules.length == 0) delete this.data.rules
            else this.data.rules = rules
        },
    }
}
</script>

<style>
.base-config {
    padding-top: 12px;
}
</style>
