<template>
  <el-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </el-scrollbar>
  <div>asdada</div>
  <SvgIcon name="home"></SvgIcon>
</template>

<style scoped></style>
