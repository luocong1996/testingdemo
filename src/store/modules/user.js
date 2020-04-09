export default {
    state: {
        userId: '',
        userName: ''
    },
    getters: {
        getInfo(state) {
            return state
        }
    },
    mutations: {
        setUserId(state, userId) {
            state.userId = userId;
        },
        setUserName(state, userName) {
            state.userName = userName;
        },
    },
    actions: {
        setUserInfo({commit}, Obj) {
            commit('setUserId', Obj.id);
            commit('setUserName', Obj.name)
        }
    },
}