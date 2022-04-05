<template>
    <article class="question-answer">
        <div @click="showAnswer = !showAnswer" class="question-container">
            <h3 class="question">
                {{ faq.question }}
            </h3>
            <font-awesome-icon :icon="showAnswer ? 'angle-up' : 'angle-down'" />
        </div>
        <p v-if="showAnswer" class="answer">{{ faq.answer }}</p>
    </article>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    props: ['faq'],
    setup() {
        const showAnswer = ref(false)

        return { showAnswer }
    },
}
</script>

<style lang="scss">
.question-answer {
    border-bottom: 1px solid var(--border-primary);
    margin-inline: auto;
}

.question-container {
    display: flex;
    justify-content: space-between;
    gap: 2em;
    align-items: center;
    cursor: pointer;
    user-select: none;
    &:hover > * {
        color: var(--link-primary);
        transition: color 75ms ease-in-out;
    }
}

.question {
    color: var(--text-header-primary);
    margin-block: 2em;
    font-family: 'Archivo Black', arial, sans-serif;
    letter-spacing: 0.7px;
    font-size: 1.1rem;
    text-align: left;
}

.answer {
    font-family: 'Montserrat', arial, sans-serif;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 2em;
}
</style>
