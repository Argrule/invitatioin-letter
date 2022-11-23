import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// debug
// 引入router
// const path = require('path')错误，不支持commonJs
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server:{
    host:'0.0.0.0'
  }
})
