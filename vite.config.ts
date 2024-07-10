import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'; // @types/node가 설치되어 있어야 함

export default defineConfig({
  plugins: [react()],
  resolve: {
    //경로 별칭 설정
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})


