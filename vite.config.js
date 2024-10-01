import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/fb-portfolio/',
    plugins: [react()],
    css: {
        preprocessorOptions : {
            scss: {
                api: "modern-compiler",
            },
        }
    },
})

