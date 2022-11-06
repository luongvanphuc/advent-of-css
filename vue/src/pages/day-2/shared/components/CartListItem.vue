<script setup lang="ts">
import type { PropType } from 'vue';
import type { CartItem } from '../models';

defineProps({
  item: Object as PropType<CartItem>,
});

const emits = defineEmits<{
  (e: 'onDecrease'): void;
  (e: 'onIncrease'): void;
}>();
</script>

<template>
  <div class="item" v-if="item">
    <img class="item__img" :src="item.image" />
    <div>
      <div class="item__name">{{ item.name }}</div>
      <div class="item__price">${{ item.price }}</div>
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-between w-32">
          <a-button
            class="item_btn-adjust"
            type="primary"
            @click="emits('onDecrease')"
          >
            <img src="../../shared/images/chevron-left.svg" />
          </a-button>
          <span>{{ item.quantity }}</span>
          <a-button
            class="item_btn-adjust"
            type="primary"
            @click="emits('onIncrease')"
          >
            <img src="../../shared/images/chevron-right.svg" />
          </a-button>
        </div>
        <span class="item__total-price">
          ${{ item.price * item.quantity }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  display: grid;
  grid-template-columns: 64px auto;
  gap: 10px;

  &__img {
    height: auto;
  }

  &_btn-adjust {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 50%;
    background-color: var(--color-theme);
    border-color: var(--color-theme);
  }

  &__name {
    font-size: 18px;
    line-height: 24px;
  }

  &__price {
    font-size: 16px;
    line-height: 28px;
    font-weight: bold;
  }

  &__total-price {
    font-size: 28px;
    font-weight: bold;
  }
}
</style>
