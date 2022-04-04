<template>
    <footer>
        <div class="container">
            <p>Copyright &copy; 2022 Faroptic - All Rights Reserved.</p>
            <p>
                Powered by
                <a
                    href="https://www.godaddy.com/websites/website-builder?isc=pwugc&utm_source=wsb&utm_medium=applications&utm_campaign=en-us_corp_applications_base"
                    >GoDaddy</a
                >
            </p>
        </div>
    </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
footer {
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5em;
        padding: 1em 0;
        border-top: 1px solid var(--border-primary);
    }

    p {
        color: var(--text-footer-primary);
        font-size: 0.9rem;
        text-align: center;
    }
}
</style>
