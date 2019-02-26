import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage'
import ZhuCe from '../pages/ZhuCe'
import DengLu from '../pages/DengLu'
import XiangQing from '../pages/XiangQing'
import FenLei from '../pages/FenLei'
import ShopCar from '../pages/ShopCar'
import DingDan from '../pages/DingDan'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      component: HomePage
    },
    {
      name:"zhuce",
      path:"/zhuce",
      component:ZhuCe


    },
    {
      name:'denglu',
      path:"/login",
      component:DengLu

    },
    {
      name:"lu",
      path:"/xiang/:id",
      component:XiangQing
    },
    {
      name:"fenlei",
      path:"/leibie",
      component:FenLei
    },
    {
      name:"shopping",
      path:'/shopping/:id',
      component:ShopCar

    },
    {
      name:"dingdan",
      path:"/dingdan/:id",
      component:DingDan

    }
  ]
})
