<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Badges
            </h3>

            <h4>
                Examples
            </h4>

            <preview>
                <h1>
                    Example heading <span class="badge bg-secondary">New</span>
                </h1>

                <h2>
                    Example heading <span class="badge bg-secondary">New</span>
                </h2>

                <h3>
                    Example heading <span class="badge bg-secondary">New</span>
                </h3>

                <h4>
                    Example heading <span class="badge bg-secondary">New</span>
                </h4>

                <h5>
                    Example heading <span class="badge bg-secondary">New</span>
                </h5>

                <h6>
                    Example heading <span class="badge bg-secondary">New</span>
                </h6>
            </preview>

            <h4>
                In buttons
            </h4>

            <preview>
                <button
                    class="btn btn-primary"
                    type="button"
                >
                    Notifications <span class="badge bg-secondary">4</span>
                </button>
            </preview>

            <h4>
                Positioned
            </h4>

            <preview>
                <button
                    class="btn btn-primary position-relative"
                    type="button"
                >
                    Inbox
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99+
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </button>
            </preview>

            <h4>
                Color variants and pill shaped
            </h4>

            <preview>
                <span
                    v-for="color in themeColors"
                    :key="color"
                    :class="`badge rounded-pill bg-${color} me-1`"
                >
                    {{ color }}
                </span>
            </preview>
        </div>
    </div>
</template>

<script lang="ts">
import Preview from '@/components/styleguide/Preview.vue';
import {defineComponent} from 'vue';
import themeColors from '@/components/styleguide/themeColors';

export default defineComponent({
    name: 'Badges',
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
