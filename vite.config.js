import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    resolve: {
        alias: {
            "@pages": "/src/pages/",
            "@hooks": "/src/hooks/",
            "@assets": "/src/assets/",
            "@routes": "/src/routes/",
            "@layouts": "/src/layouts/",
            "@constants": "/src/constants/",
            "@components": "/src/components/",
            // "@api": "/src/libs/api/",
            // "@contexts": "/src/libs/contexts/",
            // "@utilities": "/src/libs/utilities/",
        },
    },
})