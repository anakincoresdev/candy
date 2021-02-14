<template>
  <div class="modal-window">
    <div
      :class="{'modal-window__window--form': form}"
      class="modal-window__window"
    >
      <h2
        v-if="title"
        class="modal-window__title"
      >
        {{ title }}
      </h2>
      <div class="modal-window__content">
        <slot />
      </div>
      <button
        @click="close"
        class="modal-window__close"
      >
        Закрыть
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  props: {
    title: {
      type: String,
      default: '',
    },
    form: Boolean,
  },
  methods: {
    close() {
      this.$emit('close');
    },
  }
}
</script>

<style lang="scss">
  .modal-window {
    position: fixed;
    background: rgba(0, 0, 0, .3);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &__window {
      background: #FFF;
      width: 70%;
      min-height: 300px;
      border-radius: 4px;
      padding: 20px 20px 40px;
      position: relative;
      max-height: 95vh;
      overflow-y: auto;
    }

    &__window--form {
      width: 300px;
    }

    &__close {
      color: #3A3A3A;
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
      background: none;
      border: 0;
      font-size: 16px;
      font-weight: 500;
      font-family: Roboto, sans-serif;
      border-bottom: 1px dotted #3A3A3A;
      padding: 0;

      &:hover {
        padding-bottom: 1px;
        border-bottom: 0;
      }
    }

    &__title {
      margin-bottom: 30px;
      font-weight: 300;
      font-size: 22px;
    }

    @media (max-width: 1100px) {
      &__window {
        width: 85%;
      }
    }

    @media (max-width: 600px) {
      &__window {
        height: 100%;
        width: 100%;
        max-height: 100%;
        border-radius: 0;
      }
    }
  }
</style>