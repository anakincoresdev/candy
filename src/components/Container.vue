<template>
  <div class="app-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "container"
}
</script>

<style lang="scss">
  .app-container {
    padding: 0 80px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1300px) {
      padding: 0 40px;
    }

    @media (max-width: 900px) {
      padding: 0 15px;
    }
  }
</style>