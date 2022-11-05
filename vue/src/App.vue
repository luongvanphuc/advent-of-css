<template>
  <nav>
    <router-link to="/">Day 1</router-link>
    <router-link to="/day-2">Day 2</router-link>
  </nav>

  <RouterView />
</template>

<style scoped lang="scss">
nav {
  text-align: center;
  padding: 30px;

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
</style>
