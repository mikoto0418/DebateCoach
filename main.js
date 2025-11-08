import { createSSRApp } from 'vue'
import App from './App.vue'

// 创建应用实例
export function createApp() {
  const app = createSSRApp(App)
  
  // 全局错误处理
  app.config.errorHandler = (err, vm, info) => {
    console.error('Vue 全局错误:', err, info)
  }
  
  return {
    app
  }
}
