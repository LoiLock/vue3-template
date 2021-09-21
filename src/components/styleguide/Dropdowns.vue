<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Dropdowns
            </h3>

            <preview>
                <div class="dropdown">
                    <button
                        id="dropdownMenuButton1"
                        aria-expanded="false"
                        class="btn btn-secondary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        type="button"
                    >
                        Dropdown button
                    </button>

                    <ul
                        aria-labelledby="dropdownMenuButton1"
                        class="dropdown-menu"
                    >
                        <li>
                            <a
                                class="dropdown-item"
                                href="#"
                            >
                                Action
                            </a>
                        </li>

                        <li>
                            <a
                                class="dropdown-item"
                                href="#"
                            >
                                Another action
                            </a>
                        </li>

                        <li>
                            <a
                                class="dropdown-item"
                                href="#"
                            >
                                Something else here
                            </a>
                        </li>
                    </ul>
                </div>
            </preview>

            <h4>
                Variants
            </h4>

            <preview>
                <div
                    v-for="color in themeColors"
                    :key="color"
                    class="btn-group mb-2"
                >
                    <button
                        aria-expanded="false"
                        :class="`btn btn-${color} dropdown-toggle`"
                        data-bs-toggle="dropdown"
                        type="button"
                    >
                        Dropdown button
                    </button>

                    <ul class="dropdown-menu">
                        <li>
                            <a
                                class="dropdown-item"
                                href="#"
                            >
                                Action
                            </a>
                        </li>

                        <li>
                            <a
                                class="dropdown-item"
                                href="#"
                            >Another action</a>
                        </li>

                        <li>
                            <a
                                class="dropdown-item"
                                href="#"
                            >Something else here</a>
                        </li>

                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        <li>
                            <a
                                class="dropdown-item"
                                href="#"
                            >
                                Separated link
                            </a>
                        </li>
                    </ul>
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
    name: 'Dropdowns',
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
