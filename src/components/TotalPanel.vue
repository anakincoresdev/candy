<template>
  <div class="total-panel">
    <container class="total-panel__container">
      <div class="total-panel__main">
        <div class="total-panel__count">
          <div class="total-panel__count-item">
            <span class="total-panel__count-title">Кол-во подарков: </span>
            <controls
                @change="$emit('count-change', $event)"
                small
                class="total-panel__count-controls"
            />
          </div>
          <div class="total-panel__count-item total-panel__count-item--mobile-hide">
            <span class="total-panel__total-item">
              Вес подарка: {{ totalWeight }} г
            </span>
          </div>
          <div class="total-panel__count-item total-panel__count-item--mobile-hide">
            <span class="total-panel__total-item">
              Цена подарка: {{ totalPrice }} ₽
            </span>
          </div>
        </div>
        <div class="total-panel__info">
          <span class="total-panel__total">Итого: </span>
          <span class="total-panel__total-item">
            Позиций: {{ totalCount }}
          </span>
          <!--<span class="total-panel__total-item">Вес: {{ totalWeightFull }} г</span>-->
          <span class="total-panel__total-item">Цена: {{ totalPriceFull }} ₽</span>
          <button
            @click="clearList"
            class="total-panel__drop"
          >
            Сбросить
          </button>
        </div>
      </div>
      <div class="total-panel__buttons">
        <app-button
          circle
          active
          @click="showFullOrder"
          class="total-panel__button"
        >
          Посмотреть заказ
        </app-button>
        <app-button
          fill
          circle
          active
          @click="openOrderWindow"
          class="total-panel__button"
        >
          Заказать
        </app-button>
      </div>
    </container>
  </div>
</template>

<script>
import Container from './Container.vue'
import AppButton from './ui/AppButton.vue'
import TotalInfo from '@/mixins/total-info'
import Controls from './ui/Controls.vue'

export default {
  name: "total-panel",
  components: {
    Container,
    AppButton,
    Controls,
  },
  mixins: [TotalInfo],
  props: {
    items: {
      type: Array,
      required: true,
    },
    packagePrice: {
      type: Number,
      default: 0,
    },
    giftsCount: {
      type: Number,
      required: true,
    },
  },
  methods: {
    clearList() {
      this.$emit('clear');
    },
    showFullOrder() {
      this.$emit('show-order');
    },
    openOrderWindow() {
      this.$emit('open-form');
    },
  },
}
</script>

<style lang="scss">
  .total-panel {
    height: 110px;
    display: flex;
    background: #E2E0DF;

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__main {
      flex: 1;
      margin-right: 20px;
    }

    &__total {
      font-size: 20px;
    }

    &__info {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__count {
      display: none;
      align-items: center;
      margin-bottom: 10px;
    }

    &__count-item {
      display: flex;
      align-items: center;
      margin: 0 10px;
    }

    &__count-title {
      font-size: 20px;
      font-weight: 500;
    }

    &__count-controls {
      margin-left: 30px;
    }

    &__total-item {
      font-weight: 300;
      font-size: 18px;
      white-space: nowrap;
    }

    &__buttons {
      display: flex;
      align-items: center;
    }

    &__button {
      width: 240px;

      &:not(:last-child) {
        margin-right: 20px;
      }
    }

    &__drop {
      font-weight: 500;
      border-bottom: 1px dotted #3A3A3A;
      font-size: 18px;
      background: transparent;
      border-top: 0;
      border-right: 0;
      border-left: 0;
      cursor: pointer;

      &:hover {
        border-bottom: 0;
        padding-bottom: 2px;
      }
    }

    @media (max-width: 1250px) {
      height: 110px;
      &__buttons {
        flex-direction: column;
      }
      &__button {
        &:not(:last-child) {
          margin-right: 0;
          margin-bottom: 5px;
        }
      }
    }

    @media (max-width: 1100px) {
      height: 110px;
      &__buttons {
        flex-direction: column;
      }
      &__button {
        &:not(:last-child) {
          margin-right: 0;
          margin-bottom: 7px;
        }
      }
    }
    @media (max-width: 768px) {
      height: auto;
      &__container {
        flex-direction: column;
      }
      &__total, &__total-item {
        display: none;
      }
      &__count {
        padding-top: 5px;
        width: 100%;
        margin-right: 0;
      }
      &__count-item {
        &--mobile-hide {
          display: none;
        }
      }
      &__main {
        margin-right: 0;
      }
      &__count-title {
        font-size: 16px;
        font-weight: 400;
      }
      &__info {
        justify-content: center;
        margin-bottom: 5px;
      }
      &__drop {
        margin-bottom: 5px;
      }
      &__buttons {
        display: flex;
        flex-direction: row;
        margin-bottom: 5px;
      }
      &__button {
        width: 200px;
        &:not(:last-child) {
          margin-bottom: 0;
          margin-right: 10px;
          flex-wrap: wrap;
        }
      }
    }
    @media (max-width: 440px) {
      &__button {
        &:not(:last-child) {
          margin-right: 0;
          margin-bottom: 10px;
          margin-top: 7px;
        }
      }
      &__buttons {
        flex-direction: column;
      }
      &__count-title {
        font-size: 14px;
        white-space: nowrap;
      }
    }
  }
</style>