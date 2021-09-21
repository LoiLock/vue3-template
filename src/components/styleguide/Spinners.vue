<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Spinners
            </h3>

            <h4>
                Examples
            </h4>

            <preview>
                <div
                    v-for="color in themeColors"
                    :key="color"
                    :class="`spinner-border text-${color} me-2`"
                    role="status"
                />
            </preview>

            <h4>
                Growing spinners
            </h4>

            <preview>
                <div
                    v-for="color in themeColors"
                    :key="color"
                    :class="`spinner-grow text-${color} me-2`"
                    role="status"
                />
            </preview>

            <h4>
                In buttons
            </h4>

            <preview>
                <button
                    class="btn btn-primary me-2"
                    disabled
                    type="button"
                >
                    <span
                        aria-hidden="true"
                        class="spinner-border spinner-border-sm"
                        role="status"
                    />

                    Loading...
                </button>

                <button
                    class="btn btn-primary"
                    disabled
                    type="button"
                >
                    <span
                        aria-hidden="true"
                        class="spinner-grow spinner-grow-sm"
                        role="status"
                    />

                    Loading...
                </button>
            </preview>
        </div>
    </div>
</template>

<script lang="ts">
import Preview from '@/components/styleguide/Preview.vue';
import {defineComponent} from 'vue';
import themeColors from '@/components/styleguide/themeColors';

export default defineComponent({
    name: 'Spinners',
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
