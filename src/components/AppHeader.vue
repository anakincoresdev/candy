<template>
  <header
    :style="{backgroundImage: 'url(./header-image.png)'}"
    class="app-header"
  >
    <logo class="app-header__logo" />
  </header>
</template>

<script>
import Logo from './Logo.vue';

export default {
  name: "AppHeader",
  components: {
    Logo,
  },
}
</script>

<style lang="scss">
  $MAIN_COLOR: #A3DEFA;

  .app-header {
    //background: repeating-linear-gradient(90deg, $MAIN_COLOR, $MAIN_COLOR 60px, #FFF 60px, #FFF 120px);
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 0;
    height: 250px;
    width: 100%;
    box-shadow: 0 4px 150px rgba(163, 163, 163, 0.2);

    &__logo {
      width: 400px;
      position: absolute;
      bottom: -130px;
      left: calc(50% - 172px);
    }

    @media (max-width: 1300px) {
      height: 200px;
      &__logo {
        bottom: -90px;
        width: 300px;
        left: calc(50% - 122px);
      }
    }
    @media (max-width: 768px) {
      height: 130px;
      &__logo {
        bottom: -60px;
        width: 200px;
        left: calc(50% - 87px);
      }
    }
  }
</style>