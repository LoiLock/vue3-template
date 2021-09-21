<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Tooltips
            </h3>

            <preview>
                <button
                    :ref="setItemRef"
                    class="btn btn-secondary me-2"
                    data-bs-placement="top"
                    data-bs-toggle="tooltip"
                    title="Tooltip on top"
                    type="button"
                >
                    Tooltip on top
                </button>

                <button
                    :ref="setItemRef"
                    class="btn btn-secondary me-2"
                    data-bs-placement="right"
                    data-bs-toggle="tooltip"
                    title="Tooltip on right"
                    type="button"
                >
                    Tooltip on right
                </button>

                <button
                    :ref="setItemRef"
                    class="btn btn-secondary me-2"
                    data-bs-placement="bottom"
                    data-bs-toggle="tooltip"
                    title="Tooltip on bottom"
                    type="button"
                >
                    Tooltip on bottom
                </button>

                <button
                    :ref="setItemRef"
                    class="btn btn-secondary"
                    data-bs-placement="left"
                    data-bs-toggle="tooltip"
                    title="Tooltip on left"
                    type="button"
                >
                    Tooltip on left
                </button>

                <button
                    :ref="setItemRef"
                    class="btn btn-secondary"
                    data-bs-html="true"
                    data-bs-toggle="tooltip"
                    title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
                    type="button"
                >
                    Tooltip with HTML
                </button>
            </preview>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import Preview from '@/components/styleguide/Preview.vue';
import {Tooltip} from 'bootstrap';

export default defineComponent({
    name: 'Tooltips',
    components: {
        Preview,
    },
    setup() {
        const tooltips: HTMLElement[] = [];

        const setItemRef = (el: HTMLElement): void => {
            if (el) {
                tooltips.push(el);
            }
        };

        onMounted(() => {
            for (const tooltip of tooltips) {
                new Tooltip(tooltip);
            }
        });

        return {
            setItemRef,
        };
    },
});
</script>
