<template>
  <div
    :class="{'controls--small': small}"
    class="controls"
  >
    <div class="controls__container">
      <button
        @click.stop="decrementValue"
        class="controls__button controls__button--minus"
      >
        -
      </button>
      <div class="controls__value">
        {{ value }} шт
      </div>
      <button
        @click.stop="incrementValue"
        class="controls__button controls__button--minus"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "controls",
  props: {
    small: Boolean,
  },
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    incrementValue() {
      this.value += 1;
      this.$emit('change', this.value);
    },
    decrementValue() {
      if ((this.small && this.value > 1) || (this.value > 0 && !this.small)) {
        this.value -= 1;
        this.$emit('change', this.value);
      }
    },
  },
  mounted() {
    if (this.small) this.value = 1;
  },
}
</script>

<style lang="scss">
  .controls {
    &__container {
      display: flex;
      align-items: center;
      min-height: 50px;
    }

    &__button {
      background: transparent;
      border-radius: 50%;
      border: 2px solid #EFEFEF;
      color: #7C7C7C;
      cursor: pointer;
      width: 50px;
      height: 50px;
      max-width: 50px;
      max-height: 50px;
      min-width: 50px;
      min-height: 50px;
      font-size: 20px;
      font-weight: 100;
      padding: 0;
      user-select: none;
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-appearance: none;
      -moz-appearance:none;
    }

    &__value {
      font-size: 22px;
      margin: 0 20px;
      font-weight: 300;
      min-width: 78px;
    }

    &--small &__button {
      width: 30px;
      height: 30px;
      max-width: 30px;
      max-height: 30px;
      min-width: 30px;
      min-height: 30px;
      background: #FFF;
      border-color: #A0A0A0;
    }

    &--small &__value {
      margin: 0 8px;
      font-size: 18px;
      min-width: 60px;
    }

    @media (max-width: 1300px) {
      &__button {
        width: 40px;
        height: 40px;
        min-width: 40px;
        min-height: 40px;
        max-width: 40px;
        max-height: 40px;
      }

      &__value {
        font-size: 18px;
        min-width: 60px;
        margin: 0 10px;
      }
    }
  }

</style>