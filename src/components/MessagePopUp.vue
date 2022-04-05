<template>
    <div class="message-fixed">
        <font-awesome-icon icon="message" />
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.message-fixed {
    position: fixed;
    display: grid;
    place-content: center;
    right: 32px;
    bottom: 32px;
    background-color: var(--bg-accent1);
    width: 70px;
    aspect-ratio: 1;
    font-size: 2rem;
    border-radius: 50%;
    cursor: pointer;

    box-shadow: 0 0 10px 0.05px var(--text-secondary);
}
</style>
