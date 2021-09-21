<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Forms
            </h3>

            <preview>
                <form>
                    <div class="mb-3">
                        <label
                            class="form-label"
                            for="exampleInputEmail1"
                        >
                            Email address
                        </label>

                        <input
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            class="form-control"
                            type="email"
                        >

                        <div
                            id="emailHelp"
                            class="form-text"
                        >
                            We'll never share your email with anyone else.
                        </div>
                    </div>

                    <div class="mb-3">
                        <label
                            class="form-label"
                            for="exampleInputPassword1"
                        >
                            Password
                        </label>

                        <input
                            id="exampleInputPassword1"
                            class="form-control"
                            type="password"
                        >
                    </div>

                    <div class="mb-3">
                        <label
                            class="form-label"
                            for="exampleSelect"
                        >
                            Example select
                        </label>

                        <select
                            id="exampleSelect"
                            class="form-select"
                        >
                            <option>
                                Example option
                            </option>
                        </select>
                    </div>

                    <div class="mb-3 form-check">
                        <input
                            id="exampleCheck1"
                            class="form-check-input"
                            type="checkbox"
                        >

                        <label
                            class="form-check-label"
                            for="exampleCheck1"
                        >
                            Check me out
                        </label>

                        <div
                            id="passwordHelpBlock"
                            class="form-text"
                        >
                            Some extra information regarding the form fields can be added using .form-text
                        </div>
                    </div>

                    <button
                        class="btn btn-primary"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </preview>

            <h4>
                Disabled forms
            </h4>

            <preview>
                <form>
                    <fieldset disabled>
                        <div class="mb-3">
                            <label
                                class="form-label"
                                for="disabledTextInput"
                            >
                                Disabled input
                            </label>

                            <input
                                id="disabledTextInput"
                                class="form-control"
                                placeholder="Disabled input"
                                type="text"
                            >
                        </div>

                        <div class="mb-3">
                            <label
                                class="form-label"
                                for="disabledSelect"
                            >
                                Disabled select menu
                            </label>

                            <select
                                id="disabledSelect"
                                class="form-select"
                            >
                                <option>
                                    Disabled select
                                </option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <div class="form-check">
                                <input
                                    id="disabledFieldsetCheck"
                                    class="form-check-input"
                                    disabled
                                    type="checkbox"
                                >

                                <label
                                    class="form-check-label"
                                    for="disabledFieldsetCheck"
                                >
                                    Can't check this
                                </label>
                            </div>
                        </div>

                        <button
                            class="btn btn-primary"
                            type="submit"
                        >
                            Submit
                        </button>
                    </fieldset>
                </form>
            </preview>
        </div>
    </div>
</template>

<script lang="ts">
import Preview from '@/components/styleguide/Preview.vue';
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'Forms',
    components: {
        Preview,
    },
});
</script>
