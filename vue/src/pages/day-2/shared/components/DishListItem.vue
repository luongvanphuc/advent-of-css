<script setup lang="ts">
import type { PropType } from 'vue';
import type { Dish } from '../models';

defineProps({
  item: Object as PropType<Dish>,
});

const emits = defineEmits<{
  (e: 'onAddToCart', item: Dish): void;
}>();
</script>

<template>
  <div class="dish">
    <div class="dish__inner" :style="{ background: item?.bgColor }">
      <img class="dish__img" :src="item?.image" />

      <div class="relative pt-6">
        <div class="dish__name">
          {{ item?.name }}
        </div>
        <div class="dish__price">${{ item?.price }}</div>
        <a-button
          class="dish__btn-add"
          type="primary"
          shape="round"
          @click="emits('onAddToCart', item as Dish)"
        >
          Add to Cart
        </a-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dish {
  min-height: 145px;

  &__inner {
    display: flex;
    margin: 32px 0 0 26px;
    border-radius: 20px 0 0 20px;
  }

  &__img {
    width: 144px;
    height: auto;
    transform: translate(-16px, -16px);
  }

  &__name {
    width: 80%;
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 20px;
  }

  &__price {
    font-size: 28px;
    line-height: 28px;
    font-weight: bold;
  }

  &__btn-add {
    position: absolute;
    bottom: -12px;
    width: 130px;
    border: 0;
    font-size: 16px;
    font-weight: bold;
    background-color: var(--color-theme);
  }
}
</style>
