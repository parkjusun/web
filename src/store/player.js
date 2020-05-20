import axios from 'axios'
import header from "vuetify/lib/components/VDataTable/mixins/header";


const  state = {
    player :{},
    fail: false,
    auth : false
}

const  mutations ={
    LOGIN_COMIT (state,data) {
        state.auth = true
        state.player =data.player
        localStorage.setItem('token',data.token)
        localStorage.setItem('playerId',data.player.playerId)
        if (data.player.auth === 'USER'){
            alert('일반사용자')
            // 일반사용자
        }else {
            alert('관리자')
            // 관리자
        }

    },
    join () {
        alert('가입')
    },



}

const getters ={

}
const actions = {

    async login ({commit}){
        const headers = {
            'Content-Type': 'text/plain'
        };
        axios.post('',player,header)
            .then(({data})=>{

                commit('LOGIN_COMIT',data)
            })
            .catch(()=>{
                state.fail =true
            })
    },
    async join ({commit}){
        commit('join')
    },
}

export default {
    name:'player',
    namespace:true,
    state,
    actions,
    getters,
    mutations

}
