<template>
    <Header />
    <router-view />
    <Footer />
    <MessagePopUp />
</template>

<script>
import '@/assets/css/global.css'
import Header from './components/Header.vue'
import Footer from '@/components/Footer.vue'
import MessagePopUp from '@/components/MessagePopUp.vue'
export default {
    components: { Header, Footer, MessagePopUp },
}
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
