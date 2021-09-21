module.exports = {
    css: {
        loaderOptions: {
            sass: {
                // Load SCSS variables and mixins in every Vue component.
                prependData: `
                @import '@/assets/scss/_variables';
                @import '@/assets/scss/mixins';

                @import 'node_modules/bootstrap/scss/functions';
                @import 'node_modules/bootstrap/scss/variables';
                @import 'node_modules/bootstrap/scss/mixins';`,
            },
        },
    },
};
