import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:svg-icons-register'
import gloablComponent from './components/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
// 忽略当前文件ts类型的检测否则有红色提示(打包会失败)
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)
app.use(gloablComponent)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
