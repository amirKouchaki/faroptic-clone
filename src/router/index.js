import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import VideoLibraryView from '../views/VideoLibraryView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/privacy-policy',
        name: 'privacyPolicy',
        component: PrivacyPolicyView,
    },
    {
        path: '/video-library',
        name: 'videoLibrary',
        component: VideoLibraryView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
