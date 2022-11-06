<script setup lang="ts">
import { useCartStore } from '../stores/cart';
import CartListItem from './CartListItem.vue';

const { cart, addItem, decreaseItemQty } = useCartStore();
</script>

<template>
  <div class="mx-8 mb-10" v-if="cart">
    <p v-if="cart.items.length === 0">Your cart is empty.</p>

    <template v-if="cart.items.length > 0">
      <div>
        <div class="cart-item" v-for="item of cart.items" :key="item.id">
          <CartListItem
            :item="item"
            @onIncrease="addItem(item)"
            @onDecrease="decreaseItemQty(item.id)"
          />
        </div>
      </div>
      <div class="total-section">
        <span class="total-section__label">Subtotal:</span>
        <span class="total-section__price"
          >${{ cart.subtotal.toFixed(2) }}</span
        >
        <span class="total-section__label">Tax:</span>
        <span class="total-section__price">${{ cart.tax.toFixed(2) }}</span>
        <span class="total-section__label">Total:</span>
        <span class="total-section__price total-section__total-price"
          >${{ cart.total.toFixed(2) }}</span
        >
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.cart-item {
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid var(--color-hr);

  &:last-child {
    border-bottom-width: 5px;
  }
}

.total-section {
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 10px;
  align-items: center;
  justify-items: flex-end;
  position: sticky;
  bottom: 0;
  background: white;
  font-weight: bold;

  &__label {
    font-size: 16px;
  }

  &__price {
    font-size: 28px;
  }

  &__total-price {
    color: var(--color-theme);
  }
}
</style>
