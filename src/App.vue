<template>
  <div id="app">
    <avue-form-design style="height: 100vh;" :options="options" @submit="handleSubmit"
      :custom-fields="customFields"></avue-form-design>
  </div>
</template>

<script>

import banner from '@/assets/components/banner.png'
import coupon from '@/assets/components/coupon.png'
import nav from '@/assets/components/nav.png'
import title from '@/assets/components/title.png'
import img from '@/assets/components/img.png'
import actBanner from '@/custom/act-banner.vue'
import actCoupon from '@/custom/act-coupon.vue'
import actImg from '@/custom/act-img.vue'
import actNav from '@/custom/act-nav.vue'
import actTitle from '@/custom/act-title.vue'
import bannerImg from '@/assets/coupon/bg.png'
import actImages from '@/assets/coupon/images.png'

export default {
  name: 'app',
  data() {
    return {
      customFields: [
        {
          title: '轮播图',
          component: actBanner,//ele分割线
          span: 24,
          icon: banner,
          type: 'actBanner',
          tips: '',
          labelWidth: '0px',
          params: {
            height: 550,
            width: 492,
            bannerList: [{ image: bannerImg }],
            card: '',
            direction: 'horizontal',
            interval: 5000
          }
        },
        {
          title: '优惠券',
          component: actCoupon,
          labelWidth: '0px',
          span: 24,
          icon: coupon,
          type: 'actCoupon',
          tips: '',
          params: {
            height: 168,
            width: 492,
            list: [],
            span: 24
          },
          event: {
            close: eval(`() => {
              console.log('alert关闭事件')
            }`)
          }
        },
        {
          title: '活动标题',
          component: actTitle,
          labelWidth: '0px',
          span: 24,
          icon: nav,
          tips: '',
          type: 'actTitle',
          params: {
            height: 60,
            src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
          },
          event: {
            close: eval(`() => {
              console.log('alert关闭事件')
            }`)
          }
        },
        {
          title: '图文导航',
          component: actNav,
          labelWidth: '0px',
          type: 'actNav',
          span: 24,
          icon: title,
          tips: '',
          params: {
            height: 255,
            width: 214,
            list: [],
            span: 24
          },
          event: {
            close: eval(`() => {
              console.log('alert关闭事件')
            }`)
          }
        },
        {
          title: '图文广告',
          component: actImg,
          labelWidth: '0px',
          type: 'actImg',
          span: 24,
          icon: img,
          tips: '',
          params: {
            height: 480,
            width: 1104,
            bannerList: [{ image: actImages }],
            card: '',
            direction: 'horizontal',
            interval: 5000
          },
          event: {
            close: eval(`() => {
              console.log('alert关闭事件')
            }`)
          }
        },
      ],
      options: {},
    }
  },
  methods: {
    handleSubmit(val) {
      this.$message.success("查看控制台")
      console.log(val);
    },
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100%;
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
