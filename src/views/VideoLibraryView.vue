<template>
    <div class="container">
        <Heading>videos</Heading>
        <div class="videos-grid">
            <Iframe
                iSrc="//player.vimeo.com/video/676762192?h=a86ab5e5dc&autoplay=0&title=0&portrait=0&byline=0&badge=0"
            />
            <div class="grid-child">
                <h3 class="videos-header">using small size devices</h3>
                <p class="videos-p">
                    For example in "iphone7" you have to scroll the page to
                    access all areas
                </p>
            </div>
            <Iframe
                iSrc="//youtube.com/embed/eQ0VNdBE2Vs?rel=0&showinfo=0&start=0"
            />
            <div class="grid-child">
                <h3 class="videos-header">Real size diagram</h3>
                <p class="videos-p">
                    On the results page hit the real size button , then put the
                    frame on the diagram to check the position of the cross
                    marks and other dimensions
                </p>
            </div>
            <Iframe
                iSrc="//youtube.com/embed/z_u475_aNwo?rel=0&showinfo=0&start=0"
            />
            <div class="grid-child">
                <h3 class="videos-header">
                    With or without a flashlight on your device
                </h3>
                <p class="videos-p">
                    When you must select "Corneal reflex" or "Corneal center"
                </p>
            </div>
            <Iframe
                iSrc="//youtube.com/embed/R-KwSW5Rmg0?rel=0&showinfo=0&start=0"
            />
            <div class="grid-child">
                <h3 class="videos-header">Effective diameter</h3>
                <p class="videos-p">
                    How to use and adjust the diameter slider to get the minimum
                    lens size required.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Iframe from '@/components/Iframe.vue'
import Heading from '@/components/Heading.vue'
export default {
    components: { Iframe, Heading },
}
</script>

<style lang="scss" scoped>
.videos-grid {
    display: grid;
    grid-template-areas:
        'small-devices-video'
        'using-small-devices'
        'real-size-diagram-video'
        'real-size-diagram'
        'with-or-without-flash-video'
        'with-or-without-flash'
        'effective-diameter-video'
        'effective-diameter';
    margin-top: 1em;
    margin-bottom: 3em;

    & .grid-child:nth-child(1) {
        grid-area: small-devices-video;
    }
    & .grid-child:nth-child(2) {
        grid-area: using-small-devices;
    }
    & .grid-child:nth-child(3) {
        grid-area: real-size-diagram-video;
    }
    & .grid-child:nth-child(4) {
        grid-area: real-size-diagram;
    }
    & .grid-child:nth-child(5) {
        grid-area: with-or-without-flash-video;
    }
    & .grid-child:nth-child(6) {
        grid-area: with-or-without-flash;
    }
    & .grid-child:nth-child(7) {
        grid-area: effective-diameter-video;
    }
    & .grid-child:nth-child(8) {
        grid-area: effective-diameter;
    }
}

.videos-header {
    font-family: 'Archivo Black', arial, sans-serif;
    padding-block: 1.2em;
    font-size: 1.6rem;
    color: var(--text-header-primary);
}

.videos-p {
    font-family: 'Montserrat', arial, sans-serif;
    line-height: 1.5;
    color: var(--text-new-feature-p);
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 2em;
}

@media (min-width: 40em) {
    .videos-grid {
        grid-template-areas:
            'small-devices-video using-small-devices'
            'real-size-diagram real-size-diagram-video'
            'with-or-without-flash-video with-or-without-flash'
            'effective-diameter effective-diameter-video';

        gap: 3em;
        .grid-child {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
}
</style>
