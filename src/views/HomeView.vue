<template>
    <section class="hero container">
        <img src="@/assets/images/logo.webp" alt="logo" />
        <h1>optofitting</h1>
        <Iframe
            iSrc="https://player.vimeo.com/video/674464619?h=2cbd4818da&autoplay=1&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0&controls=0"
        />
    </section>
    <aside>
        <div class="container">
            <img
                class="home-img"
                src="@/assets/images/home-img-1.webp"
                alt="who we are image"
            />
            <section class="info-section">
                <Heading>who we are</Heading>
                <section>
                    <section class="info-sub-section">
                        <h3>our team</h3>
                        <p>
                            we are a team of optometrists that are educated in
                            both optometry and software engineering.
                        </p>
                    </section>
                    <section class="info-sub-section">
                        <h3>our goal</h3>
                        <p>
                            We are here to ease your job and reduce your stress.
                        </p>
                    </section>
                    <section class="info-sub-section">
                        <h3>our app`s advantages</h3>
                        <ul>
                            <li>User friendly</li>
                            <li>Affordability</li>
                            <li>Accuracy</li>
                            <li>Accessibility</li>
                        </ul>
                    </section>
                </section>
            </section>
        </div>
    </aside>
    <article class="download-article">
        <div class="container">
            <Heading>Download OptoFitting</Heading>
            <nav class="download-links">
                <a
                    class="app-download-link"
                    href="https://apps.apple.com/au/app/optofitting/id1576655068"
                    ><img
                        src="@/assets/images/home-appstore-img.webp"
                        alt="appstore"
                /></a>
                <a class="app-download-link" href="#"
                    ><img
                        src="@/assets/images/home-googleplay-img.webp"
                        alt="google"
                /></a>
            </nav>
        </div>
    </article>
    <section class="tutorial-section">
        <div class="container">
            <Heading class="font-xl">the main toturial video</Heading>
            <Iframe
                iSrc="https://www.youtube.com/embed/AhMvVwEi60M"
                iTitle="YouTube video player"
                iAllow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
        </div>
    </section>
    <section class="faq-section">
        <div class="container">
            <Heading>faq</Heading>
            <p class="contact-help">
                Please contact us if you cannot find an answer to your question.
            </p>
            <FaqList :faqs="faqs" />
        </div>
    </section>
    <article class="new-feature-article">
        <div class="container">
            <Heading>Some new features added</Heading>
            <Iframe
                class="aspect-30"
                iTitle="vimeo video"
                iSrc="https://player.vimeo.com/video/668225655?h=57e7d16b8a"
            />
            <div>
                <h3 class="new-feature-header">Displaced markers</h3>
                <p class="new-feature-p">
                    Use triple tap on screen to enter edit mode.Then you can
                    adjust displaced marker location and return to normal mode
                    by a triple tap again
                </p>
            </div>
            <Iframe
                class="aspect-50"
                iSrc="https://www.youtube.com/embed/9GtojuRcAnE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
            <div>
                <h3 class="new-feature-header">
                    Flat top segments & Corridor length
                </h3>
                <p class="new-feature-p">
                    Use double tap on the middle red marker to present these
                    tools
                </p>
            </div>
            <img src="@/assets/images/new-features-img.webp" alt="" />
            <div>
                <h3 class="new-feature-header">video library</h3>
                <p class="new-feature-p">More features & videos</p>
                <router-link
                    :to="{ name: 'videoLibrary' }"
                    class="new-feature-btn"
                    >Check it out now</router-link
                >
            </div>
        </div>
    </article>
    <section class="slider">
        <div class="container">
            <Heading>Photo gallery</Heading>
            <Vcarousel :wrapAround="true" :slides="slides" />
        </div>
    </section>
    <section class="contact-us-section">
        <div class="container">
            <Heading class="white">contact us</Heading>
            <form
                @submit.prevent="sendForm()"
                enctype="multipart/form-data"
                class="contact-form"
                action=""
            >
                <h3 class="form-header">send a message</h3>
                <FormGroup
                    fType="text"
                    fId="fullName"
                    @updated="(model) => (fullName = model)"
                    >Name(First,Last)*</FormGroup
                >
                <FormGroup
                    fType="tel"
                    fId="phone"
                    @updated="(model) => (phone = model)"
                    >Phone*</FormGroup
                >
                <FormGroup
                    fType="text"
                    fId="email"
                    @updated="(model) => (email = model)"
                    >Email*</FormGroup
                >
                <textarea
                    class="message-textarea"
                    v-model="description"
                    cols="30"
                    rows="6"
                    placeholder="How Can We Help You?"
                ></textarea>
                <div class="file-label">
                    <font-awesome-icon icon="paperclip" />
                    <label for="file">Attach Files</label>
                </div>
                <input
                    class="form-file"
                    type="file"
                    @change="fileChanged"
                    id="file"
                />
                <div v-if="files.length">
                    <SingleFile
                        v-for="file in files"
                        :key="file"
                        :file="file"
                        @deleteFile="deleteFile"
                    />
                </div>
                <button class="message-submit-btn" type="submit">send</button>
            </form>
            <p class="privacy-terms">
                This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy">Privacy Policy</a>
                and
                <a href="https://policies.google.com/terms">Terms of Service</a>
                apply.
            </p>
            <section class="links-times-section">
                <h4>The care you deserve!</h4>
                <p>
                    Contact us directly with any questions, comments, or
                    scheduling inquiries you may have.
                </p>
                <a href="https://wa.me/61473943744" class="new-feature-btn"
                    ><img
                        class="whatsapp-svg"
                        src="@/assets/svgs/whatsapp.svg"
                        alt="My Happy SVG"
                    />
                    <span> Message us on WhatsApp</span></a
                >
                <h5>faroptic</h5>
                <a class="support-email" href="mailTo:support@faroptic.com"
                    >support@faroptic.com</a
                >
                <h5>hours</h5>
                <div class="work-hours-container">
                    <p class="work-hours">Monday - Friday: 8:00am - 5:30pm</p>
                    <p class="work-hours">Saturday: 8:30am - 1:00pm</p>
                    <p class="work-hours">Sunday: Closed</p>
                </div>
            </section>
        </div>
    </section>

    <article class="find-us-on-article">
        <div class="container">
            <Heading>find us on</Heading>

            <div class="find-us-links-container">
                <a href="https://www.facebook.com/Optofitting1"
                    ><img src="@/assets/svgs/facebook.svg" alt=""
                /></a>
                <a href="https://www.instagram.com/optofitting?r=nametag"
                    ><img src="@/assets/svgs/instagram.svg" alt=""
                /></a>
                <a
                    href="https://www.linkedin.com/in/optofitting-faroptic-817a44231"
                    ><img src="@/assets/svgs/linkedin.svg" alt=""
                /></a>
                <a
                    href="https://www.youtube.com/channel/UC4iB_CGaLO4fnaVHOlSToLg/featured"
                    ><img src="@/assets/svgs/youtube.svg" alt=""
                /></a>
            </div>
        </div>
    </article>
</template>

<script>
import Heading from '@/components/Heading.vue'
import Iframe from '../components/Iframe.vue'
import { ref } from '@vue/reactivity'
import FaqList from '@/components/FaqList.vue'
import Heading1 from '@/components/Heading.vue'
import FormGroup from '../components/FormGroup.vue'
import SingleFile from '../components/SingleFile.vue'
import Vcarousel from '@/components/Vcarousel.vue'

// @ is an alias to /src
export default {
    name: 'HomeView',
    components: {
        Heading,
        Iframe,
        FaqList,
        Heading1,
        FormGroup,
        SingleFile,
        Vcarousel,
    },
    setup() {
        const faqs = ref([
            {
                question: 'Do I need a measuring tool to test the application?',
                answer: 'No, You can use the default photos available in the app to test it. Once you are happy with the app, you can order the measuring tool and subscribe accordingly. ',
            },
            {
                question: 'How can I order/ receive the measuring tool?',
                answer: 'Once the IOS or Android application is downloaded to your device, click on settings, fill up the form. The measuring tool will be shipped to your nominated address ASAP.',
            },
            {
                question:
                    'Why some of the buttons are disabled when I am on the first page?',
                answer: 'You first need to take two photos via this app, first from the front view and the second from the side view, once the photos were taken the buttons will be enabled. Please refer to the instruction video for further details. ',
            },
            {
                question:
                    'Can you explain more about the Corneal reflex and Corneal Center buttons?',
                answer: "To have a better experience with the app, Turn on your camera flash then applying Corneal Reflex will help you to see the reflex in Cornea, you will be able to adjust the circle on the cornea accordingly.However, if you don't have a camera flash, you can use Corneal Center instead to adjust the circle on the cornea. ",
            },
            {
                question:
                    'What to do when the cornea is covered by the frame arms?',
                answer: 'If the frame Arm is wide which will make it difficult to see the cornea from the side view, use the best estimate of the cornea position. ',
            },
            {
                question: 'App can not detect targets on the measuring tool.',
                answer: 'In order to capture a good picture, patient`s head should be in an area with sufficient light with no backlight, at a distance of about 60 cm from your device.\n patient should look at the camera with a head posture in the primary position .',
            },
            {
                question:
                    'How many patient`s files can be save in the application? ',
                answer: 'You can save up to 100 patients in app.\nonce the count reached 100, the oldest ones will be deleted when you save a new patient.\nIn other word you can  have the 100 newest patient`s data at any time.    ',
            },
        ])

        const fullName = ref('')
        const phone = ref('')
        const email = ref('')
        const description = ref('')
        let files = ref([])

        const sendForm = () => {
            const message = {
                fullName: fullName.value,
                phone: phone.value,
                email: email.value,
                description: description.value,
                files: files.value,
            }
            console.log(JSON.stringify(message))
        }

        const fileChanged = (e) => {
            if (!e.target.files[0]) return
            const fileObject = e.target.files[0]
            const newObject = {
                lastModified: fileObject.lastModified,
                lastModifiedDate: fileObject.lastModifiedDate,
                name: fileObject.name,
                size: fileObject.size,
                type: fileObject.type,
            }

            // then use JSON.stringify on new object
            files.value.push(JSON.stringify(newObject))
        }

        const deleteFile = (fileToDelete) => {
            files.value = files.value.filter((file) => {
                return file != fileToDelete
            })
            console.log(files.value)
        }

        const slides = [
            'slider-img-1.webp',
            'slider-img-2.webp',
            'slider-img-3.webp',
            'slider-img-4.webp',
            'slider-img-5.webp',
        ]

        return {
            faqs,
            fullName,
            phone,
            email,
            description,
            fileChanged,
            sendForm,
            files,
            deleteFile,
            slides,
        }
    },
}
</script>

<style lang="scss">
.hero {
    text-align: center;
    padding: 2em 0;
}

h1 {
    font-size: 1.5rem;
    margin-top: 0.2em;
    letter-spacing: 1px;
    font-family: 'Archivo Black', sans-serif;
    color: var(--text-header-primary);
}

.whatsapp-svg {
    width: 25px;
}

.home-img {
    display: block;
    width: 100%;
}

.info-section {
    margin-top: 1.3em;
}
.info-sub-section {
    padding-top: 1.5em 0;

    h3 {
        margin-bottom: 1em;
        margin-top: 1em;
        font-weight: normal;
        letter-spacing: 2.5px;
        font-size: 1.8rem;
        color: var(--text-header-primary);
        font-family: 'Montserrat', sans-serif;
    }

    ul {
        margin-left: 2.5em;
    }

    p,
    li {
        color: var(--text-secondary);
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        line-height: 1.6;
    }
}

.download-article {
    margin-top: 4em;
}

.download-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3em;
    margin-top: 2em;
    img {
        width: 90px;
    }
}

.tutorial-section {
    background-color: var(--bg-accent1);
    margin-top: 3em;
    padding-top: 1.5em;
    padding-bottom: 3em;
}

.faq-section {
    margin-top: 2em;
}

.contact-help {
    color: var(--text-secondary);
    text-align: center;
    margin-block: 2.5em;
    padding-inline: 0.7em;
    letter-spacing: 0.7px;
    font-family: 'Montserrat', arial, sans-serif;
}

.new-feature-article {
    background-color: var(--bg-accent1);
    margin-top: 2em;
    padding-block: 2em;

    img {
        display: block;
        width: 100%;
        margin-top: 1em;
    }
    .new-feature-header {
        font-family: 'Archivo Black', arial, sans-serif;
        padding-block: 1.2em;
        font-size: 1.6rem;
        color: var(--text-header-primary);
    }

    .new-feature-p {
        font-family: 'Montserrat', arial, sans-serif;
        line-height: 1.5;
        color: var(--text-new-feature-p);
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 2em;
    }
}
.new-feature-btn {
    text-transform: uppercase;
    font-family: 'Montserrat', arial, sans-serif;
    font-size: 0.9rem;
    font-weight: bold;
    border: none;
    padding: 1.3em 2.5em;
    border-radius: 2rem;
    background-color: white;
    color: var(--btn-primary);
    cursor: pointer;
    margin-bottom: 0.7em;
}

.slider {
    padding-block: 1em;
    h2 {
        margin-top: 0.5em;
    }
}

.contact-us-section {
    background-color: var(--bg-accent2);
    padding-block: 1.5em;
    z-index: -3;
    text-align: center;

    p {
        color: var(--privacy-paragraph);
        text-align: center;
        margin-top: 2.5em;
        font-size: 1rem;
        font-family: 'Montserrat', arial, sans-serif;
    }

    .form-header {
        text-transform: uppercase;
        font-size: 1.05rem;
        color: var(--text-4);
        text-align: center;
        font-family: 'Montserrat', arial, sans-serif;
        font-weight: normal;
        letter-spacing: 0.7px;
        margin-top: 2em;
    }

    .message-textarea {
        border: 2px solid var(--text-4);
        outline: none;
        background-color: transparent;
        width: 100%;
        color: var(--text-4);
        padding: 1.2em 0.6em;
        padding-bottom: 0.7em;
        font-size: 1rem;
        letter-spacing: 0.7px;
        font-family: 'Montserrat', arial, sans-serif;
        margin-top: 2em;
        border-radius: 0.3em;
    }

    .form-file {
        display: none;
        user-select: none;
        pointer-events: none;
    }

    .file-label {
        display: flex;
        align-items: center;
        gap: 0.6em;
        margin-top: 1em;
        color: var(--link-primary);
        cursor: pointer;
        font-family: 'Montserrat', arial, sans-serif;
        & > label {
            display: inline-block;
            z-index: 1;
        }
    }

    .message-submit-btn {
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

    .privacy-terms {
        font-family: 'Montserrat', arial, sans-serif;
        font-size: 0.8rem;
    }
}

.links-times-section {
    h4 {
        text-transform: uppercase;
        color: var(--text-4);
        font-family: 'Montserrat', arial, sans-serif;
        font-weight: normal;
        margin-top: 3em;
    }

    h5 {
        color: var(--text-4);
        font-family: 'Montserrat', arial, sans-serif;
        font-weight: normal;
        font-size: 1.3rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-top: 2em;
    }

    .new-feature-btn {
        margin-top: 2.7em;
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        gap: 1em;
        margin-inline: auto;

        span {
            font-size: clamp(0.6rem, 3vw, 0.9rem);
        }
    }

    .support-email {
        margin-top: 2em;
        font-size: 1rem;
        font-family: 'Montserrat', arial, sans-serif;
    }
    .work-hours-container {
        margin-top: 2em;
    }
    .work-hours {
        margin-top: 0.3em;
    }
}

.find-us-on-article {
    padding-block: 1.5em;
}

.find-us-links-container {
    display: flex;
    justify-content: center;
    gap: 1em;
    margin-block: 1.5em;

    img {
        width: 44px;
        overflow: hidden;
    }
}
</style>
