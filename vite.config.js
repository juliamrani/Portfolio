import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	base: '/super-couscous-zqym2kq/', // ← ex: '/super-couscous-zqym2kq/'
})