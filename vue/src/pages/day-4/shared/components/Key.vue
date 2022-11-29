<script setup lang="ts">
import { ref } from 'vue';
import { Key } from '../models/model';

defineProps({
  data: Key,
});

const key = ref<HTMLElement>();

const jiggle = (): void => {
  const keyEl = key.value as HTMLElement;

  keyEl.classList.add('jiggling');

  setTimeout(() => {
    keyEl.classList.remove('jiggling');
  }, 500);
};

defineExpose({
  jiggle,
});
</script>

<template>
  <span class="key" ref="key" :style="{ color: data?.color }" @click="jiggle()">
    {{ data?.char }}
  </span>
</template>

<style scoped lang="scss">
.key {
  display: inline-block;
  text-align: center;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 12px;
  background-color: #fff;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 0 6px 0 rgb(100 100 100 / 10%);
  user-select: none;
  cursor: pointer;

  &.jiggling {
    animation: shake 0.5s;
  }
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
