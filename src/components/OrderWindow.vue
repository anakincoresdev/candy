<template>
  <modal-window
    @close="close"
    form
    class="order-window"
  >
    <div class="order-window__container">
      <template v-if="success">
        <h2 class="order-window__success-title">Ваш заказ принят</h2>
        <span class="order-window__success-desc">Менеджер свяжется с Вами в ближайшее время</span>
        <span class="order-window__success-desc">Хорошего дня!</span>
      </template>
      <template v-else>
        <input
            v-model="email"
            type="text"
            placeholder="Ваш e-mail"
            class="order-window__input"
        >
        <div class="order-window__description">
          На эту почту будут отправлены <br>детали заказа
        </div>
        <input
            v-model="phone"
            @input="phoneInput"
            type="text"
            placeholder="Телефон*"
            class="order-window__input"
        >
        <app-button
            fill
            circle
            @click="send"
            class="order-window__button"
        >
          Заказать
        </app-button>
        <div class="order-window__error">
          {{ error }}
        </div>
      </template>
    </div>
  </modal-window>
</template>

<script>
import ModalWindow from "@/components/ModalWindow.vue";
import AppButton from "@/components/ui/AppButton.vue";

export default {
  name: "order-window",
  components: {
    ModalWindow,
    AppButton,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    package: {
      type: Object,
      required: true,
    },
    total: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      error: null,
      success: false,
    };
  },
  methods: {
    send() {
      if (!this.items.length) {
        this.error = 'Ошибка! Ваш заказ пуст, выберите товары и повторите снова.';
        return;
      }
      if (!this.phone || this.phone.length < 4) {
        this.error = 'Введите достоверный номер телефона';
        return;
      }
      this.error = '';
      this.$store.dispatch('sendOrder', {
        email: this.email,
        phone: this.phone,
        order: {
          items: this.items,
          package: this.package,
          total: this.total,
        },
      })
        .then(response => {
          if (response.status === 200) {
            this.email = '';
            this.phone = '';
            this.error = '';
            this.success = true;
            setTimeout(() => {
              this.close();
            }, 5000)
          }
        });
    },
    phoneInput() {
      this.error = '';
    },
    close() {
      this.success = false;
      this.$emit('close');
    },
  },
}
</script>

<style lang="scss">
  .order-window {
    &__container {
      padding-top: 60px;
    }
    &__input {
      height: 50px;
      padding: 0 10px;
      font-size: 18px;
      //margin-bottom: 20px;
      width: 100%;
      border: 2px solid #5a5a5a;
      border-radius: 4px;
    }
    &__description {
      margin-bottom: 20px;
      margin-top: 5px;
      font-size: 14px;
      color: #5a5a5a;
    }
    &__button {
      margin-top: 20px;
    }
    &__error {
      color: red;
      margin-top: 20px;
      font-size: 18px;
    }
    &__success-title {
      font-size: 22px;
      margin-bottom: 10px;
    }
    &__success-desc {
      font-size: 18px;
      display: flex;
      margin-bottom: 10px;
      text-align: center;
      justify-content: center;
      &:last-child {
        font-size: 22px;
      }
    }
  }
</style>