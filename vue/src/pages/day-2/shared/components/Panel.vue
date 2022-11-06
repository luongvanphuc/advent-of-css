<script setup lang="ts">
defineProps({
  title: String,
});
</script>

<template>
  <div class="panel">
    <div class="mx-10 my-14 text-3xl font-bold">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.panel {
  display: block;
  width: 375px;
  height: 700px;
  overflow-y: auto;
  z-index: 1;
  box-shadow: 0 0 35px 0 rgb(154 161 171 / 15%);
  background-color: #fff;
  border-radius: 25px;
}
</style>
