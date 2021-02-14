<template>
  <div class="list-item">
    <div class="list-item__container">
      <div
        :style="{backgroundImage: `url(${item[4]})`}"
        class="list-item__image-container"
      />
      <div class="list-item__title">
        {{ item[1] }}
      </div>
      <template v-if="package">
        <div class="list-item__weight">
          {{ item[2] }}
        </div>
        <div class="list-item__weight">
          Объем: {{ item[3] }} г
        </div>
        <checkbox
          :value="selected"
          @input="select"
          class="list-item__check"
        >
          <span class="list-item__price list-item__price--package">
            {{ item[5] }} ₽
          </span>
        </checkbox>
      </template>
      <template v-else>
        <div class="list-item__weight">
          {{ item[2] }} г/шт
        </div>
        <div class="list-item__price">
          {{ item[3] }} ₽/шт
        </div>
        <controls @change="changed" />
      </template>
    </div>
  </div>
</template>

<script>
import Controls from './ui/Controls.vue'
import Checkbox from './ui/Checkbox.vue'

export default {
  name: "list-item",
  components: {
    Controls,
    Checkbox,
  },
  props: {
    item: {
      type: Array,
      required: true,
    },
    selected: Boolean,
    package: Boolean,
  },
  methods: {
    changed(value) {
      this.$emit('changed', value);
    },
    select(value) {
      this.$emit('select', value);
    },
  }
}
</script>

<style lang="scss">
  .list-item {
    padding: 10px 40px;
    background: #FFF;
    border-radius: 30px;
    width: 100%;
    box-shadow: 0 4px 20px rgba(155, 155, 155, 0.1);
    color: #3A3A3A;

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__image-container {
      height: 120px;
      width: 150px;
      background-size: contain;
      background-position: 50% 50%;
      background-repeat: no-repeat;
    }

    &__image {
      height: 100%;
    }

    &__title {
      font-size: 24px;
      line-height: 1.4;
      font-weight: 300;
      width: 400px;
      text-align: left;
    }

    &__weight {
      color: #AEAEAE;
      font-size: 20px;
      font-weight: 300;
      white-space: nowrap;
    }

    &__price {
      color: #3A3A3A;
      font-size: 20px;
      font-weight: 300;
      width: 60px;
      text-align: left;
      white-space: nowrap;

      &--package {
        font-size: 22px;
      }
    }

    &__check {
      margin-right: 30px;
    }

    @media (max-width: 1300px) {
      padding: 10px 20px;

      &__title {
        font-size: 20px;
        width: 300px;
      }

      &__weight, &__price {
        font-size: 18px;
      }

      &__check {
        margin-right: 0;
      }
    }

    @media (max-width: 1100px) {
      &__title {
        width: 230px;
      }
    }

    @media (max-width: 900px) {
      &__title {
        width: 200px;
        font-size: 18px;
      }
      &__weight, &__price {
        font-size: 16px;
      }
    }

    @media (max-width: 768px) {
      padding: 20px;
      &__container {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      &__title {
        width: 100%;
        font-size: 20px;
        text-align: center;
        margin-bottom: 10px;
      }
      &__image-container {
        width: 250px;
        height: 180px;
        margin-bottom: 10px;
      }

    }
    @media (max-width: 768px) {
      &__price {
        width: auto;
        margin-top: 10px;
        margin-bottom: 5px;
        display: flex;
      }
    }
  }
</style>