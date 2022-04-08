<template>
    <section class="support-section">
        <div class="bg-accent1 pop-up-header">
            <h2 class="pop-up-container">faroptic</h2>
            <font-awesome-icon
                class="icon"
                icon="xmark"
                @click="$emit('closePopUp')"
            />
        </div>

        <div class="pop-up-container">
            <div class="box sb1">
                <p>
                    Hi! Let us know how we can help and we’ll respond shortly.
                </p>
            </div>

            <form @submit.prevent="" action="">
                <FormGroup class="dark" fId="supportName" fType="text"
                    >Name*</FormGroup
                >
                <FormGroup class="dark" fId="supportEmail" fType="email"
                    >Email*</FormGroup
                >
                <textarea
                    name="supportDescription"
                    placeholder="How Can We Help?*"
                    rows="7"
                ></textarea>

                <FormButton class="dark" />
            </form>
            <p class="privacy-terms">
                This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy">Privacy Policy</a>
                and
                <a href="https://policies.google.com/terms">Terms of Service</a>
                apply.
            </p>
        </div>
    </section>
</template>

<script>
import FormGroup from './FormGroup.vue'
import FormButton from './FormButton.vue'
export default { components: { FormGroup, FormButton } }
</script>

<style lang="scss">
.support-section {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: white;

    box-shadow: 0 0 7px 3px var(--box-shadow-primary);

    .pop-up-container {
        width: 90%;
        margin-inline: auto;
    }

    .bg-accent1 {
        background-color: var(--bg-accent1);
    }

    .pop-up-header {
        padding: 0.7em 1em 2.3em 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .icon {
            font-size: 1.3rem;
            cursor: pointer;
        }
    }
    h2 {
        font-family: 'Montserrat', arial, sans-serif;
        letter-spacing: 1.2px;
        color: var(--text-primary);
        font-weight: normal;
        font-size: 1.45rem;
    }

    p {
        line-height: 1.5;
        font-size: 1.05rem;
    }

    textarea {
        border: 1px solid var(--border-secondary);
        outline: none;
        background-color: transparent;
        width: 100%;
        color: var(--text-primary);
        padding: 1.2em 0.6em;
        padding-bottom: 0.7em;
        font-size: 1rem;
        letter-spacing: 0.7px;
        font-family: 'Montserrat', arial, sans-serif;
        margin-top: 0.5em;
        border-radius: 0.3em;
        resize: none;

        &:focus {
            border-color: var(--text-secondary);
        }
    }

    button {
        margin-bottom: 2em;
    }

    .privacy-terms {
        font-size: 0.8rem;
        text-align: center;
        margin-bottom: 1.2em;
    }
}
.box {
    width: 100%;
    background: var(--pop-up-message-bg);
    transform: translateY(-33.3%);
    margin-inline: auto;
    padding: 1em 2em;
    text-align: left;
    position: relative;
    border-radius: 0.3em;
}
.sb1:before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid var(--pop-up-message-bg);
    border-right: 10px solid transparent;
    border-top: 10px solid var(--pop-up-message-bg);
    border-bottom: 10px solid transparent;
    bottom: -20px;
    left: 20px;
}

@media (min-width: 40em) {
    body {
        overflow: auto;
    }
    .support-section {
        left: unset;
        top: unset;
        right: 34px;
        bottom: 110px;
        height: 42em;
        max-height: calc(100vh - 110px);
        border-radius: 0.5em;
        width: 23.5em;
        overflow: auto;
    }

    .icon {
        display: none;
    }
}
</style>
