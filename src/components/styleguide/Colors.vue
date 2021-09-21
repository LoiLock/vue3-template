<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Colors
            </h3>

            <h4>
                The following colors are available
            </h4>

            <preview>
                <div class="row m-0">
                    <div class="col-4 p-3">
                        Background
                    </div>

                    <div class="col-4 p-3">
                        Text
                    </div>

                    <div class="col-4 p-3">
                        Link
                    </div>
                </div>

                <div
                    v-for="color in themeColors"
                    :key="color"
                    class="row m-0"
                >
                    <div
                        class="col-4 mb-1 p-3"
                        :class="getThemeBgClasses(color)"
                    >
                        {{ color }}
                    </div>

                    <div
                        class="col-4 mb-1 p-3"
                        :class="getThemeTextClasses(color)"
                    >
                        {{ color }}
                    </div>

                    <div class="col-4 mb-1 p-0">
                        <a
                            class="d-block p-3"
                            :class="getThemeTextClasses(color)"
                            cols="4"
                            href="#"
                        >
                            {{ color }}
                        </a>
                    </div>
                </div>
            </preview>
        </div>
    </div>
</template>

<script lang="ts">
import Preview from '@/components/styleguide/Preview.vue';
import {defineComponent} from 'vue';
import themeColors from '@/components/styleguide/themeColors';

export default defineComponent({
    name: 'Colors',
    components: {
        Preview,
    },
    setup() {
        const getThemeBgClasses = (color: string): string[] => {
            const classes = [`bg-${color}`];

            if (['warning', 'light'].includes(color)) {
                classes.push('text-dark');
            } else {
                classes.push('text-white');
            }

            return classes;
        };

        const getThemeTextClasses = (color: string): string[] => {
            const classes = [`text-${color}`];

            if (['light'].includes(color)) {
                classes.push('bg-dark');
            } else {
                classes.push('bg-white');
            }

            return classes;
        };

        return {
            getThemeBgClasses,
            getThemeTextClasses,
            themeColors,
        };
    },
});
</script>
