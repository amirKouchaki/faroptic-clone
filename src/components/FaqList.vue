<template>
    <SingleFaq v-for="(faq, i) in faqs" :key="i" :faq="faq" />
</template>

<script>
import SingleFaq from './SingleFaq.vue'
export default {
    props: ['faqs'],
    components: { SingleFaq },
}
</script>

<style></style>
