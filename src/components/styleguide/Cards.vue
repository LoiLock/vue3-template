<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Cards
            </h3>

            <preview>
                <div class="card w-25">
                    <div class="position-relative">
                        <img
                            alt="Placeholder image"
                            class="card-img-top"
                            src="https://picsum.photos/600/300/"
                        >

                        <span class="badge bg-primary position-absolute bottom-0 start-0 ms-2 mb-2">Primary</span>
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">
                            Card title
                        </h5>

                        <p class="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>

                        <a
                            class="btn btn-primary"
                            href="#"
                        >
                            Go somewhere
                        </a>
                    </div>
                </div>
            </preview>

            <h4>
                Card with links
            </h4>

            <preview>
                <div class="card w-25">
                    <div class="card-body">
                        <h5 class="card-title">
                            Card title
                        </h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            Card subtitle
                        </h6>
                        <p class="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a
                            class="card-link"
                            href="#"
                        >Card link</a>
                        <a
                            class="card-link"
                            href="#"
                        >Another link</a>
                    </div>
                </div>
            </preview>

            <h4>
                Header and footer
            </h4>

            <preview>
                <div class="card">
                    <div class="card-header">
                        Featured header
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">
                            Special title treatment
                        </h5>

                        <p class="card-text">
                            With supporting text below as a natural lead-in to additional content.
                        </p>

                        <a
                            class="btn btn-primary"
                            href="#"
                        >
                            Go somewhere
                        </a>
                    </div>

                    <div class="card-footer">
                        Footer
                    </div>
                </div>
            </preview>
        </div>
    </div>
</template>

<script lang="ts">
import Preview from '@/components/styleguide/Preview.vue';
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'Cards',
    components: {
        Preview,
    },
});
</script>
