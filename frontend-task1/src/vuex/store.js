import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            user: null,
            result: 0,
        };
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setResult(state, result) {
            state.result = result;
        },
    },
    actions: {
        login({ commit }, user) {
            commit('setUser', user);
        },
        logout({ commit }) {
            commit('setUser', null);
            commit('setResult', null);
        },
        updateResult({ commit }, result) {
            commit('setResult', result);
        }
    },
    getters: {
        isAuthenticated(state) {
            return !!state.user;
        },
        getUser(state) {
            return state.user;
        },
        getResult(state) {
            return state.result;
        }
    }
});

export default store;
