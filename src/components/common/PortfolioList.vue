<template>
    <div class="portfolio-list h-100 w-100">
        <portfolio-item
            v-for="(project, index) in entries"
            :key="index"
            :entry="project"
            :style="{
                opacity: (hoveredItemIndex === index || typeof hoveredItemIndex === 'undefined') ? 1 : .4
            }"
            @mouseleave="hoveredItemIndex = undefined"
            @mouseover="hoveredItemIndex = index"
        />
    </div>
</template>

<script lang="ts">
import {PropType, defineComponent, ref} from 'vue';
import PortfolioEntry from '@/models/PortfolioEntry';
import PortfolioItem from '@/components/common/PortfolioItem.vue';

export default defineComponent({
    components: {
        PortfolioItem,
    },
    props: {
        entries: {
            required: true,
            type: Array as PropType<PortfolioEntry[]>,
        },
    },
    setup() {
        const hoveredItemIndex = ref<number | undefined>(undefined);

        return {
            hoveredItemIndex,
        };
    },
});
</script>

<style lang="scss" scoped>
.portfolio-list {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}
</style>
