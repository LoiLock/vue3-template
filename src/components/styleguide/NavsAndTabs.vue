<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Navs and Tabs
            </h3>

            <h4>
                Default
            </h4>

            <preview>
                <nav class="nav">
                    <a
                        aria-current="page"
                        class="nav-link active"
                        href="#"
                    >
                        Active
                    </a>

                    <a
                        class="nav-link"
                        href="#"
                    >
                        Link
                    </a>

                    <a
                        class="nav-link"
                        href="#"
                    >
                        Link
                    </a>

                    <a
                        aria-disabled="true"
                        class="nav-link disabled"
                        href="#"
                        tabindex="-1"
                    >
                        Disabled
                    </a>
                </nav>
            </preview>

            <h4>
                Centered aligned
            </h4>

            <preview>
                <nav class="nav justify-content-center">
                    <a
                        aria-current="page"
                        class="nav-link active"
                        href="#"
                    >
                        Active
                    </a>

                    <a
                        class="nav-link"
                        href="#"
                    >
                        Link
                    </a>

                    <a
                        class="nav-link"
                        href="#"
                    >
                        Link
                    </a>

                    <a
                        aria-disabled="true"
                        class="nav-link disabled"
                        href="#"
                        tabindex="-1"
                    >
                        Disabled
                    </a>
                </nav>
            </preview>

            <h4>
                Right aligned
            </h4>

            <preview>
                <nav class="nav justify-content-end">
                    <a
                        aria-current="page"
                        class="nav-link active"
                        href="#"
                    >
                        Active
                    </a>

                    <a
                        class="nav-link"
                        href="#"
                    >
                        Link
                    </a>

                    <a
                        class="nav-link"
                        href="#"
                    >
                        Link
                    </a>

                    <a
                        aria-disabled="true"
                        class="nav-link disabled"
                        href="#"
                        tabindex="-1"
                    >
                        Disabled
                    </a>
                </nav>
            </preview>

            <h4>
                Vertical
            </h4>

            <preview>
                <nav class="nav flex-column">
                    <a
                        aria-current="page"
                        class="nav-link active"
                        href="#"
                    >
                        Active
                    </a>

                    <a
                        class="nav-link"
                        href="#"
                    >
                        Link
                    </a>

                    <a
                        class="nav-link"
                        href="#"
                    >
                        Link
                    </a>

                    <a
                        aria-disabled="true"
                        class="nav-link disabled"
                        href="#"
                        tabindex="-1"
                    >
                        Disabled
                    </a>
                </nav>
            </preview>

            <h4>
                Pills
            </h4>

            <preview>
                <nav class="nav nav-pills">
                    <a
                        aria-current="page"
                        class="nav-link active"
                        href="#"
                    >
                        Active
                    </a>

                    <a
                        class="nav-link"
                        href="#"
                    >
                        Link
                    </a>

                    <a
                        class="nav-link"
                        href="#"
                    >
                        Link
                    </a>

                    <a
                        aria-disabled="true"
                        class="nav-link disabled"
                        href="#"
                        tabindex="-1"
                    >
                        Disabled
                    </a>
                </nav>
            </preview>

            <h4>
                Fill and justify & Equal width elements
            </h4>

            <preview>
                <nav
                    v-for="variant in ['fill', 'justified']"
                    :key="variant"
                    :class="`nav nav-pills nav-${variant} mb-2`"
                >
                    <a
                        aria-current="page"
                        class="nav-link active"
                        href="#"
                    >
                        Active
                    </a>

                    <a
                        class="nav-link"
                        href="#"
                    >
                        Much longer nav link
                    </a>

                    <a
                        class="nav-link"
                        href="#"
                    >
                        Link
                    </a>

                    <a
                        aria-disabled="true"
                        class="nav-link disabled"
                        href="#"
                        tabindex="-1"
                    >
                        Disabled
                    </a>
                </nav>
            </preview>

            <h4>
                Tabs and pills with dropdowns
            </h4>

            <preview>
                <ul
                    v-for="variant in ['tabs', 'pills']"
                    :key="variant"
                    :class="`nav nav-${variant} mb-3`"
                >
                    <li class="nav-item">
                        <a
                            aria-current="page"
                            class="nav-link active"
                            href="#"
                        >
                            Active
                        </a>
                    </li>

                    <li class="nav-item dropdown">
                        <a
                            aria-expanded="false"
                            class="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                            href="#"
                            role="button"
                        >
                            Dropdown
                        </a>

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
                    </li>

                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#"
                        >
                            Link
                        </a>
                    </li>

                    <li class="nav-item">
                        <a
                            aria-disabled="true"
                            class="nav-link disabled"
                            href="#"
                            tabindex="-1"
                        >
                            Disabled
                        </a>
                    </li>
                </ul>
            </preview>
        </div>
    </div>
</template>

<script lang="ts">
import Preview from '@/components/styleguide/Preview.vue';
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'NavsAndTabs',
    components: {
        Preview,
    },
});
</script>
