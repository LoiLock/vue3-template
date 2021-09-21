<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Validation
            </h3>

            <preview>
                <form class="row g-3">
                    <div class="col-md-4">
                        <label
                            class="form-label"
                            for="validationServer01"
                        >
                            First name
                        </label>

                        <input
                            id="validationServer01"
                            class="form-control is-valid"
                            required
                            type="text"
                            value="Mark"
                        >

                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>

                    <div class="col-md-4">
                        <label
                            class="form-label"
                            for="validationServer02"
                        >
                            Last name
                        </label>

                        <input
                            id="validationServer02"
                            class="form-control is-valid"
                            required
                            type="text"
                            value="Otto"
                        >

                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>

                    <div class="col-md-4">
                        <label
                            class="form-label"
                            for="validationServerUsername"
                        >
                            Username
                        </label>

                        <div class="input-group has-validation">
                            <span
                                id="inputGroupPrepend3"
                                class="input-group-text"
                            >
                                @
                            </span>

                            <input
                                id="validationServerUsername"
                                aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                                class="form-control is-invalid"
                                required
                                type="text"
                            >

                            <div
                                id="validationServerUsernameFeedback"
                                class="invalid-feedback"
                            >
                                Please choose a username.
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <label
                            class="form-label"
                            for="validationServer03"
                        >
                            City
                        </label>
                        <input
                            id="validationServer03"
                            aria-describedby="validationServer03Feedback"
                            class="form-control is-invalid"
                            required
                            type="text"
                        >

                        <div
                            id="validationServer03Feedback"
                            class="invalid-feedback"
                        >
                            Please provide a valid city.
                        </div>
                    </div>

                    <div class="col-md-3">
                        <label
                            class="form-label"
                            for="validationServer04"
                        >
                            State
                        </label>

                        <select
                            id="validationServer04"
                            aria-describedby="validationServer04Feedback"
                            class="form-select is-invalid"
                            required
                        >
                            <option
                                disabled
                                selected
                                value=""
                            >
                                Choose...
                            </option>

                            <option>
                                ...
                            </option>
                        </select>

                        <div
                            id="validationServer04Feedback"
                            class="invalid-feedback"
                        >
                            Please select a valid state.
                        </div>
                    </div>

                    <div class="col-md-3">
                        <label
                            class="form-label"
                            for="validationServer05"
                        >
                            Zip
                        </label>

                        <input
                            id="validationServer05"
                            aria-describedby="validationServer05Feedback"
                            class="form-control is-invalid"
                            required
                            type="text"
                        >

                        <div
                            id="validationServer05Feedback"
                            class="invalid-feedback"
                        >
                            Please provide a valid zip.
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="form-check">
                            <input
                                id="invalidCheck3"
                                aria-describedby="invalidCheck3Feedback"
                                class="form-check-input is-invalid"
                                required
                                type="checkbox"
                                value=""
                            >

                            <label
                                class="form-check-label"
                                for="invalidCheck3"
                            >
                                Agree to terms and conditions
                            </label>

                            <div
                                id="invalidCheck3Feedback"
                                class="invalid-feedback"
                            >
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <button
                            class="btn btn-primary"
                            type="submit"
                        >
                            Submit form
                        </button>
                    </div>
                </form>
            </preview>
        </div>
    </div>
</template>

<script lang="ts">
import Preview from '@/components/styleguide/Preview.vue';
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'Validation',
    components: {
        Preview,
    },
});
</script>
