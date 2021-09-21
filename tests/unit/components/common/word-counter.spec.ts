import WordCounter from '@/components/common/WordCounter.vue';
import {shallowMount} from '@vue/test-utils';

describe('WordCounter.vue', () => {
    it('be 0 when empty string is passed', () => {
        const wrapper = shallowMount(WordCounter, {
            props: {
                maxWords: 40,
                words: '',
            },
        });

        expect(wrapper.text()).toContain('0 / 40');
    });

    it('renders the correct word count', () => {
        const wrapper = shallowMount(WordCounter, {
            props: {
                maxWords: 40,
                words: 'one two three four five six seven eight nine ten',
            },
        });

        expect(wrapper.text()).toContain('10 / 40');
    });

    it('be red when max words are exceeded', () => {
        const wrapper = shallowMount(WordCounter, {
            props: {
                maxWords: 9,
                words: 'one two three four five six seven eight nine ten',
            },
        });

        expect(wrapper.classes()).toContain('text-danger');
    });

    it('be red and bold when word count is > 115% of allowed amount', () => {
        const wrapper = shallowMount(WordCounter, {
            props: {
                maxWords: 5,
                words: 'one two three four five six seven eight nine ten',
            },
        });

        expect(wrapper.classes()).toEqual([
            'text-danger',
            'fw-boldest',
        ]);
    });
});
