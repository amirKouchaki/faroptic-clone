<template>
    <div>
        <p class="reset-margin">
            {{ JSON.parse(file).name }}({{ JSON.parse(file).size }}KB)
        </p>
        <font-awesome-icon
            class="close-button"
            icon="xmark"
            @click="$emit('deleteFile', file)"
        />
    </div>
</template>

<script>
export default {
    props: ['file'],
    setup() {},
}
</script>

<style lang="scss" scoped>
div {
    display: flex;
    justify-content: space-between;
    gap: 2em;
    margin-block: 1em;
    padding-inline: 0.7em;
}

.close-button {
    cursor: pointer;
    color: var(--link-primary);
}
</style>
