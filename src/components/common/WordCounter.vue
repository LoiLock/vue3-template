<template>
    <span :class="textClass">
        {{ wordCount }} / {{ maxWords }} {{ $t('words.words') }}
    </span>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'WordCounter',
    props: {
        maxWords: {
            required: true,
            type: Number,
        },
        words: {
            required: true,
            type: String,
        },
    },
    computed: {
        wordCount(): number {
            return (this.words === '') ? 0 : this.words.split(/\s+/).length;
        },
        textClass(): string {
            let className = 'text-primary';

            const percentageOfMax = (100 / this.maxWords) * this.wordCount;

            if (percentageOfMax > 100) {
                className = 'text-danger';
            }

            if (percentageOfMax >= 115) {
                className += ' fw-boldest';
            }

            return className;
        },
    },
});
</script>
