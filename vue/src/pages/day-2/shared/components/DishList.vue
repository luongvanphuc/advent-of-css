<script setup lang="ts">
import type { Dish } from '../models';
import DistListItem from './DishListItem.vue';
import { useCartStore } from '../stores/cart';

defineProps({
  items: Array<Dish>,
});

const { addItem } = useCartStore();
</script>

<template>
  <div class="mb-8">
    <DistListItem
      v-for="dish in items"
      :key="dish.id"
      :item="dish"
      @onAddToCart="addItem($event)"
    ></DistListItem>
  </div>
</template>
