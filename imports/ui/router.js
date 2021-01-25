import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Prize from './components/Prize.vue'

Vue.use(VueRouter)

export default router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: "home",
            component: Home,
        },
        {
            path: '/prize/:id',
            name: "prize",
            component: Prize,
        }
    ]
});