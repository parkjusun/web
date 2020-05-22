import axios from 'axios'
import router from '../router'

const  state = {
    context:'http://localhost:3001/',
    player :{},
    fail: false,
    auth : false
}



const getters ={

}
const actions = {

    async login ({commit},payload){
        const url =state.context + `players/${payload.playerId}/access`
        const headers = {
            authorization: 'JWT fefege..',
            Accept : 'application/json',
            'Content-Type': 'application/json'
        };
        axios.post(url,payload,headers)
            .then(({data})=>{
                if(data.result){
                    commit('LOGIN_COMMIT', data)

                }
                else{
                    commit('FAIL_COMMIT')
                }
            })
            .catch(()=>{
                alert('서버 전송 실패')
                state.fail =true
            })
    },
    async logout({commit}){
        commit('LOGOUT_COMMIT')
    }
    ,
    async join ({commit}){
        commit('join')
    },
}
const  mutations ={
    LOGIN_COMMIT(state, data){
        state.auth = true
        state.player = data.player
        localStorage.setItem('token', data.token)
        localStorage.setItem('playerId', data.player.playerId)
        if(data.player.teamId !== 'K01'){
            alert('일반 사용자')
            router.push('/home')
            console.log('aa')
        }else{
            alert('관리자')

        }

    },
    FAIL_COMMIT(state){
        state.fail = true
        alert('상태:'+state.fail)
    },
    LOGOUT_COMMIT(state){
        console.log('vv')
        localStorage.clear()
        state.auth = false
        state.player ={}
        router.push('/')

    }
    ,
    join () {
        alert('가입')
    }



}

export default {
    name: 'player',
    namespaced : true,
    state,
    actions,
    mutations,
    getters
}
