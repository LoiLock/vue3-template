<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Typography
            </h3>

            <h5>
                In action
            </h5>

            <p>
                An example of elements combined in action.
            </p>

            <preview>
                <h1>
                    Heading 1
                </h1>

                <p>
                    Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit. Accusamus non voluptates perspiciatis molestias veritatis porro nisi error consectetur omnis officia quia quaerat reprehenderit, rem placeat quas in <strong>adipisci</strong> commodi praesentium!
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non voluptates perspiciatis molestias veritatis porro nisi error <strong>consectetur</strong> omnis officia quia quaerat reprehenderit, rem placeat quas in adipisci commodi praesentium!
                </p>

                <ul>
                    <li
                        v-for="item in listItems"
                        :key="item"
                    >
                        Some list item
                    </li>
                </ul>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non voluptates perspiciatis molestias <strong>veritatis</strong> porro nisi error consectetur omnis officia quia quaerat reprehenderit, rem placeat quas in adipisci commodi praesentium!
                </p>
            </preview>
        </div>

        <preview>
            <h5>
                Headings
            </h5>

            <p>
                All HTML headings, <code class="highlighter-rouge">&lt;h1&gt;</code> through <code class="highlighter-rouge">&lt;h6&gt;</code>, are available.
            </p>

            <preview>
                <component
                    :is="'h' + i"
                    v-for="i in 6"
                    :key="i"
                    class="mb-3"
                >
                    h{{ i }}. Bootstrap heading
                </component>
            </preview>
        </preview>

        <preview>
            <h5>
                Font sizes
            </h5>

            <preview>
                <p
                    v-for="i in 7"
                    :key="i"
                    :class="`'fs-${i}]`"
                >
                    This text is using the class .fs-{{ i }}
                </p>
            </preview>
        </preview>

        <preview>
            <h5>
                Display headings
            </h5>

            <p>
                Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a <strong>display heading</strong>—a larger, slightly more opinionated heading style. Keep in mind these headings are not responsive by default, but it’s possible to enable <a href="https://getbootstrap.com/docs/4.4/content/typography/#responsive-font-sizes">responsive font sizes</a>.
            </p>

            <preview>
                <h1
                    v-for="i in 6"
                    :key="i"
                    :class="`display-${i}`"
                >
                    Display {{ i }}
                </h1>
            </preview>
        </preview>

        <preview>
            <h5>
                Lead
            </h5>

            <p>
                Make a paragraph stand out by adding <code class="highlighter-rouge">.lead</code>.
            </p>

            <preview>
                <p class="lead">
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
                </p>
            </preview>
        </preview>

        <preview>
            <h5>
                Lists
            </h5>

            <h6>
                Default
            </h6>

            <p>
                The default browser styling.
            </p>

            <preview>
                <ul>
                    <li
                        v-for="(item, i) in listItems"
                        :key="item"
                    >
                        {{ item }}

                        <ul v-if="i === listItems.length - 1">
                            <li
                                v-for="subItem in listItems"
                                :key="subItem"
                            >
                                {{ subItem }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </preview>

            <h6>
                Unstyled
            </h6>

            <p>
                Remove the default <code class="highlighter-rouge">list-style</code> and left margin on list items (immediate children only). <strong>This only applies to immediate children list items</strong>, meaning you will need to add the class for any nested lists as well.
            </p>

            <preview>
                <ul class="list-unstyled">
                    <li
                        v-for="(item, i) in listItems"
                        :key="item"
                    >
                        {{ item }}

                        <ul v-if="i === listItems.length - 1">
                            <li
                                v-for="subItem in listItems"
                                :key="subItem"
                            >
                                {{ subItem }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </preview>

            <h6>
                Inline
            </h6>

            <p>
                Remove a list’s bullets and apply some light <code class="highlighter-rouge">margin</code> with a combination of two classes, <code class="highlighter-rouge">.list-inline</code> and <code class="highlighter-rouge">.list-inline-item</code>.
            </p>

            <preview>
                <ul class="list-inline">
                    <li
                        v-for="item in listItems"
                        :key="item"
                        class="list-inline-item"
                    >
                        {{ item }}
                    </li>
                </ul>
            </preview>

            <h6>
                Description list alignment
            </h6>

            <p>
                Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can optionally add a <code class="highlighter-rouge">.text-truncate</code> class to truncate the text with an ellipsis.
            </p>

            <preview>
                <dl class="row">
                    <dt class="col-sm-3">
                        Description lists
                    </dt>

                    <dd class="col-sm-9">
                        A description list is perfect for defining terms.
                    </dd>

                    <dt class="col-sm-3">
                        Euismod
                    </dt>

                    <dd class="col-sm-9">
                        <p>
                            Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
                        </p>

                        <p>
                            Donec id elit non mi porta gravida at eget metus.
                        </p>
                    </dd>

                    <dt class="col-sm-3">
                        Malesuada porta
                    </dt>

                    <dd class="col-sm-9">
                        Etiam porta sem malesuada magna mollis euismod.
                    </dd>

                    <dt class="col-sm-3 text-truncate">
                        Truncated term is truncated
                    </dt>

                    <dd class="col-sm-9">
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                    </dd>

                    <dt class="col-sm-3">
                        Nesting
                    </dt>

                    <dd class="col-sm-9">
                        <dl class="row">
                            <dt class="col-sm-4">
                                Nested definition list
                            </dt>

                            <dd class="col-sm-8">
                                Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
                            </dd>
                        </dl>
                    </dd>
                </dl>
            </preview>
        </preview>
    </div>
</template>

<script lang="ts">
import Preview from '@/components/styleguide/Preview.vue';
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'Typography',
    components: {
        Preview,
    },
    setup() {
        const listItems: string[] = [
            'Lorem ipsum dolor sit amet',
            'Consectetur adipiscing elit',
            'Integer molestie lorem at massa',
            'Facilisis in pretium nisl aliquet',
        ];

        return {
            listItems,
        };
    },
});
</script>
