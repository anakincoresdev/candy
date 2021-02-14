<template>
  <label class="checkbox">
    <input
      :value="value"
      @change="change"
      type="checkbox"
      class="checkbox__input"
    />
    <div class="checkbox__check">
      <svg
        v-show="value"
        class="checkbox__check-mark"
        width="39"
        height="33"
        viewBox="0 0 39 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.4348 33C12.4348 33 11.3043 31.5217 11.3043 30.7826C8.47826 27.087 4.52174 22.6522 1.69565 19.6957C0.565217 18.9565 0 18.2174 0 16.7391C0 15.2609 2.82609 14.5217 3.95652 14.5217C4.52174 14.5217 4.52174 14.5217 5.08696 14.5217C6.21739 15.2609 6.78261 16.7391 7.91304 18.2174C9.6087 20.4348 11.8696 23.3913 14.1304 25.6087C16.9565 22.6522 31.6522 3.43478 34.4783 -1H35.0435C36.1739 -1 38.4348 -0.26087 38.4348 1.95652C38.4348 2.69565 37.3043 3.43478 36.7391 3.43478C36.1739 4.91304 18.087 28.5652 17.5217 30.0435C16.9565 30.7826 16.9565 31.5217 16.3913 32.2609C15.2609 33 13.5652 33 12.4348 33Z" fill="orange"/>
      </svg>
    </div>
    <slot />
  </label>
</template>

<script>
export default {
  name: "checkbox",
  props: {
    value: Boolean,
  },
  methods: {
    change(evt) {
      this.value = evt.target.value;
      this.$emit('input', this.value);
    }
  }
}
</script>

<style lang="scss">
  .checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;

    &__input {
      display: none;
    }

    &__check {
      margin-right: 20px;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      border: 2px solid #EFEFEF;
    }

    &__check-mark {
      width: 29px;
      margin-top: -7px;
      margin-left: 2px;
      opacity: .6;
    }
  }
</style>