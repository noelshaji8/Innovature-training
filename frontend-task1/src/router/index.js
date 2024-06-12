import { createRouter, createWebHistory } from 'vue-router'
import UserAuth from "../components/UserAuth.vue"
import ArithPage from "../components/ArithPage.vue"

const routes=[
    {
        path: "/",
        name: "UserAuth",
        component: UserAuth
    },
    {
        path: "/arith",
        name: "ArithPage",
        component: ArithPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router