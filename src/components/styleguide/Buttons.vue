<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Buttons
            </h3>

            <preview>
                <h4>
                    Examples
                </h4>

                <button
                    v-for="color in themeColors"
                    :key="color"
                    :class="`btn btn-${color} me-1`"
                >
                    {{ color }}
                </button>

                <button class="btn btn-link">
                    link
                </button>

                <button class="btn">
                    white
                </button>
            </preview>

            <preview>
                <h4>
                    Outline buttons
                </h4>

                <button
                    v-for="color in themeColors"
                    :key="color"
                    :class="`btn btn-outline-${color} me-1`"
                >
                    {{ color }}
                </button>
            </preview>

            <h4>
                Shapes
            </h4>

            <preview>
                <button class="btn btn-primary btn-square me-1">
                    S
                </button>

                <button class="btn btn-secondary btn-circle">
                    C
                </button>
            </preview>

            <h4>
                Sizes
            </h4>

            <preview>
                <h5>
                    Large
                </h5>

                <div class="mb-1">
                    <button class="btn btn-primary btn-lg me-1">
                        Large button
                    </button>

                    <button class="btn btn-secondary btn-lg">
                        Large button
                    </button>
                </div>

                <div>
                    <button class="btn btn-primary btn-square btn-lg me-1">
                        S
                    </button>

                    <button class="btn btn-secondary btn-circle btn-lg">
                        C
                    </button>
                </div>
            </preview>

            <preview>
                <h5>
                    Small
                </h5>

                <div class="mb-1">
                    <button class="btn btn-primary btn-sm me-1">
                        Small button
                    </button>

                    <button class="btn btn-secondary btn-sm">
                        Small button
                    </button>
                </div>

                <div>
                    <button class="btn btn-primary btn-square btn-sm me-1">
                        S
                    </button>

                    <button class="btn btn-secondary btn-circle btn-sm">
                        C
                    </button>
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
    name: 'Buttons',
    components: {
        Preview,
    },
    setup() {
        return {
            themeColors,
        };
    },
});
</script>
