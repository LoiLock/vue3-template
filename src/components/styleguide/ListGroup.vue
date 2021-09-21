<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                List group
            </h3>

            <h4>
                Default
            </h4>

            <preview>
                <ul class="list-group">
                    <li
                        aria-disabled="true"
                        class="list-group-item disabled"
                    >
                        A disabled item
                    </li>

                    <li class="list-group-item">
                        A second item
                    </li>

                    <li class="list-group-item">
                        A third item
                    </li>

                    <li class="list-group-item">
                        A fourth item
                    </li>

                    <li class="list-group-item">
                        And a fifth one
                    </li>
                </ul>
            </preview>

            <h4>
                Links and buttons
            </h4>

            <preview>
                <div class="list-group mb-2">
                    <a
                        aria-current="true"
                        class="list-group-item list-group-item-action active"
                        href="#"
                    >
                        The current link item
                    </a>

                    <a
                        class="list-group-item list-group-item-action"
                        href="#"
                    >
                        A second link item
                    </a>

                    <a
                        class="list-group-item list-group-item-action"
                        href="#"
                    >
                        A third link item
                    </a>

                    <a
                        class="list-group-item list-group-item-action"
                        href="#"
                    >
                        A fourth link item
                    </a>

                    <a
                        aria-disabled="true"
                        class="list-group-item list-group-item-action disabled"
                        href="#"
                        tabindex="-1"
                    >
                        A disabled link item
                    </a>
                </div>

                <div class="list-group">
                    <button
                        aria-current="true"
                        class="list-group-item list-group-item-action active"
                        type="button"
                    >
                        The current button
                    </button>

                    <button
                        class="list-group-item list-group-item-action"
                        type="button"
                    >
                        A second item
                    </button>

                    <button
                        class="list-group-item list-group-item-action"
                        type="button"
                    >
                        A third button item
                    </button>

                    <button
                        class="list-group-item list-group-item-action"
                        type="button"
                    >
                        A fourth button item
                    </button>

                    <button
                        class="list-group-item list-group-item-action"
                        disabled
                        type="button"
                    >
                        A disabled button item
                    </button>
                </div>
            </preview>

            <h4>
                Flush
            </h4>

            <preview>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        An item
                    </li>

                    <li class="list-group-item">
                        A second item
                    </li>

                    <li class="list-group-item">
                        A third item
                    </li>

                    <li class="list-group-item">
                        A fourth item
                    </li>

                    <li class="list-group-item">
                        And a fifth one
                    </li>
                </ul>
            </preview>

            <h4>
                Numbered
            </h4>

            <preview>
                <ol class="list-group list-group-numbered mb-2">
                    <li class="list-group-item">
                        Cras justo odio
                    </li>

                    <li class="list-group-item">
                        Cras justo odio
                    </li>

                    <li class="list-group-item">
                        Cras justo odio
                    </li>
                </ol>

                <ol class="list-group list-group-numbered">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">
                                Subheading
                            </div>
                            Cras justo odio
                        </div>

                        <span class="badge bg-primary rounded-pill">
                            14
                        </span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">
                                Subheading
                            </div>
                            Cras justo odio
                        </div>

                        <span class="badge bg-primary rounded-pill">
                            14
                        </span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">
                                Subheading
                            </div>
                            Cras justo odio
                        </div>

                        <span class="badge bg-primary rounded-pill">
                            14
                        </span>
                    </li>
                </ol>
            </preview>

            <h4>
                Custom content
            </h4>

            <preview>
                <div class="list-group">
                    <a
                        aria-current="true"
                        class="list-group-item list-group-item-action active"
                        href="#"
                    >
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">
                                List group item heading
                            </h5>

                            <small>
                                3 days ago
                            </small>
                        </div>

                        <p class="mb-1">
                            Some placeholder content in a paragraph.
                        </p>

                        <small>
                            And some small print.
                        </small>
                    </a>

                    <a
                        class="list-group-item list-group-item-action"
                        href="#"
                    >
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">
                                List group item heading
                            </h5>

                            <small class="text-muted">
                                3 days ago
                            </small>
                        </div>

                        <p class="mb-1">
                            Some placeholder content in a paragraph.
                        </p>

                        <small class="text-muted">
                            And some muted small print.
                        </small>
                    </a>

                    <a
                        class="list-group-item list-group-item-action"
                        href="#"
                    >
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">
                                List group item heading
                            </h5>

                            <small class="text-muted">
                                3 days ago
                            </small>
                        </div>

                        <p class="mb-1">
                            Some placeholder content in a paragraph.
                        </p>

                        <small class="text-muted">
                            And some muted small print.
                        </small>
                    </a>
                </div>
            </preview>

            <h4>
                Active color variants
            </h4>

            <preview>
                <div class="list-group">
                    <a
                        class="list-group-item list-group-item-action"
                        href="#"
                    >A simple default list group item</a>

                    <a
                        v-for="color in themeColors"
                        :key="color"
                        :class="`list-group-item list-group-item-action list-group-item-${color}`"
                        href="#"
                    >
                        A simple primary list group item
                    </a>
                </div>
            </preview>

            <h4>
                Checkboxes and radios
            </h4>

            <preview>
                <div class="list-group">
                    <label class="list-group-item">
                        <input
                            class="form-check-input me-1"
                            type="checkbox"
                            value=""
                        >

                        First checkbox
                    </label>

                    <label class="list-group-item">
                        <input
                            class="form-check-input me-1"
                            type="checkbox"
                            value=""
                        >

                        Second checkbox
                    </label>

                    <label class="list-group-item">
                        <input
                            class="form-check-input me-1"
                            type="checkbox"
                            value=""
                        >

                        Third checkbox
                    </label>

                    <label class="list-group-item">
                        <input
                            class="form-check-input me-1"
                            type="checkbox"
                            value=""
                        >

                        Fourth checkbox
                    </label>

                    <label class="list-group-item">
                        <input
                            class="form-check-input me-1"
                            type="checkbox"
                            value=""
                        >

                        Fifth checkbox
                    </label>
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
    name: 'ListGroup',
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
