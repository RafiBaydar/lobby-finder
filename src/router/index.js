import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '@/components/HomePage.vue';
import ContactPage from '@/components/ContactPage.vue';
import GamesPage from '@/components/GamesPage.vue';
import AboutPage from '@/components/AboutPage.vue';
import ValorantLobbyPage from '@/components/ValorantLobbyPage.vue';
import LoginPage from '@/components/LoginPage.vue';
import Forgot from '@/components/ForgotPasswordPage.vue';
import Register from '@/components/RegisterPage.vue'


const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage,
    },
    {
        path: "/forgot",
        name: "ForgotPasswordPage",
        component: Forgot,
    },
    {
        path: "/register",
        name: "Registration",
        component: Register,
    },
    {
        path: "/contact",
        name: "ContactPage",
        component: ContactPage,
    },
    {
        path: "/games",
        name: "GamesPage",
        component: GamesPage,
    },
    {
        path: "/games/valorant",
        name: "ValorantLobbyPage",
        component: ValorantLobbyPage,
    },
    {
        path: "/about",
        name: "AboutPage",
        component: AboutPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router