<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Icon list
            </h3>

            <preview>
                <fa
                    v-for="icon of iconNames"
                    :key="icon"
                    class="me-3 mb-3"
                    :icon="icon"
                />
            </preview>
        </div>
    </div>
</template>

<script lang="ts">
import * as Icons from '@/library/customIcons';
import Preview from '@/components/styleguide/Preview.vue';
import {defineComponent} from 'vue';
import themeColors from '@/components/styleguide/themeColors';

export default defineComponent({
    name: 'Icons',
    components: {
        Preview,
    },
    setup() {
        const iconNames = Object.values(Icons).map((icon) => icon.iconName);

        return {
            iconNames,
            themeColors,
        };
    },
});
</script>
