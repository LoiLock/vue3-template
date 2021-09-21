<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Button group
            </h3>

            <preview>
                <h4>
                    Examples
                </h4>

                <div
                    aria-label="Basic example"
                    class="btn-group"
                    role="group"
                >
                    <button
                        class="btn btn-primary"
                        type="button"
                    >
                        Left
                    </button>

                    <button
                        class="btn btn-primary"
                        type="button"
                    >
                        Middle
                    </button>

                    <button
                        class="btn btn-primary"
                        type="button"
                    >
                        Right
                    </button>
                </div>
            </preview>

            <preview>
                <h4>
                    Links
                </h4>

                <div class="btn-group">
                    <a
                        aria-current="page"
                        class="btn btn-primary active"
                        href="#"
                    >
                        Active link
                    </a>

                    <a
                        class="btn btn-primary"
                        href="#"
                    >
                        Link
                    </a>

                    <a
                        class="btn btn-primary"
                        href="#"
                    >
                        Link
                    </a>
                </div>
            </preview>

            <h4>
                Mixed styles
            </h4>

            <preview>
                <div
                    aria-label="Basic mixed styles example"
                    class="btn-group"
                    role="group"
                >
                    <button
                        class="btn btn-danger"
                        type="button"
                    >
                        Left
                    </button>

                    <button
                        class="btn btn-warning"
                        type="button"
                    >
                        Middle
                    </button>

                    <button
                        class="btn btn-success"
                        type="button"
                    >
                        Right
                    </button>
                </div>
            </preview>

            <h4>
                Checkbox groups
            </h4>

            <preview>
                <div
                    aria-label="Basic checkbox toggle button group"
                    class="btn-group"
                    role="group"
                >
                    <input
                        id="btncheck1"
                        autocomplete="off"
                        class="btn-check"
                        type="checkbox"
                    >

                    <label
                        class="btn btn-outline-primary"
                        for="btncheck1"
                    >
                        Checkbox 1
                    </label>

                    <input
                        id="btncheck2"
                        autocomplete="off"
                        class="btn-check"
                        type="checkbox"
                    >

                    <label
                        class="btn btn-outline-primary"
                        for="btncheck2"
                    >
                        Checkbox 2
                    </label>

                    <input
                        id="btncheck3"
                        autocomplete="off"
                        class="btn-check"
                        type="checkbox"
                    >

                    <label
                        class="btn btn-outline-primary"
                        for="btncheck3"
                    >
                        Checkbox 3
                    </label>
                </div>
            </preview>

            <h4>
                Radio groups
            </h4>

            <preview>
                <div
                    aria-label="Basic radio toggle button group"
                    class="btn-group"
                    role="group"
                >
                    <input
                        id="btnradio1"
                        autocomplete="off"
                        checked
                        class="btn-check"
                        name="btnradio"
                        type="radio"
                    >

                    <label
                        class="btn btn-outline-primary"
                        for="btnradio1"
                    >
                        Radio 1
                    </label>

                    <input
                        id="btnradio2"
                        autocomplete="off"
                        class="btn-check"
                        name="btnradio"
                        type="radio"
                    >

                    <label
                        class="btn btn-outline-primary"
                        for="btnradio2"
                    >
                        Radio 2
                    </label>

                    <input
                        id="btnradio3"
                        autocomplete="off"
                        class="btn-check"
                        name="btnradio"
                        type="radio"
                    >

                    <label
                        class="btn btn-outline-primary"
                        for="btnradio3"
                    >
                        Radio 3
                    </label>
                </div>
            </preview>
        </div>
    </div>
</template>

<script lang="ts">
import Preview from '@/components/styleguide/Preview.vue';
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'ButtonGroup',
    components: {
        Preview,
    },
});
</script>
