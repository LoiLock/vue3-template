<template>
    <div class="container py-5">
        <div class="text-center">
            <h1>
                Vue-template styleguide
            </h1>

            <p>
                This library covers the base styles, components, and layouts for an example design system.
            </p>
        </div>

        <div class="row">
            <div class="col-2">
                <nav class="nav nav-pills flex-column">
                    <a
                        v-for="(component, index) in components"
                        :key="index"
                        class="nav-link mb-2"
                        :href="`#styleguide-${index}`"
                    >
                        {{ component.name }}
                    </a>
                </nav>
            </div>

            <div class="col-10 card-stack">
                <component
                    :is="component"
                    v-for="(component, index) in components"
                    :id="`styleguide-${index}`"
                    :key="index"
                    class="mb-3"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Alerts from '@/components/styleguide/Alerts.vue';
import Badges from '@/components/styleguide/Badges.vue';
import ButtonGroup from '@/components/styleguide/ButtonGroup.vue';
import Buttons from '@/components/styleguide/Buttons.vue';
import Cards from '@/components/styleguide/Cards.vue';
import ChecksAndRadios from '@/components/styleguide/ChecksAndRadios.vue';
import Collapse from '@/components/styleguide/Collapse.vue';
import Colors from '@/components/styleguide/Colors.vue';
import Dropdowns from '@/components/styleguide/Dropdowns.vue';
import FormControls from '@/components/styleguide/FormControls.vue';
import Forms from '@/components/styleguide/Forms.vue';
import Icons from '@/components/styleguide/Icons.vue';
import InputGroup from '@/components/styleguide/InputGroup.vue';
import ListGroup from '@/components/styleguide/ListGroup.vue';
import Navbar from '@/components/styleguide/Navbar.vue';
import NavsAndTabs from '@/components/styleguide/NavsAndTabs.vue';
import Pagination from '@/components/styleguide/Pagination.vue';
import Select from '@/components/styleguide/Select.vue';
import Spinners from '@/components/styleguide/Spinners.vue';
import Tables from '@/components/styleguide/Tables.vue';
import Toasts from '@/components/styleguide/Toasts.vue';
import Tooltips from '@/components/styleguide/Tooltips.vue';
import Typography from '@/components/styleguide/Typography.vue';
import Validation from '@/components/styleguide/Validation.vue';
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'StyleGuide',
    setup() {
        const components: any[] = [
            Alerts,
            Badges,
            Buttons,
            ButtonGroup,
            Cards,
            ChecksAndRadios,
            Collapse,
            Colors,
            Dropdowns,
            Forms,
            FormControls,
            Icons,
            InputGroup,
            ListGroup,
            Navbar,
            NavsAndTabs,
            Pagination,
            Select,
            Spinners,
            Tables,
            Toasts,
            Tooltips,
            Typography,
            Validation,
        ];

        return {
            components,
        };
    },
});
</script>
