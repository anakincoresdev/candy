<template>
  <div
    :class="{'table-row--headline': headline}"
    class="table-row"
  >
    <div class="table-row__container">
      <span class="table-row__info table-row__name">
        {{ item.name }}
      </span>
      <span class="table-row__info table-row__num">
        <span v-if="headline || package">{{ item.weight }}</span>
        <span v-else>{{ item.weight * item.count }}</span>
        <span v-if="!headline || package">г</span>
      </span>
      <span class="table-row__info table-row__num">
        {{ item.count }}
      </span>
      <span
        v-if="!headline && !package"
        class="table-row__info table-row__num"
      >
        {{ item.price * item.count }} ₽
      </span>
      <span
        v-else
        class="table-row__info table-row__num"
      >
        {{ item.price }} <span v-if="package">₽</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "list-row",
  props: {
    item: {
      type: Object,
      required: true,
    },
    headline: Boolean,
    package: Boolean,
  },
}
</script>

<style lang="scss">
  .table-row {
    border-bottom: 1px solid #CBCBCB;
    width: 100%;

    &--headline {
      color: #AEAEAE;
    }

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
    }

    &__name {
      width: 55%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-align: left;
    }

    &__num {
      width: 60px;
    }
    @media (max-width: 600px) {
      &__container {
        padding: 10px 0;
      }
    }
  }
</style>