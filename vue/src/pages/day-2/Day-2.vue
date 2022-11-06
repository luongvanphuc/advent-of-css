<script setup lang="ts">
import Panel from './shared/components/Panel.vue';
import DishList from './shared/components/DishList.vue';
import Cart from './shared/components/Cart.vue';
import { dishes } from './shared/models/constant';
</script>

<template>
  <div class="wrapper relative flex justify-center items-start gap-14">
    <img class="bg-left absolute left-0" src="./shared/images/bg__left.svg" />
    <img
      class="absolute top-0 right-0"
      src="./shared/images/bg__top-right.svg"
    />
    <img
      class="bg-bottom-right absolute bottom-0 right-0"
      src="./shared/images/bg__btm-right.svg"
    />

    <Panel title="To Go Menu">
      <DishList :items="dishes" />
    </Panel>

    <Panel title="Your Cart">
      <Cart />
    </Panel>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.wrapper {
  --color-theme: #6b00f5;
  --color-hr: #d7d7f9;

  padding: 100px 0;
  background-color: #eff0f6;
  color: #000000;
  font-family: 'Poppins', sans-serif;
}

.bg-left {
  bottom: 20%;
  height: 450px;
}

.bg-bottom-right {
  height: 450px;
}
</style>
