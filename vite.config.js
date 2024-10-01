import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/fb-portfolio/src/main.jsx',
    plugins: [react()],
    css: {
        preprocessorOptions : {
            scss: {
                api: "modern-compiler",
            },
        }
    },
})

