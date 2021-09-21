<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Input Groups
            </h3>

            <preview>
                <div class="input-group mb-3">
                    <span
                        id="basic-addon1"
                        class="input-group-text"
                    >
                        @
                    </span>

                    <input
                        aria-describedby="basic-addon1"
                        aria-label="Username"
                        class="form-control"
                        placeholder="Username"
                        type="text"
                    >
                </div>

                <div class="input-group mb-3">
                    <input
                        aria-describedby="basic-addon2"
                        aria-label="Recipient's username"
                        class="form-control"
                        placeholder="Recipient's username"
                        type="text"
                    >

                    <span
                        id="basic-addon2"
                        class="input-group-text"
                    >
                        @example.com
                    </span>
                </div>

                <label
                    class="form-label"
                    for="basic-url"
                >
                    Your vanity URL
                </label>

                <div class="input-group mb-3">
                    <span
                        id="basic-addon3"
                        class="input-group-text"
                    >
                        https://example.com/users/
                    </span>

                    <input
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        class="form-control"
                        type="text"
                    >
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text">
                        $
                    </span>

                    <input
                        aria-label="Amount (to the nearest dollar)"
                        class="form-control"
                        type="text"
                    >

                    <span class="input-group-text">
                        .00
                    </span>
                </div>

                <div class="input-group mb-3">
                    <input
                        aria-label="Username"
                        class="form-control"
                        placeholder="Username"
                        type="text"
                    >
                    <span class="input-group-text">
                        @
                    </span>

                    <input
                        aria-label="Server"
                        class="form-control"
                        placeholder="Server"
                        type="text"
                    >
                </div>

                <div class="input-group">
                    <span class="input-group-text">
                        With textarea
                    </span>

                    <textarea
                        aria-label="With textarea"
                        class="form-control"
                    />
                </div>
            </preview>
        </div>
    </div>
</template>

<script lang="ts">
import Preview from '@/components/styleguide/Preview.vue';
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'InputGroup',
    components: {
        Preview,
    },
});
</script>
