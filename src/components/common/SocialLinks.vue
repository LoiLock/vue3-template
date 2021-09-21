<template>
    <div class="social-links">
        <img
            alt="Picture of me"
            class="profile-picture"
            src="@/assets/images/pfp.webp"
        >

        <div class="links">
            <a
                v-for="(link, index) in links"
                :key="index"
                class="link"
                :href="link.url"
                rel="noreferrer noopener"
                target="_blank"
            >
                <fa
                    class="link-icon fs-3"
                    :icon="[link.iconType, link.iconName]"
                />

                {{ link.linkText }}
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import {PropType, defineComponent} from 'vue';
import SocialLink from '@/models/SocialLink';

export default defineComponent({
    props: {
        links: {
            required: true,
            type: Array as PropType<SocialLink[]>,
        },
    },
});
</script>

<style lang="scss" scoped>
$picture-size: 48px;

.social-links {
    display: flex;
    flex-wrap: nowrap;
}

.profile-picture {
    width: $picture-size;
    height: $picture-size;
    margin-right: rem(24px);
    border-radius: 50%;
}

.links {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    .link {
        display: inline-flex;
        align-items: center;

        &-icon {
            margin-right: rem(8px);
        }

        &:not(:last-of-type) {
            margin-right: rem(14px);
        }
    }
}
</style>
