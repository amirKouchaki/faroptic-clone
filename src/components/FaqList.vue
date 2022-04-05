<template>
    <article class="faqs">
        <SingleFaq v-for="(faq, i) in faqs" :key="i" :faq="faq" />
    </article>
</template>

<script>
import SingleFaq from './SingleFaq.vue'
export default {
    props: ['faqs'],
    components: { SingleFaq },
}
</script>

<style>
.faqs {
    width: min(55em, 100%);
    margin-inline: auto;
}
</style>
