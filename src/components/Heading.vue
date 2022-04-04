<template>
    <h2 class="general-heading">
        <slot></slot>
    </h2>
</template>

<script>
export default {}
</script>

<style lang="scss">
.general-heading {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Archivo Black', arial, sans-serif;
    color: var(--text-header-primary);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.7px;

    &::before,
    &::after {
        content: '';
        border-top: 0.12rem solid;
        flex: 1 0 20px;
    }

    &::before {
        margin-right: 20px;
    }

    &::after {
        margin-left: 20px;
    }
}

/* TODO: make sure of the font-size */
.font-xl {
    font-size: 1.8rem;
}

.white {
    color: var(--text-3);
}
</style>
