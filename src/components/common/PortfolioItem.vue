<template>
    <div
        class="portfolio-item"
        @click="openLink"
    >
        <p
            v-if="entry.prefixHeader"
            class="prefix-header"
            :style="{color: prefixHeaderColor}"
        >
            <span class="topic">
                {{ entry.prefixHeader }}
            </span>

            <span>
                {{ subheaderText }}
            </span>
        </p>

        <h3 class="header">
            {{ emoji }} {{ entry.name }}
        </h3>

        <p class="description">
            {{ entry.description }}
        </p>
    </div>
</template>

<script lang="ts">
import {PropType, computed, defineComponent} from 'vue';
import PortfolioEntry from '@/models/PortfolioEntry';

export default defineComponent({
    props: {
        entry: {
            required: true,
            type: Object as PropType<PortfolioEntry>,
        },
    },
    setup(props) {
        const prefixHeaderColor = computed(() => {
            switch (props.entry.prefixHeader) {
                case 'vue':
                    return '#41B883';
                default:
                    return '#fff';
            }
        });

        const subheaderText = computed(() => {
            let text = '';

            if (props.entry.location) text += props.entry.location;

            if (props.entry.location && props.entry.startDate) text += ' - ';

            if (props.entry.startDate) text += props.entry.startDate;

            if (props.entry.endDate) text += ` / ${props.entry.endDate}`;

            return text;
        });

        const emoji = computed(() => {
            switch (props.entry.type) {
                case 'project':
                    return '💻';
                case 'study':
                    return '🎓';
                case 'work':
                    return '💼';
                case 'experience':
                    return '🌈';
                default:
                    return null;
            }
        });

        const openLink = () => window.open(props.entry.url, '_blank');

        return {
            emoji,
            prefixHeaderColor,
            subheaderText,
            openLink,
        };
    },
});
</script>

<style lang="scss" scoped>
.portfolio-item {
    padding: rem(40px);
    cursor: pointer;
    background-color: $gray-800;
    transition: $transition-base;

    &:hover {
        background-color: $gray-700;
        transform: scale(1.025);
    }

    &:not(:last-of-type) {
        margin-bottom: rem(18px);
    }

    .header {
        margin-bottom: rem(10px);
    }

    .description {
        font-size: rem(16px);
    }

    .prefix-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: rem(6px);
        font-size: rem(12px);
        opacity: .6;

        .topic {
            font-weight: $font-weight-bolder;
            text-transform: uppercase;
        }

        :not(.topic) {
            color: $body-color;
        }
    }
}
</style>
