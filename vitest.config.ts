import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        testTimeout: 5000,
        globalSetup: ['./utils/test.ts']
    },
})