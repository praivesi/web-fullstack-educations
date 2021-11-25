import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            name: 'kim',
            age: 20,
            likes: 30,
            alreadyLike: false,
            more: {},
        }
    },
    mutations: {
        changeName(state) {
            state.name = 'park'
        },
        addAge(state, payload) {
            state.age += payload;
        },
        pressLike(state) {
            state.likes = state.alreadyLike ? state.likes - 1 : state.likes + 1;
            state.alreadyLike = !state.alreadyLike;
        },
        setMore(state, payload){
            state.more = payload;
        }
    },
    actions: {
        getData(context) {
            axios
            .get("https://codingapple1.github.io/vue/more1.json")
            .then((payload) => {
                context.commit('setMore', payload.data);
            })
        }
    },
})

export default store