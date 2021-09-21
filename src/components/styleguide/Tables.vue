<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Tables
            </h3>

            <h4>
                Default with hover and striped rows
            </h4>

            <preview>
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col">
                                #
                            </th>

                            <th scope="col">
                                First
                            </th>

                            <th scope="col">
                                Last
                            </th>

                            <th scope="col">
                                Handle
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th scope="row">
                                1
                            </th>

                            <td>
                                Mark
                            </td>

                            <td>
                                Otto
                            </td>

                            <td>
                                @mdo
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">
                                2
                            </th>

                            <td>
                                Jacob
                            </td>

                            <td>
                                Thornton
                            </td>

                            <td>
                                @fat
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">
                                3
                            </th>

                            <td colspan="2">
                                Larry the Bird
                            </td>

                            <td>
                                @twitter
                            </td>
                        </tr>
                    </tbody>
                </table>
            </preview>

            <h4>
                Color variants
            </h4>

            <preview>
                <h5>
                    On tables
                </h5>

                <table
                    v-for="(color, index) in themeColors"
                    :key="color"
                    :class="`table table-${color}`"
                >
                    <tbody>
                        <tr>
                            <th scope="row">
                                {{ index }}
                            </th>

                            <td>
                                .table-{{ color }}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h5>
                    On rows
                </h5>

                <table
                    v-for="(color, index) in themeColors"
                    :key="color"
                    class="table"
                >
                    <tbody>
                        <tr :class="`table-${color}`">
                            <th scope="row">
                                {{ index }}
                            </th>

                            <td>
                                .table-{{ color }}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h5>
                    On cells
                </h5>

                <table class="table">
                    <tbody>
                        <tr>
                            <td
                                v-for="color in themeColors"
                                :key="color"
                                :class="`table-${color}`"
                            >
                                {{ color }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </preview>
        </div>
    </div>
</template>

<script lang="ts">
import Preview from '@/components/styleguide/Preview.vue';
import {defineComponent} from 'vue';
import themeColors from '@/components/styleguide/themeColors';

export default defineComponent({
    name: 'Tables',
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
