<template>
    <header class="main-header">
        <div class="desktop-view">
            <nav class="header-nav" role="navigation" aria-label="Main">
                <router-link :to="{ name: 'home' }">home</router-link>
                <router-link :to="{ name: 'privacyPolicy' }"
                    >privacy policy</router-link
                >
                <router-link :to="{ name: 'videoLibrary' }"
                    >Video library</router-link
                >
            </nav>
        </div>
        <span class="mobile-view">
            <font-awesome-icon
                @click="showOverlay = true"
                icon="bars"
                class="bars"
            />
            <div :class="{ widthFull: showOverlay }" class="overlay">
                <div v-show="showOverlay">
                    <span @click="showOverlay = false"
                        ><font-awesome-icon
                            icon="xmark"
                            class="overlay-close-btn"
                    /></span>
                    <div class="container">
                        <router-link
                            @click="showOverlay = false"
                            :to="{ name: 'home' }"
                            >home</router-link
                        >
                        <router-link
                            @click="showOverlay = false"
                            :to="{ name: 'privacyPolicy' }"
                            >privacy policy</router-link
                        >
                        <router-link
                            @click="showOverlay = false"
                            :to="{ name: 'videoLibrary' }"
                            >Video library</router-link
                        >
                    </div>
                </div>
            </div>
        </span>
    </header>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const showOverlay = ref(false)
        const overlay = ref(null)
        return { showOverlay, overlay }
    },
}
</script>

<style lang="scss">
.main-header {
    padding: 1.3em 1em;
    background-color: var(--bg-accent1);
}

.desktop-view {
    display: none;
    .header-nav {
        display: flex;
        justify-content: center;
        gap: 2em;
    }

    .header-nav a {
        font-size: 0.9rem;
        letter-spacing: 0.75px;
        color: var(--text-secondary);
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        &.router-link-exact-active {
            font-weight: bold;
        }
    }
}

.mobile-view {
    display: inline-block;
    .bars {
        font-size: 1.5rem;
        cursor: pointer;
    }
}
.overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 0;
    bottom: 0;
    background-color: var(--bg-accent3);
    z-index: 2;
    padding-block: 6em;
    transition: all 0.3s ease-in-out;

    .container {
        display: flex;
        flex-direction: column;
        gap: 2em;
    }

    a {
        padding-bottom: 0.5em;
        border-bottom: 1px solid var(--text-secondary);
        font-size: 1.2rem;
        color: var(--text-4);
        opacity: 0.8;

        &:hover {
            color: var(--link-primary);
            transition: all 75ms ease-in-out;
        }
    }

    .router-link-exact-active {
        opacity: 1;
    }

    .overlay-close-btn {
        position: absolute;
        top: 1em;
        right: 1em;
        font-size: 2rem;
        color: var(--text-4);

        &:hover {
            color: var(--link-primary);
            transition: all 75ms ease-in-out;
        }
    }
}
.widthFull {
    width: 100%;
}

@media (min-width: 60em) {
    .mobile-view {
        display: none;
    }
    .desktop-view {
        display: block !important;
    }
}
</style>
