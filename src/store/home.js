import {reqWeather} from "@/api";

const state={
    weatherObj:{}
}
const mutations={
    GETWEATHER(state,weatherObj){
        state.weatherObj = weatherObj
    }
}
const actions={
    async getWeather({commit}){
        let result = await reqWeather()
        commit('GETWEATHER',result)
    }
}
const getters={}
export default {
    state,
    mutations,
    actions,
    getters
}