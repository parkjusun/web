<template>
    <div id="app">
        <div v-if="auth == true">
        <Layout>

            <template #header="self">
                <router-link to="/home"><h1 class="main_title">{{self.title}}</h1></router-link>
                <span @click="logout" class="login">{{self.logout}}</span>
            </template>
            <template #sidebar="self" >
                {{self.menu}}
                <ul class="menu">
                    <li v-for="i of sidebars" :key="i.menu" >
                        <router-link :to="{path:i.link}"> {{i.menu}}</router-link>
                        <!--                           <a @click="aa(i.menu)"> {{i.menu}}</a>-->
                    </li>
                </ul>
            </template>

        </Layout>
        </div>
            <!--로그인성공-->

        <div v-if="auth == false">
        <Layout>
             <template #header="self">
               <router-link to="/home"><h1 class="main_title">{{self.title}}</h1></router-link>
               <router-link to="/mypage"><span class="join">{{self.join}}</span></router-link>
               <router-link to="/login"><span @click="login" class="login">{{self.login}}</span></router-link>
             </template>
            <template #sidebar >
                <h3>광고판</h3>
            </template>



            <template #content>

                <router-view></router-view>
            </template>
            <template #footer="self">
                <p>{{self.subtitle}}</p>
            </template>

        </Layout>

        </div>
    </div>

</template>

<script>
    import Layout from "../components/common/Layout.vue"
    import {mapState} from 'vuex'
    export default {
        name: "Home",
        computed: {
            ...mapState(
                {
                    auth: state => state.player.auth
                }
            )
        },
        components : {Layout},
        data : ()=>{
            return {
                sidebars: [
                    {menu: '등록',link:"/register"},
                    {menu: '목록',link:"/list"},
                    {menu: '검색',link:"/search"},
                    {menu: '수정',link:"/update"},
                    {menu: '삭제',link:"/delet"},
                    {menu: '회원수',link:"/vuexCounter"}
                ]

            }
        },
        methods:{
         logout(){
             alert('로그아웃')
         },
        login(){

        },
            aa:(i)=>{
                switch (i) {
                    case '쓰기':
                        alert('0')
                        break;

                    case '목록':
                        alert('1')
                        break;

                    case '검색':
                        alert('2')
                        break;

                    case '수정':
                        alert('3')
                        break;

                    case '삭제':
                        alert('4')
                        break;

                    case '회원수':

                        break;


                }
            }
        }
    }
</script>
<style scoped>
    ul.menu{
        position: relative;
        padding: 5px;
        list-style: none;
        font-style: italic;
    }
    .main_title{
        text-align: center;
    }
    .join{
        text-align: right;
    }
    .login{
        text-align: left;
    }
</style>