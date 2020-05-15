<template>
    <div id="app">
        <Layout>
            <template #header="self">
               <router-link to="/home"><h1 id="main_title">{{self.title}}</h1></router-link>
                <router-link to="/join"><span id="join">{{self.join}}</span></router-link>
                <router-link @click="aa" to="/login"><span id="login">{{self.login}}</span></router-link>
            </template>
            <template #sidebar="self" >
                {{self.menu}}
                <ul class="menu">
                    <li v-for="i of sidebars" :key="i.menu">
                        {{i.menu}}
                    </li>
                </ul>
            </template>

            <template #content>

                <router-view></router-view>
            </template>
            <template #footer="self">
                <p>{{self.subtitle}}</p>
            </template>

        </Layout>
    </div>

</template>

<script>
    import Layout from "../components/common/Layout.vue"
    export default {
        name: "Home",
        components : {Layout},
        data : ()=>{
            return {
                sidebars: [
                    {menu: '쓰기'},
                    {menu: '목록'},
                    {menu: '검색'},
                    {menu: '수정'},
                    {menu: '삭제'}
                ]

            }
        },
        methods:{
            aa:()=>{
                alert('aaa')
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
    #main_title{
        text-align: center;
    }
    #join{
        text-align: right;
    }
    #login{
        text-align: left;
    }
</style>