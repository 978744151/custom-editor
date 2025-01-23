<template>
    <div :class="stateClass" class="coupon-page-list-item " :style="{ height: height + 'px', width: width + 'px', }">
        <div class="coupon-page-list-item-left gpyh-center">
            <div>
                <span class="coupon-page-list-item-left-num">{{
                    item.couponAmount || item.cashCouponAmount || 10
                    }}</span>
                <span class="coupon-page-list-item-left-at">元</span>
            </div>
        </div>
        <ItemRight :item="item">
        </ItemRight>
        <div class="coupon-right">
            <div class="coupon-page-list-item-button gpyh-center" v-if="item.buttonType === 1" @click="getCoupon(item)">
                立即领取
            </div>
            <div class="coupon-page-list-item-button gpyh-center font24" v-if="item.buttonType === 2"
                @click="onUse(item)">
                立即使用
            </div>
            <div class="coupon-page-list-item-button gpyh-center" v-if="item.buttonType === 3">
                已抢光
            </div>
            <div class="coupon-page-list-item-button gpyh-center" v-if="item.buttonType === 5">
                已领取
            </div>
            <div class="coupon-page-list-item-button gpyh-center" v-if="item.buttonType === 4">
                已过期
            </div>
            <div class="coupon-page-list-item-button gpyh-center" v-if="item.buttonType === 6">
                已使用
            </div>
            <div class="coupon-page-list-item-tag gpyh-center" v-if="item.applyItemId == 0">
                新客
            </div>
            <div class="coupon-page-list-item-ready gpyh-center" v-if="item.personLimitNum > 1 && item.seckillNum > 0">
                （已领 {{ item.seckillNum }} 张)
            </div>
        </div>
        <div class="coupon-page-list-item-ptag gpyh-center" v-if="item.applyItemId && item.brandList">
            品牌券
        </div>
        <div class="coupon-page-list-item-ptag gpyh-center" v-if="item.couponType == 2">代金券</div>

    </div>
</template>

<script>
import moment from "moment";
import ItemRight from "./item-right";
// import ljsy from "@/assets/coupon/ljsy.png";
// import ygq from "@/assets/coupon/ygq.png";
// import ylq from "@/assets/coupon/ylq.png";

export default {
    components: {
        ItemRight,
    },
    filters: {
        /**
        * @buttonType
        * 1 立即领取
        * 2 立即使用
        * 3 已抢光
        * 4 已过期
        * 5 已领取
        * 6 已使用
        */
        formatBackground() {
            // switch (status) {
            //     case 1:
            //         return ljsy;
            //     case 3:
            //         return ygq;
            //     case 5:
            //         return ylq;
            //     default:
            //         return ljsy;
            // }
        },
    },
    props: {
        item: {},
        height: {
            type: Number,
            default: 168
        },
        width: {
            type: Number,
            default: 492
        },
    },
    data() {
        return {
            moment,
            // state: ''
        };
    },
    computed: {
        /**
         * @buttonType
         * 1 立即领取
         * 2 立即使用
         * 3 已抢光
         * 4 已过期
         * 5 已领取
         * 6 已使用
         */
        cantUse() {
            const { buttonType } = this.item;
            return buttonType === 3 || buttonType === 4 || buttonType === 5 || buttonType === 6;
        },
        stateClass() {
            const { buttonType } = this.item;
            let className = "";
            if (buttonType === 2) {
                className = "active";
            }
            if (this.cantUse) {
                className = "disabled";
            }
            return className;
        },
    },
    methods: {},
};
</script>

<style lang="scss">
.coupon-page-list-item {
    margin-bottom: 20px;
    background: url('../assets/coupon/coupon-item.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    position: relative;
    border-radius: 6px;

    .gpyh-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .coupon-right {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-right: 5px;
    }

    &-button {
        cursor: pointer;
        // position: absolute;
        // right: 20px;
        // top: 35px;
        width: 68px;
        height: 160px;
        background: linear-gradient(0deg, #ff6600 0%, #ff0000 100%), #ff000c;
        border-radius: 6px;
        font-size: 22px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: center;
        color: #ffffff;
        padding: 0 23px;

        &.font24 {
            font-size: 24px !important;
        }
    }

    &-ptag {
        font-size: 18px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        color: #985f0e;
        width: 74px;
        height: 40px;
        background: #ffeea2;
        border-radius: 8px 0px 8px 0px;
        position: absolute;
        left: 0;
        top: 0;
    }

    &-tag {
        font-size: 12px;
        font-family: SourceHanSansSC, SourceHanSansSC-Regular;
        font-weight: 400;
        text-align: left;
        color: #ff0100;
        width: 28px;
        height: 28px;
        // width: 35px;
        // padding: 0 8px;
        height: 21px;
        background: #ffebe4;
        border-radius: 8px 0px 8px 0px;
        position: absolute;
        left: 0;
        top: 0;
    }

    &-ready {
        color: #ff0100;
        // position: absolute;
        // right: 56px;
        // bottom: 15px;
        margin-top: 10px;
    }

    &-left {
        width: 150px;
        height: inherit;

        &-num {
            font-size: 50px;
            font-family: Source Han Sans SC, Source Han Sans SC-Bold;
            font-weight: 700;
            color: #ff1f1e;
        }

        &-at {
            font-size: 20px;
            font-family: Source Han Sans SC, Source Han Sans SC-Bold;
            font-weight: 800;
            color: #ff1f1e;
            vertical-align: super;
        }
    }

    &-right {
        flex: 1;
        height: inherit;
        padding: 24px 0;

        padding-left: 25px;

        // padding-top: 12px;
        &-ques {
            width: 21px;
            height: 21px;
            margin-bottom: -4px;
            cursor: pointer;
        }

        &-title {
            font-size: 26px;

            color: #303030;
        }

        &-desc {
            font-size: 18px;

            color: #808080;
            display: flex;
            align-items: center;
            line-height: 26px;
            margin-top: 10px;

            position: relative;

            &-text {
                max-width: 230px;
                margin-right: 5px;
                // display: -webkit-box;
                // -webkit-box-orient: vertical;
                // -webkit-line-clamp: 2;
                // overflow: hidden;
            }
        }

        &-time {
            font-size: 18px;
            font-family: Source Han Sans CN, Source Han Sans CN-Regular;
            font-weight: 400;
            color: #808080;
            // margin-top: 5px;
        }
    }

    &.active {
        // background: url("../../assets/images/coupon-item-active.png") no-repeat;
        background-size: cover;

        .coupon-page-list-item-button {
            background: linear-gradient(155deg, #b6e447 0%, #ff912f 0%, #ff5a00 99%), #ffe1c4;
        }

        .coupon-page-list-item-ready {
            color: #FF4200;
        }

        .coupon-page-list-item-left {
            .coupon-page-list-item-left-num {
                color: #FF4200;
            }

            .coupon-page-list-item-left-at {
                color: #FF4200;
            }
        }
    }

    &.disabled {
        // background: url("../../assets/images/coupon/coupon-item-disabled.png") no-repeat;
        background-size: cover;

        .coupon-page-list-item-button {
            background: linear-gradient(155deg, #b6e447 0%, #b5b5b5 0%, #8a8a8a 99%), #ffe1c4;
        }

        .coupon-page-list-item-ready {
            color: #808080
        }

        .coupon-page-list-item-left {
            .coupon-page-list-item-left-num {
                color: #808080
            }

            .coupon-page-list-item-left-at {
                color: #808080
            }
        }

        .coupon-page-list-item-right-title {
            color: #808080
        }
    }
}
</style>