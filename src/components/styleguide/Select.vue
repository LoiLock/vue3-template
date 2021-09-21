<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Select
            </h3>

            <h4>
                Default
            </h4>

            <preview>
                <select
                    aria-label="Default select example"
                    class="form-select"
                >
                    <option selected>
                        Open this select menu
                    </option>

                    <option value="1">
                        One
                    </option>

                    <option value="2">
                        Two
                    </option>

                    <option value="3">
                        Three
                    </option>
                </select>
            </preview>

            <h4>
                Sizing
            </h4>

            <preview>
                <select
                    aria-label=".form-select-lg example"
                    class="form-select form-select-lg mb-3"
                >
                    <option selected>
                        Open this select menu
                    </option>

                    <option value="1">
                        One
                    </option>

                    <option value="2">
                        Two
                    </option>

                    <option value="3">
                        Three
                    </option>
                </select>

                <select
                    aria-label=".form-select-sm example"
                    class="form-select form-select-sm"
                >
                    <option selected>
                        Open this select menu
                    </option>

                    <option value="1">
                        One
                    </option>

                    <option value="2">
                        Two
                    </option>

                    <option value="3">
                        Three
                    </option>
                </select>
            </preview>

            <h4>
                Multiple attribute
            </h4>

            <preview>
                <select
                    aria-label="multiple select example"
                    class="form-select"
                    multiple
                >
                    <option selected>
                        Open this select menu
                    </option>

                    <option value="1">
                        One
                    </option>

                    <option value="2">
                        Two
                    </option>

                    <option value="3">
                        Three
                    </option>
                </select>
            </preview>

            <h4>
                Size attribute
            </h4>

            <preview>
                <select
                    aria-label="size 3 select example"
                    class="form-select"
                    size="3"
                >
                    <option selected>
                        Open this select menu
                    </option>

                    <option value="1">
                        One
                    </option>

                    <option value="2">
                        Two
                    </option>

                    <option value="3">
                        Three
                    </option>
                </select>
            </preview>

            <h4>
                Disabled
            </h4>

            <preview>
                <select
                    aria-label="Disabled select example"
                    class="form-select"
                    disabled
                >
                    <option selected>
                        Open this select menu
                    </option>

                    <option value="1">
                        One
                    </option>

                    <option value="2">
                        Two
                    </option>

                    <option value="3">
                        Three
                    </option>
                </select>
            </preview>
        </div>
    </div>
</template>

<script lang="ts">
import Preview from '@/components/styleguide/Preview.vue';
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'Select',
    components: {
        Preview,
    },
});
</script>
