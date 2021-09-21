<template>
    <div class="shadow-sm rounded mb-3 p-3">
        <slot />
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'Preview',
});
</script>
