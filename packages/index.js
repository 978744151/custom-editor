import Config from './config'
import FormDesign from './index.vue'

import actBanner from './custom/act-banner.vue'
import actCoupon from './custom/act-coupon.vue'
import actImg from './custom/act-img.vue'
import actNav from './custom/act-nav.vue'
import actTitle from './custom/act-title.vue'
import { getAsVal, avueVersion } from './utils/index.js'

export default {
  install(Vue) {
    Vue.use(Config)
    Vue.component('Avue' + FormDesign.name, FormDesign);
    Vue.component('Avue' + actBanner.name, actBanner);
    Vue.component('Avue' + actCoupon.name, actCoupon);
    Vue.component('Avue' + actImg.name, actImg);
    Vue.component('Avue' + actNav.name, actNav);
    Vue.component('Avue' + actTitle.name, actImg);
    Vue.prototype.getAsVal = getAsVal
    Vue.prototype.avueVersion = avueVersion
  }
}
