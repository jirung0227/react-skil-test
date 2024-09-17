import react from '@vitejs/plugin-react-swc';
import path from 'path'; // @types/node가 설치되어 있어야 함
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    //경로 별칭 설정
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      // '/api' 경로로 들어오는 요청을 프록시
      '/api': {
        target: 'http://localhost:3000', // 백엔드 서버 주소
        changeOrigin: true,
        rewrite: (path) => {
          const result = path.replace(/^\/api/, '');
          return result;
        },
      },
    },
  },
});
