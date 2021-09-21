<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Pagination
            </h3>

            <h4>
                Example
            </h4>

            <preview>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a
                                class="page-link"
                                href="#"
                            >
                                Previous
                            </a>
                        </li>

                        <li class="page-item">
                            <a
                                class="page-link"
                                href="#"
                            >
                                1
                            </a>
                        </li>

                        <li class="page-item">
                            <a
                                class="page-link"
                                href="#"
                            >
                                2
                            </a>
                        </li>

                        <li class="page-item">
                            <a
                                class="page-link"
                                href="#"
                            >
                                3
                            </a>
                        </li>

                        <li class="page-item">
                            <a
                                class="page-link"
                                href="#"
                            >
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </preview>

            <h4>
                Disabled and active states
            </h4>

            <preview>
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <span class="page-link">
                                Previous
                            </span>
                        </li>

                        <li class="page-item">
                            <a
                                class="page-link"
                                href="#"
                            >
                                1
                            </a>
                        </li>

                        <li
                            aria-current="page"
                            class="page-item active"
                        >
                            <span class="page-link">
                                2
                            </span>
                        </li>

                        <li class="page-item">
                            <a
                                class="page-link"
                                href="#"
                            >
                                3
                            </a>
                        </li>

                        <li class="page-item">
                            <a
                                class="page-link"
                                href="#"
                            >
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </preview>

            <h4>
                Sizing
            </h4>

            <preview>
                <nav>
                    <ul class="pagination pagination-lg">
                        <li
                            aria-current="page"
                            class="page-item active"
                        >
                            <span class="page-link">
                                1
                            </span>
                        </li>

                        <li class="page-item">
                            <a
                                class="page-link"
                                href="#"
                            >
                                2
                            </a>
                        </li>

                        <li class="page-item">
                            <a
                                class="page-link"
                                href="#"
                            >
                                3
                            </a>
                        </li>
                    </ul>
                </nav>

                <nav>
                    <ul class="pagination pagination-sm">
                        <li
                            aria-current="page"
                            class="page-item active"
                        >
                            <span class="page-link">
                                1
                            </span>
                        </li>

                        <li class="page-item">
                            <a
                                class="page-link"
                                href="#"
                            >
                                2
                            </a>
                        </li>

                        <li class="page-item">
                            <a
                                class="page-link"
                                href="#"
                            >
                                3
                            </a>
                        </li>
                    </ul>
                </nav>
            </preview>
        </div>
    </div>
</template>

<script lang="ts">
import Preview from '@/components/styleguide/Preview.vue';
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'Pagination',
    components: {
        Preview,
    },
});
</script>
