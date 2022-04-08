<template>
    <div class="hero-iframe">
        <iframe
            frameborder="0"
            :src="iSrc"
            :allow="iAllow"
            :title="iTitle"
        ></iframe>
    </div>
</template>

<script>
export default {
    props: ['iSrc', 'iAllow', 'iTitle'],
}
</script>

<style lang="scss">
.hero-iframe {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    margin-top: 1.5em;
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
}

.aspect-50 {
    padding-top: 45%;
}

.aspect-30 {
    padding-top: 75%;
}
</style>
