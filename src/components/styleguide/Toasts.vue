<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                Toasts
            </h3>

            <preview>
                <button
                    id="liveToastBtn"
                    class="btn btn-primary"
                    type="button"
                    @click="showToast"
                >
                    Show live toast
                </button>

                <div
                    class="position-fixed bottom-0 end-0 p-3"
                    style="z-index: 11;"
                >
                    <div
                        id="liveToast"
                        ref="liveToast"
                        aria-atomic="true"
                        aria-live="assertive"
                        class="toast hide"
                        role="alert"
                    >
                        <div class="toast-header pb-1">
                            <fa
                                class="text-primary me-2"
                                icon="info"
                                size="2x"
                            />

                            <span class="me-auto">New version uploaded</span>

                            <button
                                aria-label="Close"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                type="button"
                                @click="hideToast"
                            />
                        </div>

                        <div class="toast-body pt-1">
                            Robin Dohmen edited the <a href="#">Pain & Gain</a>
                        </div>
                    </div>
                </div>
            </preview>

            <h4>
                Color variants
            </h4>

            <preview>
                <div
                    v-for="color in themeColors"
                    :key="color"
                    aria-atomic="true"
                    aria-live="assertive"
                    :class="`toast showing align-items-center text-white bg-${color} border-0 mb-2`"
                    role="alert"
                >
                    <div class="d-flex">
                        <div class="toast-body">
                            Hello, world! This is a toast message.
                        </div>

                        <button
                            aria-label="Close"
                            class="btn-close btn-close-white me-2 m-auto"
                            data-bs-dismiss="toast"
                            type="button"
                        />
                    </div>
                </div>
            </preview>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import Preview from '@/components/styleguide/Preview.vue';
import {Toast} from 'bootstrap';
import themeColors from '@/components/styleguide/themeColors';

export default defineComponent({
    name: 'Toasts',
    components: {
        Preview,
    },
    setup() {
        const liveToast = ref<HTMLElement>();

        let toast: Toast;

        onMounted(() => {
            if (liveToast.value) {
                toast = new Toast(liveToast.value);
            }
        });

        const showToast = (): void => {
            toast.show();
        };

        const hideToast = (): void => {
            toast.hide();
        };

        return {
            themeColors,
            liveToast,
            showToast,
            hideToast,
        };
    },
});
</script>
