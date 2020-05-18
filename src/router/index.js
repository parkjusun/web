import Vue from 'vue'
import Router from 'vue-router'
import Join from "../components/member/Join";
import Login from "../components/member/Login";
import Caculator from "../components/common/calculator";
import Counter from "../components/common/Counter";
import Register from "../components/member/Register";
import List from "../components/member/List";
import Search from "../components/member/Search";
import Update from "../components/member/Update";
import Delet from "../components/member/Delet";
import VuexCounter from "../components/common/VuexCounter";


Vue.use(Router)

export default new Router({
    mode:'history',
    routes :[
        {path: '/join',component:Join},
        {path: '/login',component:Login},
        {path: '/calculator',component:Caculator},
        {path: '/Counter',component:Counter},
        {path: '/register',component:Register},
        {path: '/list',component:List},
        {path: '/search',component:Search},
        {path: '/update',component:Update},
        {path: '/delet',component:Delet},
        {path: '/Counter',component:Counter},
        {path: '/vuexCounter',component:VuexCounter},
    ]
})

