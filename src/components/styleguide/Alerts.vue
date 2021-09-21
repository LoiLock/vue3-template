<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Alerts
            </h3>

            <preview>
                <h4>
                    Examples
                </h4>

                <div
                    v-for="color in themeColors"
                    :key="color"
                    :class="`alert alert-${color} mb-2`"
                    role="alert"
                >
                    A simple {{ color }} alert—check it out!
                </div>
            </preview>

            <preview>
                <h4>
                    Link color
                </h4>

                <div
                    v-for="color in themeColors"
                    :key="color"
                    :class="`alert alert-${color} mb-2`"
                    role="alert"
                >
                    A simple primary alert with

                    <a
                        class="alert-link"
                        href="#"
                    >
                        an example link.
                    </a>

                    Give it a click if you like.
                </div>
            </preview>

            <preview>
                <h4>
                    Additional content
                </h4>

                <div
                    class="alert alert-success"
                    role="alert"
                >
                    <h4 class="alert-heading">
                        Well done!
                    </h4>

                    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>

                    <hr>

                    <p class="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                    </p>
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
    name: 'Alerts',
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
