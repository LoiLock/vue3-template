<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Collapse
            </h3>

            <h4>
                Example
            </h4>

            <preview>
                <p>
                    <button
                        aria-controls="collapseExample"
                        aria-expanded="false"
                        class="form-collapse"
                        data-bs-target="#collapseExample"
                        data-bs-toggle="collapse"
                        type="button"
                    >
                        Toggle collapse
                    </button>
                </p>

                <div
                    id="collapseExample"
                    class="collapse"
                >
                    <div class="card card-body">
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                </div>
            </preview>
        </div>
    </div>
</template>

<script lang="ts">
import Preview from '@/components/styleguide/Preview.vue';
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'Collapse',
    components: {
        Preview,
    },
});
</script>
