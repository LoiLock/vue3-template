<template>
    <div class="home-page container vh-100">
        <div class="home-page-content row">
            <div class="introduction-wrapper col-5 h-100">
                <div class="introduction">
                    <h1 class="introduction__header">
                        {{ $t("sentences.introduction_header") }} Jochem Hagenaars
                    </h1>

                    <p class="introduction__description">
                        {{ $t("sentences.introduction_description") }} {{ randomDutchEmoji }}
                    </p>

                    <p class="introduction__description">
                        {{ $t("sentences.introduction_description_secondary") }}
                    </p>

                    <h4>
                        Other things that interest me / I've got experience with
                    </h4>

                    <ul>
                        <li
                            v-for="(interest, index) in interests"
                            :key="index"
                        >
                            {{ interest }}
                        </li>
                    </ul>
                </div>

                <div>
                    <a
                        class="d-block mb-3"
                        download
                        href="documents/letter_of_recommendation.doc"
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        Letter of recommendation
                    </a>

                    <social-links :links="socialLinks" />
                </div>
            </div>

            <div class="col h-100 portfolio-list-wrapper no-scrollbar">
                <portfolio-list
                    :entries="portfolioEntries"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue';
import PortfolioEntry from '@/models/PortfolioEntry';
import PortfolioList from '@/components/common/PortfolioList.vue';
import SocialLink from '@/models/SocialLink';
import SocialLinks from '@/components/common/SocialLinks.vue';

export default defineComponent({
    components: {
        PortfolioList,
        SocialLinks,
    },
    setup() {
        const interests = [
            'TypeScript / JavaScript',
            'VueJS',
            'NodeJS',
            'A bit of GO',
            'A bit of PHP',
            'CSS/Sass',
            'Linux',
            'Nginx',
            'Docker',
            'CI/CD',
            'Headphones, I\'m a bit of an audiophile',
            'Synths',
            'Dumb domain hacks',
        ];

        const dutchEmojis = [
            '🧀',
            '🍟',
            '🚲',
            '🇳🇱',
        ];

        const randomDutchEmoji = computed(() => dutchEmojis[Math.floor(Math.random() * dutchEmojis.length)]);

        const portfolioEntries = ref<PortfolioEntry[]>([
            {
                name: 'Dopamine',
                url: '',
                description: '🎨 A WIP rebuild of Planetary using Vue and typescript',
                type: 'project',
                startDate: '2021',
                prefixHeader: 'vue',
            },
            {
                name: 'Serotonin',
                url: '',
                description: '👨‍💻 Backend for Dopamine (WIP)',
                type: 'project',
                startDate: '2021',
                prefixHeader: 'typescript',
            },
            {
                name: 'Planetary',
                url: 'https://epileptic.party',
                description: '🌍 Planetary is a self-hosted, feature-rich ShareX server written in Node.js. Created for a college project. (Doesn\'t really demonstrate my current abilities)',
                type: 'project',
                startDate: '2020',
                prefixHeader: 'javascript',
            },
            {
                name: 'Unixporn.gallery',
                url: 'https://unixporn.gallery',
                description: '🎨 Used to be a content aggregator for /r/unixporn',
                type: 'project',
                startDate: '2019',
                prefixHeader: 'golang',
            },
            {
                name: 'Farla Webmedia',
                url: 'https://www.deltait.nl/blog/overname-farla-webmedia-door-delta-it/',
                description: 'Primarily assisted with SEO through manual linkbuilding',
                type: 'work',
                startDate: '2014',
                endDate: '2016',
                prefixHeader: 'Internship and summer job 🌞',
                location: 'Oirschot',
            },
            {
                name: 'Koning Willem 1 College',
                url: 'https://www.kw1c.nl/',
                description: 'Introduction to Javascript, HTML, CSS, PHP, C#, ASP.NET, MySQL',
                type: 'study',
                startDate: '2016',
                endDate: '2018',
                prefixHeader: 'Associate degree Software Developer',
                location: '\'s-Hertogenbosch',
            },
            {
                name: 'Gower College Swansea 🇬🇧',
                url: 'https://www.gcs.ac.uk/find-your-course-gower-college-swansea',
                description: 'Primarily assisted with SEO through manual linkbuilding',
                type: 'study',
                startDate: '2018',
                endDate: '2019',
                prefixHeader: 'A-Level Computer Science, IT and business',
                location: 'United Kingdom',
            },
            {
                name: 'WeProvide',
                url: 'https://weprovide.com/',
                description: 'Created and maintained several Wordpress websites',
                type: 'work',
                startDate: '2019',
                endDate: '2021',
                prefixHeader: 'Apprenticeship Web Developer',
                location: 'Eindhoven',
            },
            {
                name: 'Curio',
                url: 'https://www.gcs.ac.uk/find-your-course-gower-college-swansea',
                description: 'Degree Software Developer',
                type: 'study',
                startDate: '2020',
                endDate: '2021',
                prefixHeader: 'Study Software Developer',
                location: 'Breda',
            },
            {
                name: 'OWOW',
                url: 'https://owow.agency/',
                description: 'Worked on a new startup using Vue',
                type: 'work',
                startDate: '2021',
                prefixHeader: 'Front-end developer',
                location: 'Eindhoven',
            },
        ]);

        const socialLinks = ref<SocialLink[]>([
            {
                url: 'https://github.com/LoiLock',
                iconName: 'github',
                iconType: 'fab',
                linkText: 'Github',
            },
            {
                url: 'mailto:jochem.hagenaars@gmail.com',
                iconName: 'envelope',
                iconType: 'far',
                linkText: 'jochem.hagenaars@gmail.com',
            },
        ]);

        return {
            portfolioEntries,
            socialLinks,
            interests,
            randomDutchEmoji,
        };
    },
});
</script>

<style lang="scss" scoped>
.home-page {
    position: relative;

    &-content {
        height: 100%;
        padding: rem(48px) 0;
    }
}

.introduction-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: rem(48px);
}

.introduction {
    margin-bottom: rem(14px);
    &__header {
        font-weight: $font-weight-boldest;
    }

    &__description {
        font-size: rem(16px);
    }
}

.portfolio-list-wrapper {
    overflow-y: scroll;
}

@media screen and (max-width: 640px) {
    .home-page-content {
        padding: rem(24px) 0;
    }
}

@media screen and (max-width: 1200px) {
    .introduction-wrapper {
        width: 100%;
        padding-right: calc(var(--bs-gutter-x) * .5);
        margin-bottom: rem(32px);
    }

    .home-page-content {
        display: flex;
        flex-direction: column;
        height: unset;
    }
}
</style>
