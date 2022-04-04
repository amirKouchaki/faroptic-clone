<template>
    <div class="form-group">
        <input
            :placeholder="fId"
            :id="fId"
            class="form-control"
            :type="fType"
            autocomplete="off"
            v-model="model"
            @input="$emit('updated', model)"
        />
        <label :id="fId" class="form-label">
            <slot></slot>
        </label>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
export default {
    props: ['fType', 'fId'],
    setup() {
        const model = ref('')
        return { model }
    },
}
</script>

<style lang="scss">
.form-group {
    transition: all 300ms;
    margin-top: 2em;
    text-align: left;
    .form-control {
        display: block;
        width: 100%;
        padding: 1.2em 0.6em;
        padding-bottom: 0.7em;
        box-shadow: none;
        border-radius: none;
        border: 2px solid var(--text-4);
        letter-spacing: 0.7px;
        background: transparent;
        font-size: 1rem;
        color: var(--text-4);
        outline: none;
        font-family: 'Montserrat', arial, sans-serif;
        border-radius: 0.3em;
        &::placeholder {
            color: transparent;
        }

        &:focus + .form-label,
        &:not(:placeholder-shown) + .form-label {
            transform: translate(0.5em, -3em) scale(0.8);
            color: var(--link-primary);
        }
    }

    .form-label {
        display: block;
        transform: translate(0.8em, -2.3em);
        transform-origin: 0 0;
        color: var(--text-4);
        pointer-events: none;
        transition: all 120ms;
    }
}
</style>
