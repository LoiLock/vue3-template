<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Form controls
            </h3>

            <h4>
                Example
            </h4>

            <preview>
                <div class="mb-3">
                    <label
                        class="form-label"
                        for="exampleFormControlInput1"
                    >
                        Email address
                    </label>

                    <input
                        id="exampleFormControlInput1"
                        class="form-control"
                        placeholder="name@example.com"
                        type="email"
                    >
                </div>

                <div class="mb-3">
                    <label
                        class="form-label"
                        for="exampleFormControlTextarea1"
                    >
                        Example textarea
                    </label>

                    <textarea
                        id="exampleFormControlTextarea1"
                        class="form-control"
                        rows="3"
                    />
                </div>
            </preview>

            <h4>
                Sizing
            </h4>

            <preview>
                <input
                    aria-label=".form-control-sm example"
                    class="form-control form-control-sm mb-2"
                    placeholder=".form-control-sm"
                    type="text"
                >

                <input
                    aria-label="default input example"
                    class="form-control mb-2"
                    placeholder="Default input"
                    type="text"
                >

                <input
                    aria-label=".form-control-lg example"
                    class="form-control form-control-lg"
                    placeholder=".form-control-lg"
                    type="text"
                >
            </preview>

            <h4>
                Disabled
            </h4>

            <preview>
                <input
                    aria-label="Disabled input example"
                    class="form-control mb-2"
                    disabled
                    placeholder="Disabled input"
                    type="text"
                >

                <input
                    aria-label="Disabled input example"
                    class="form-control"
                    disabled
                    readonly
                    type="text"
                    value="Disabled readonly input"
                >
            </preview>

            <h4>
                Readonly
            </h4>

            <preview>
                <input
                    aria-label="readonly input example"
                    class="form-control"
                    readonly
                    type="text"
                    value="Readonly input here..."
                >
            </preview>
        </div>
    </div>
</template>

<script lang="ts">
import Preview from '@/components/styleguide/Preview.vue';
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'FormControls',
    components: {
        Preview,
    },
});
</script>
