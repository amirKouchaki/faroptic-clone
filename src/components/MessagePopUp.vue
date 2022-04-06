<template>
    <div class="message-fixed" @click="showPopUp = !showPopUp">
        <font-awesome-icon icon="message" v-if="!showPopUp" />
        <font-awesome-icon icon="xmark" v-if="showPopUp" />
    </div>
    <PopUp v-if="showPopUp" />
</template>

<script>
import { ref } from '@vue/reactivity'
import PopUp from './PopUp.vue'
export default {
    components: { PopUp },
    setup() {
        const showPopUp = ref(false)
        return { showPopUp }
    },
}
</script>

<style lang="scss">
.message-fixed {
    position: fixed;
    display: grid;
    place-content: center;
    right: 32px;
    bottom: 32px;
    background-color: var(--bg-accent1);
    width: 63px;
    aspect-ratio: 1;
    font-size: 2rem;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 7px 1px var(--box-shadow-primary);
}
</style>
