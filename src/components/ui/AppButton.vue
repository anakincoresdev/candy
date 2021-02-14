<template>
  <div
    @click="clickHandle($event)"
    :class="{'app-button--circle': circle, 'app-button--active': active, 'app-button--fill': fill}"
    class="app-button"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "app-button",
  props: {
    circle: Boolean,
    active: Boolean,
    fill: Boolean,
  },
  methods: {
    clickHandle(evt) {
      this.$emit('click', evt);
    },
  }
}
</script>

<style lang="scss">
  .app-button {
    background: transparent;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 40px;
    border: 2px solid #BBBBBB;
    color: #A0A0A0;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    user-select: none;

    &--circle {
      border-radius: 50px;
    }

    @media (max-width: 1300px) {
      height: 40px;
      font-size: 16px;
      padding: 0 20px;
    }
  }

  .app-button.app-button--active {
    color: #3A3A3A;
    border: 2px solid #585858;
  }

  .app-button.app-button--fill {
    background: #3C3C3C;
    color: #FFF;
  }
</style>