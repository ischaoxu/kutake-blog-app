<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div>
          <el-checkbox v-model="checked1" label="Option 1" size="large" />
          <el-checkbox v-model="checked2" label="Option 2" size="large" />
        </div>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>12313131131313</el-footer>
    </el-container>
  </div>
  <HelloWorld />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
