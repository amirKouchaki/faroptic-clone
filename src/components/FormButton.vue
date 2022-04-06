<template>
    <button class="form-btn" type="submit">send</button>
</template>

<script>
export default {}
</script>

<style lang="scss">
.form-btn {
    position: relative;
    display: block;
    width: 100%;
    margin-top: 2em;
    padding-block: 0.8em;
    border-radius: 3em;
    border: 2px solid var(--text-4);
    background-color: transparent;
    color: var(--text-4);
    font-family: 'Montserrat', arial, sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    z-index: 0;
    cursor: pointer;
    overflow: hidden;

    &.dark {
        border: 2px solid var(--border-secondary);
        color: var(--text-primary);

        &::before {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            content: '';
            transition: 300ms ease;
            color: var(--text-3);
            z-index: -1;
            background-color: var(--button-secondary);
            transform-origin: top;
            width: 110%;
            transform: translateX(-100%) skew(-30deg);
            transition: all 300ms ease;
        }
        &:hover::before,
        &:focus::before {
            transform: translateX(0);
        }

        &:hover,
        &:focus {
            color: var(--text-3);
            border-color: var(--button-secondary);
        }
    }

    &::before {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        content: '';
        transition: 300ms ease;
        color: var(--bg-accent2);
        z-index: -1;
        background-color: var(--text-3);
        transform-origin: top;
        width: 110%;
        transform: translateX(-100%) skew(-30deg);
        transition: all 300ms ease;
    }
    &:hover::before,
    &:focus::before {
        transform: translateX(0);
    }

    &:hover,
    &:focus {
        color: var(--bg-accent2);
    }
}
</style>
