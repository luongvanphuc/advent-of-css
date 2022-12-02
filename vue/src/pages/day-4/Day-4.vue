<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue';
import { Rows } from './shared/models/constant';
import Key from './shared/components/Key.vue';

type KeysRef = Array<InstanceType<typeof Key>>;

const key = ref<KeysRef>();
const keys = computed(() => key.value as Array<InstanceType<typeof Key>>);

function handleKeydown(e: KeyboardEvent): void {
  const keyEl = keys.value.find((k) => k.$props.data?.code === e.code);
  keyEl?.jiggle();
}

document.addEventListener('keydown', handleKeydown);

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <div class="wrapper">
    <div
      class="row"
      :class="`row--${index + 1}`"
      :key="index"
      v-for="(row, index) of Rows"
    >
      <Key v-for="key of row" ref="key" :key="key.code" :data="key" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: grid;
  gap: 10px;
  width: 940px;
  padding: 40px;
  margin: 0 auto;
  border-radius: 20px;
  background-color: #f6f6f6;
  text-align: center;
}

.row {
  display: flex;
  gap: 10px;

  &--1 :last-child,
  &--2 :first-child,
  &--3 :first-child,
  &--3 :last-child,
  &--4 :first-child,
  &--4 :last-child {
    flex-grow: 1;
  }
}
</style>
