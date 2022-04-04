<template>
    <carousel :items-to-show="1.5">
        <slide v-for="slide in slides" :key="slide">
            <img :src="require(`@/assets/images/${slide}`)" alt="" />
        </slide>

        <template #addons>
            <pagination />
        </template>
    </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    name: 'App',
    props: ['slides'],
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
}
</script>

<style lang="scss" scoped>
img {
    object-fit: contain;
    width: 100%;
}
.carousel__slide {
    padding: 0.2em;
    opacity: 0.5;
}

.carousel__slide--active {
    opacity: 1;
}
</style>
