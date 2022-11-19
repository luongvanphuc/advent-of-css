<template>
  <nav>
    <router-link to="/day-1">Day 1</router-link>
    <router-link to="/day-2">Day 2</router-link>
    <router-link to="/day-3">Day 3</router-link>
  </nav>

  <a-drawer
    :visible="visible"
    :closable="false"
    title="Information"
    placement="right"
    @close="closeDrawer"
  >
    <ul class="info-list">
      <li v-for="text of dayInfo" :key="text">
        <span v-html="text"></span>
      </li>
    </ul>
    <hr class="my-4" />
    <ul class="info-list">
      <li v-for="text of appInfo" :key="text">
        <span v-html="text"></span>
      </li>
    </ul>
  </a-drawer>

  <a-button
    class="btn-information"
    type="primary"
    shape="circle"
    @click="showDrawer"
    >?</a-button
  >

  <RouterView />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import _appInfo from './meta/app-info.json';
import type { AppInfo } from './meta/app-info.model';

const visible = ref<boolean>(false);
const route = useRoute();
const path = computed(() => route.path);
const dayInfo = ref<string[]>([]);
const appInfo = ref<string[]>([]);

const closeDrawer = (): void => {
  visible.value = false;
};

const showDrawer = () => {
  const day = path.value?.split('-')[1];

  dayInfo.value = (_appInfo as AppInfo)[`day${day}`]?.info;
  appInfo.value = (_appInfo as AppInfo).app?.info;
  visible.value = true;
};
</script>

<style scoped lang="scss">
nav {
  text-align: center;
  padding: 30px;
  user-select: none;

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--c-border);
    color: var(--c-text);

    &.router-link-exact-active {
      color: var(--c-theme);
    }

    &:first-of-type {
      border: 0;
    }
  }
}

.btn-information {
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 15px;
  z-index: 999;
}

.info-list {
  list-style-type: disc;
  padding-left: 15px;

  :deep(strong) {
    color: var(--c-theme);
  }
}
</style>
