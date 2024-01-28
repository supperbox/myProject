import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      dirs: ['src/**'],
      dts: 'types/components.d.ts',
      deep: true,
      resolvers:[AntDesignVueResolver()]
    }),
    AutoImport({
      imports: ['vue', 'pinia', 'vue-router'],
      dirs: ['src/store', 'src/utils', 'src/api', 'src/router'],
      dts: 'types/autoImport.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
