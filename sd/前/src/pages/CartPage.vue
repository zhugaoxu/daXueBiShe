<template>
    <div>
        <div class="cart-top"></div>
        <div class="cart-wrapper">
            <div class="content-wrapper">
                <div class="content-top clearfix">
                    <div class="top-right">
                        <h2 class="top-title">我的购物车</h2>
                        <template v-if="user !==null">
                            <template v-if="over">
                                <template v-if="user.cartList.length > 0">
                                    <span class="top-describe">
                                       共&nbsp;{{checkedList.length}}&nbsp;门,
                                       已选择&nbsp;{{checkedItem.length}}&nbsp;门
                                    </span> 
                                </template>
                            </template>
                        </template>
                    </div>
                    <a href="javascript: void(0)" class="order-history">我的订单历史</a>
                </div>
                <div class="content">
                    <template v-if="user == null">
                        <p class="cart-null">购物车内空空如也</p>
                    </template>
                    <template v-else>
                        <template v-if="over">
                            <template v-if="user.cartList.length == 0">
                                <p class="cart-null">购物车内空空如也</p>
                            </template>
                            <template v-else>
                                <div class="checkbox-top">
                                    <input type="checkbox" class="checkbox-item checkbox-item-all" v-model="checkAll" @change="checkAllChange(checkAll)">
                                    <span class="item-1">全选</span>
                                    <span class="item-2">课程</span>
                                    <span class="item-3">金额</span>
                                    <span>操作</span>
                                </div>
                                <ul>
                                    <li class="list-item clearfix" v-for="(item, index) in user.cartList" :key="index">
                                        <div class="item-input">
                                            <input type="checkbox" class="checkbox-item" :value="item.lessonId" v-model="checkedItem" @change="checkedItemChange(checkedItem)">
                                        </div>
                                        <div class="item-img">
                                            <img :src="`/static/images/${item.imgUrl}`">
                                        </div>
                                        <div class="item-title">
                                            <h3>{{item.lessonTitle}}</h3>
                                        </div>
                                        <div class="item-price">
                                            <span>￥{{item.price}}</span>
                                        </div>
                                        <div class="item-remove">
                                            <span class="el-icon-close" @click="remove(item.lessonId)"></span>    
                                        </div>
                                    </li>
                                </ul>
                                <div class="down clearfix" :class="{'down-ex': scrollTop}">
                                    <div class="down-wrapper">
                                        <div class="balance">
                                        <span class="balance-btn" @click="order()">去结算</span>
                                        </div>
                                        <div class="price">
                                            <p class="price-title">总计金额：</p>
                                            <p class="price-total">￥{{price}}</p>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </template>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from "vuex";

    export default {
        data: function() {
            return {
                over: false,
                checkAll: false,
                checkedItem: [],
                price: 0,
            };
        },
        computed: {
            ...mapState(['user', 'checkedList', 'scrollTop'])
        },
        methods: {
            total() {
                let result = 0;
                for (let i = 0; i < this.checkedItem.length; i++) {
                    for (let j = 0; j < this.user.cartList.length; j++) {
                        if (this.checkedItem[i] == this.user.cartList[j].lessonId) {
                            result += Number(this.user.cartList[j].price);
                            break;
                        }
                    }
                }
                this.price = result;
            },
            checkAllChange(value) {
                this.checkedItem = value ? this.checkedList : [];
                this.total();
            },
            checkedItemChange(value) {
                this.checkAll = value.length === this.checkedList.length;
                this.total();
            },
            remove(value) {
                let data = `lessonId=${value}&userMail=${this.$cookies.get('user')}`
                this.axios.post('/server/cart/remove', data).then(res => {
                    switch (res.data.status) {
                        case 0:
                            this.$message({
                                message: '删除成功！',
                                center: true,
                                type: 'success',
                                duration: 2000
                            });
                            this.updateStore('setUser', res.data.result);
                            let result = []
                            for (let i = 0; i < res.data.result.cartList.length; i++) {
                                result.push(res.data.result.cartList[i].lessonId);
                            }
                            this.updateStore('setCheckedList', result);
                            for (let j = 0; j < this.checkedItem.length; j++) {
                                if (this.checkedItem[j] == value) {
                                    this.checkedItem.splice(j, 1);
                                }
                            }
                            this.total();
                            break;
                        case 1:
                            this.$message({
                                message: '服务器开小差了，请稍后再试！',
                                center: true,
                                type: 'error',
                                duration: 2000
                            });
                            break;
                        case 2:
                            this.$message({
                                message: '找不到用户信息，请重新登录！',
                                center: true,
                                type: 'warning',
                                duration: 2000
                            });
                            break;
                        case 3:
                            this.$message({
                                message: '删除失败！',
                                center: true,
                                type: 'warning',
                                duration: 2000
                            });
                            break;
                    }
                });
            },
            order() {
                if (this.checkedItem.length == 0) {
                    return this.$message({
                        message: '当前未选中课程！',
                        center: true,
                        type: 'warning',
                        duration: 2000
                    })
                }
                this.updateStore('setCheckedLesson', this.checkedItem);
                this.updateStore('setPriceTotal', this.price);
                this.$cookies.set('checkedItem', this.checkedItem, 60 * 60 * 24);
                this.$cookies.set('peice', this.price, 60 * 60 *24);
                this.checkedItem = [];
                this.price = 0;
                this.checkAll = false;
                this.$router.push({name: 'order'});
            }
        },
        mounted() {
            if (this.$cookies.get('user') !== null) {
                this.axios.get('/server/user/data', {
                    params: {
                        userMail: this.$cookies.get('user')
                    }
                }).then(res => {
                    this.updateStore('setUser', res.data.result);
                    let result = []
                    for (let i = 0; i < res.data.result.cartList.length; i++) {
                        result.push(res.data.result.cartList[i].lessonId);
                    }
                    this.updateStore('setCheckedList', result);
                    this.total();
                    this.over = true;
                }).catch(err => {
                    console.log(err);
                })
            }
        },
    };
</script>
<style lang="scss" scoped>
    .cart-top {
        height: 160px;
        background: url("/static/images/cart-header-bg.jpg") repeat-x left bottom;
    }
    .cart-wrapper {
        background-color: #f8fafc;
    }
    .content-wrapper {
        position: relative;
        top: -160px;
        width: 1152px;
        margin: 0 auto;
    }
    .top-right {
        float: left;
        margin-left: 20px;
    }
    .top-title {
        display: inline-block;
        font-size: 32px;
        line-height: 115px;
        margin-right: 25px;
        font-weight: 200;
    }
    .top-describe {
        font-size: 14px;
        color: #5e5e5e;
        font-weight: 200;
    }
    .order-history {
        float: right;
        margin-top: 55px;
        margin-right: 20px;
        font-size: 14px;
        color: #5e5e5e;
        font-weight: 200;
        &:hover {
            color: #f01414;
        }
    }
    .content {
        min-height: 500px;
        background-color: #fff;
        border-radius: 8px;
        border-top: 1px solid transparent;
        padding: 40px;
        box-shadow: 0 8px 16px 0 rgba(7, 17, 27, .1);
    }
    .cart-null {
        font-size: 24px;
        color: #4d555d;
        letter-spacing: 4px;
        font-weight: 200;
        text-align: center;
        margin-top: 200px;
    }
    .checkbox-item {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 4px;
        border: 2px solid #999;
        &:hover {
            cursor: pointer;
        }
    }
    .checkbox-item-all {
        position: relative;
        top: 4px;
    }
    .checkbox-item:checked {
        border: none;
        background-color: #f01414;
    }
    .checkbox-top {
        padding-left: 20px;
        height: 50px;
        font-size: 14px;
        color: #4d555d;
        border-bottom: 1px solid #aaa;
    }
    .item-1 {
        margin-left: 10px;
        margin-right: 30px;
    }
    .item-2 {
        margin-right: 600px;
    }
    .item-3 {
        margin-right: 230px;
    }
    .list-item {
        height: 130px;
        padding: 20px;
        border-bottom: 1px solid #aaa;
    }
    .item-input {
        float: left;
        padding-top: 35px;
        width: 70px;
    }
    .item-img {
        float: left;
        img {
            width: 160px;
            height: 90px;
            border-radius: 3px;
        }
        margin-right: 30px;
    }
    .item-title {
        float: left;
        h3 {
            font-size: 16px;
            color: #07111b;
            line-height: 24px;
            font-weight: 400;
        }
        padding-top: 15px;
        width: 460px;
    }
    .item-price {
        float: left;
        color: #f01414;
        padding-top: 40px;
        width: 275px;
    }
    .item-remove {
        float: left;
        font-size: 22px;
        color: #4d555d;
        padding-top: 40px;
    }
    .el-icon-close:hover {
        cursor: pointer;
    }
    .down {
        padding: 15px 0;
    }
    .down-ex {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100vw;
        background-color: #fff;
        z-index: 999;
    }
    .down-wrapper {
        width: 1072px;
        min-width: 1072px;
        margin: 0 auto;
    }
    .balance {
        float: right;
    }
    .balance-btn {
        cursor: pointer;
        display: block;
        text-align: center;
        width: 100px;
        height: 40px;
        line-height: 40px;
        border: none;
        border-radius: 8px;
        background-color: #f01414;
        // font-size: 18px;
        color: #fff;
        margin-left: 60px;
    }
    .price {
        float: right;
    }
    .price-title {
        font-size: 12px;
    }
    .price-total {
        color: #f01414;
        font-size: 16px;
    }
</style>