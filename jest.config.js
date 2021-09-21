module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    setupFiles: [
        './tests/setup.ts',
    ],
    transform: {
        '^.+\\.vue$': 'vue-jest',
    },
};
