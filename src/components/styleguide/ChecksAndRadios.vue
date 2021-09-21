<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Checks and Radios
            </h3>

            <h4>
                Checks
            </h4>

            <preview>
                <div class="form-check">
                    <input
                        id="flexCheckDefault"
                        class="form-check-input"
                        type="checkbox"
                        value=""
                    >

                    <label
                        class="form-check-label"
                        for="flexCheckDefault"
                    >
                        Default checkbox
                    </label>
                </div>

                <div class="form-check">
                    <input
                        id="flexCheckChecked"
                        checked
                        class="form-check-input"
                        type="checkbox"
                        value=""
                    >

                    <label
                        class="form-check-label"
                        for="flexCheckChecked"
                    >
                        Checked checkbox
                    </label>
                </div>

                <div class="form-check">
                    <input
                        id="flexCheckDisabled"
                        class="form-check-input"
                        disabled
                        type="checkbox"
                        value=""
                    >

                    <label
                        class="form-check-label"
                        for="flexCheckDisabled"
                    >
                        Disabled checkbox
                    </label>
                </div>

                <div class="form-check">
                    <input
                        id="flexCheckCheckedDisabled"
                        checked
                        class="form-check-input"
                        disabled
                        type="checkbox"
                        value=""
                    >

                    <label
                        class="form-check-label"
                        for="flexCheckCheckedDisabled"
                    >
                        Disabled checked checkbox
                    </label>
                </div>
            </preview>

            <h4>
                Switches
            </h4>

            <preview>
                <div class="form-check form-switch">
                    <input
                        id="flexSwitchCheckDefault"
                        class="form-check-input"
                        type="checkbox"
                    >

                    <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                    >
                        Default switch checkbox input
                    </label>
                </div>

                <div class="form-check form-switch">
                    <input
                        id="flexSwitchCheckChecked"
                        checked
                        class="form-check-input"
                        type="checkbox"
                    >

                    <label
                        class="form-check-label"
                        for="flexSwitchCheckChecked"
                    >
                        Checked switch checkbox input
                    </label>
                </div>

                <div class="form-check form-switch">
                    <input
                        id="flexSwitchCheckDisabled"
                        class="form-check-input"
                        disabled
                        type="checkbox"
                    >

                    <label
                        class="form-check-label"
                        for="flexSwitchCheckDisabled"
                    >
                        Disabled switch checkbox input
                    </label>
                </div>

                <div class="form-check form-switch">
                    <input
                        id="flexSwitchCheckCheckedDisabled"
                        checked
                        class="form-check-input"
                        disabled
                        type="checkbox"
                    >

                    <label
                        class="form-check-label"
                        for="flexSwitchCheckCheckedDisabled"
                    >
                        Disabled checked switch checkbox input
                    </label>
                </div>
            </preview>

            <h4>
                Radios
            </h4>

            <preview>
                <div class="form-check">
                    <input
                        id="flexRadioDefault1"
                        class="form-check-input"
                        name="flexRadioDefault"
                        type="radio"
                    >

                    <label
                        class="form-check-label"
                        for="flexRadioDefault1"
                    >
                        Default radio
                    </label>
                </div>

                <div class="form-check">
                    <input
                        id="flexRadioDefault2"
                        checked
                        class="form-check-input"
                        name="flexRadioDefault"
                        type="radio"
                    >

                    <label
                        class="form-check-label"
                        for="flexRadioDefault2"
                    >
                        Default checked radio
                    </label>
                </div>

                <div class="form-check">
                    <input
                        id="flexRadioDisabled"
                        class="form-check-input"
                        disabled
                        name="flexRadioDisabled"
                        type="radio"
                    >

                    <label
                        class="form-check-label"
                        for="flexRadioDisabled"
                    >
                        Disabled radio
                    </label>
                </div>

                <div class="form-check">
                    <input
                        id="flexRadioCheckedDisabled"
                        checked
                        class="form-check-input"
                        disabled
                        name="flexRadioDisabled"
                        type="radio"
                    >

                    <label
                        class="form-check-label"
                        for="flexRadioCheckedDisabled"
                    >
                        Disabled checked radio
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
    name: 'ChecksAndRadios',
    components: {
        Preview,
    },
});
</script>
