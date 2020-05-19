const  state = {

}
const actions = {
    login ({commit}){commit('login')},
    join ({commit}) {commit('join')},
}
const getters ={

}
const  mutations ={
    join () {

        alert('가입')
    },

    login () {
        alert('로그인')

    }

}
export default {
    name:'player',
    namespace:true,
    state,
    actions,
    getters,
    mutations

}