<template>
    <div class="coupon-page-list-item-right">
        <div>
            <div class="coupon-page-list-item-right-title" v-if="item && item.purchaseAmount && item.couponType == 1">
                满{{ item.purchaseAmount }}元可用</div>
            <div class="coupon-page-list-item-right-title" v-if="item.couponType == 2">代金券</div>
            <div class="coupon-page-list-item-right-desc">
                <div class="ellipsis coupon-page-list-item-right-desc-text" v-if="item.couponType == 1">
                    {{ item.couponName }}
                    <!-- <span v-for="items in item.brandList">{{ items }}</span>;<span>{{ item.merchant }}</span>可用  -->
                </div>
                <div class="ellipsis coupon-page-list-item-right-desc-text"
                    v-if="(!item.couponName || item.couponType == 2) && item.brandList">
                    <span v-for="(items, index) in item.brandList" :key="index">{{ items }}</span>;<span>{{
                        item.merchant
                        }}</span>可用
                    <el-tooltip class="box-item" effect="light" placement="bottom">
                        <template slot="content">
                            <div v-if="item.brandList" class="box-item-text">限品牌: <span class=""
                                    v-for="(items, index) in item.brandList" :key="index">{{
                                        items }}&nbsp;</span></div>
                            <div v-if="item.merchant" class="box-item-text">限仓库: <span>{{ item.merchant }}</span></div>
                        </template>
                        <div>
                            <img v-show="(item.brandList || item.merchant)" src="@/assets/coupon/coupon-ques.png" alt=""
                                class="coupon-page-list-item-right-ques">
                            <!-- <img v-show="(item.brandList || item.merchant) && item.buttonType === 2"
                            src="@/assets/coupon/y-qes.png" alt="" class="coupon-page-list-item-right-ques"> -->
                        </div>
                    </el-tooltip>
                </div>


            </div>
            <div v-if="item.isThirdEffect == true" class='coupon-page-list-item-right-time'>
                不限三方商家使用
                <!-- <span v-for="items in item.brandList">{{ items }}</span>;<span>{{ item.merchant }}</span>可用  -->
            </div>
            <!-- <div class="coupon-page-list-item-right-desc" v-else>全场通用</div> -->
            <div v-if="item.effectTime && item.expireTime" class="coupon-page-list-item-right-time">{{
                moment(item.effectTime).format('YYYY/MM/DD') }}-{{
                    moment(item.expireTime).format('YYYY/MM/DD') }}
            </div>
            <div v-else class="coupon-page-list-item-right-time">
                自领取之日起{{ item.effectDays }}天有效
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: {
        item: {}
    },
    data() {
        return {
            moment
        }
    },
}
</script>
<style lang="scss">
.coupon-page-list-item-right {
    // padding-top: 4px !important;
}

.el-tooltip__popper {
    border: none !important;
    box-shadow: -1px 0px 7.84px 0.02px rgba(127, 119, 115, 0.20);
}

.el-tooltip__popper.is-light[x-placement^="bottom"] .popper__arrow {
    border-bottom-color: #fff;
    //  box-shadow: -1px 0px 7.84px 0.02px rgba(127, 119, 115, 0.20);
}

.box-item {
    display: inline;
}

.box-item-text {
    font-size: 13px;
    font-family: SourceHanSansSC, SourceHanSansSC-Regular;
    font-weight: 400;
    text-align: left;
    color: #666666;
}
</style>