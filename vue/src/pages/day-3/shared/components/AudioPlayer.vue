<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  file: String,
});
const audioUrl = new URL(`../audio/${props.file}`, import.meta.url).href;
const audio = ref<HTMLAudioElement>();

const play = (): void => {
  const player = audio.value;

  if (!player) {
    return;
  }

  if (!player.paused) {
    player.pause();
    player.currentTime = 0;
  }

  player.play();
};

defineExpose({
  play,
});
</script>

<template>
  <audio ref="audio">
    <source :src="audioUrl" type="audio/mpeg" />
  </audio>
</template>
