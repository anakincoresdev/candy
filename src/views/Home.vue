<template>
  <div class="home">
    <container>
      <div class="home__headline">
        <h1 class="home__title"></h1>
        <div class="home__headline-buttons">
          <app-button
            @click="showGoods"
            :active="tab === 'goods'"
            class="home__headline-button"
          >
            Товары
          </app-button>
          <app-button
            @click="showPackages"
            :active="tab === 'packages'"
            class="home__headline-button"
          >
            Упаковка
          </app-button>
        </div>
      </div>
      <div
        v-if="chocolate.length === 0"
        class="home__preloader"
      >
        <svg class="home__preloader-svg" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
            <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
              <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="1s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite" />
          </path>
        </svg>
      </div>
      <div
        v-else
        class="home__list"
      >
        <template v-if="tab === 'goods'">
          <template v-for="item of chocolate">
            <div
                v-if="isTitle(item[0])"
                class="home__category"
            >
              <div class="home__category-line" />
              <h3 class="home__category-title">
                {{ item[1] }}
              </h3>
              <div class="home__category-line" />
            </div>
            <list-item
              v-else-if="item[1]"
              :item="item"
              @changed="addItem($event, item)"
              class="home__list-item"
            />
          </template>
        </template>
        <template v-else-if="tab === 'packages'">
          <div class="home__category">
            <div class="home__category-line" />
            <h3 class="home__category-title">
              Подарочные упаковки
            </h3>
            <div class="home__category-line" />
          </div>
          <list-item
            v-for="(item, i) of packages"
            :item="item"
            :selected="packageSelected === i"
            @select="selectPackage(i)"
            package
            class="home__list-item"
          />
        </template>
      </div>
      <total-panel
        :items="items"
        :package-price="packages[packageSelected][5]"
        :gifts-count="giftsCount"
        @clear="clearList"
        @show-order="fullOrderShowed = true"
        @open-form="isOrderWindowOpened = true"
        @count-change="changeGiftsCount"
        class="home__total-panel"
      />
    </container>
    <app-footer />
    <modal-window
      v-if="fullOrderShowed"
      title="Ваш заказ"
      @close="fullOrderShowed = false"
    >
      <h3
        v-if="!items.length"
        class="home__order-empty"
      >
        Сейчас здесь пусто, добавьте что-нибудь из ассортимента
      </h3>
      <div
        v-else
        class="home__modal-list"
      >
        <list-row
          :item="orderHeadline"
          headline
        />
        <list-row
          v-for="item of items"
          :item="item"
          class="home__modal-item"
        />
        <h2 class="home__modal-title">Упаковка</h2>
        <list-row
          :item="packageHeadline"
          headline
          class="home__modal-headline"
        />
        <list-row
          :item="packageObj"
          package
          class="home__modal-package"
        />
        <div class="home__modal-footer">
          <h4 class="home__modal-title home__modal-total-title">Итого</h4>
          <div class="home__modal-total">
            <span class="home__modal-info">Позиций: {{ totalCount }}</span>
            <span class="home__modal-info">Вес: {{ totalWeight }} г</span>
            <span class="home__modal-info">Цена за подарок: {{ totalPrice }} ₽</span>
          </div>
          <div class="home__modal-total">
            <span class="home__modal-info">Подарков: {{ giftsCount }}</span>
            <span class="home__modal-info">Общий вес: {{ totalWeightFull }} г</span>
            <span class="home__modal-info">Общая цена: {{ totalPriceFull }} ₽</span>
          </div>
        </div>
      </div>
    </modal-window>
    <order-window
      v-if="isOrderWindowOpened"
      :items="items"
      :package="packageObj"
      :total="{totalPrice, totalWeight, totalPriceFull, totalWeightFull, giftsCount}"
      @close="isOrderWindowOpened = false"
    />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Container from '@/components/Container.vue'
import AppButton from '@/components/ui/AppButton.vue'
import ListItem from '@/components/ListItem.vue'
import TotalPanel from '@/components/TotalPanel.vue'
import ModalWindow from '@/components/ModalWindow.vue'
import ListRow from '@/components/ListRow.vue'
import OrderWindow from '@/components/OrderWindow.vue'
import TotalInfo from '@/mixins/total-info'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Container,
    AppButton,
    ListItem,
    TotalPanel,
    ModalWindow,
    ListRow,
    OrderWindow,
    AppFooter,
  },
  mixins: [TotalInfo],
  data() {
    return {
      items: [],
      packageSelected: 0,
      tab: 'goods',
      fullOrderShowed: false,
      isOrderWindowOpened: false,
      giftsCount: 1,
      orderHeadline: {
        name: 'Наименование',
        count: 'Кол-во',
        price: 'Цена',
        weight: 'Вес',
      },
      packageHeadline: {
        name: 'Наименование',
        count: 'Материал',
        price: 'Цена',
        weight: 'Объем',
      },
    };
  },
  computed: {
    chocolate() {
      return this.$store.state.chocolate.list;
    },
    packages() {
      return this.$store.state.packages.list;
    },
    packageObj() {
      const item = this.packages[this.packageSelected];
      return {
        name: item[1],
        weight: item[3],
        count: item[2],
        price: item[5],
        code: item[0],
      };
    },
    packagePrice() {
      return this.packageObj.price;
    }
  },
  mounted() {
    this.$store.dispatch('getChocolate');
  },
  methods: {
    isTitle(title) {
      return String(title).toLowerCase() === 'заголовок';
    },
    selectPackage(index) {
      this.packageSelected = index;
    },
    changeGiftsCount(value) {
      this.giftsCount = value;
    },
    addItem(count, data) {
      const item = {
        name: data[1],
        weight: data[2],
        price: data[3],
        count,
      };

      const itemIndex = this.items.findIndex(product => {
        return product.name === item.name;
      });

      if (count === 0 && itemIndex !== -1) {
        this.items.splice(itemIndex, 1);
      } else if (count === 0) {
        return;
      }

      if (itemIndex === -1) {
        this.items.push(item);
      } else {
        this.items[itemIndex].count = item.count;
      }
    },
    clearList() {
      this.items = [];
    },
    showGoods() {
      this.tab = 'goods';
    },
    showPackages() {
      this.tab = 'packages';
    },
  },
}
</script>

<style lang="scss">
  .home {
    padding-bottom: 120px;
    min-height: 90vh;

    &__headline {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 45px;
    }

    &__total-panel {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
    }

    &__headline-buttons {
      display: flex;
      align-items: center;
    }

    &__headline-button {
      &:not(:last-child) {
        margin-right: 10px;
      }
    }

    &__preloader {
      padding: 100px 0 150px;
    }

    &__preloader-svg {
      fill: orange;
      opacity: .6;
      width: 150px;
    }

    &__title {
      font-size: 38px;
      font-weight: 700;
    }

    &__category {
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-weight: 300;
      margin-top: 30px;
      margin-bottom: 40px;
    }

    &__category-line {
      width: 50%;
      height: 1px;
      background: #5A5A5A;
    }

    &__category-title {
      margin: 0 20px;
      font-size: 28px;
      font-weight: 300;
      white-space: nowrap;
    }

    &__list-item {
      margin-bottom: 15px;
    }

    &__order-empty {
      font-size: 20px;
      font-weight: 300;
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__modal-item {
      margin-bottom: 10px;
    }

    &__modal-title {
      font-size: 22px;
      font-weight: 300;
      margin: 30px 0 20px;
    }

    &__modal-total {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin: 10px;

      &-title {
        border-bottom: 1px solid #CBCBCB;
        padding-bottom: 20px;
        margin-bottom: 20px;
      }
    }

    &__modal-info {
      display: flex;
      margin: 0 20px 10px;
      width: 250px;
      justify-content: center;
      white-space: nowrap;
      font-size: 24px;
      font-weight: 300;
      color: #3A3A3A;
    }

    @media (max-width: 1300px) {
      &__title {
        font-size: 30px;
      }
      &.app__page {
        padding-top: 120px;
      }
      &__list-item {
        margin-bottom: 12px;
      }
      &__category-title {
        font-size: 24px;
      }
    }
    @media (max-width: 768px) {
      &__title {
        font-size: 21px;
      }
      &.app__page {
        padding-top: 80px;
      }
      &__headline {
        flex-direction: column;
      }
      &__headline-buttons {
        margin-top: 20px;
      }
      &__title {
        font-size: 24px;
      }
      &__category-title {
        font-size: 20px;
        margin: 0 10px;
      }
      &__modal-info {
        font-size: 16px;
        margin: 0 10px 5px;
        white-space: nowrap;
      }
    }
 }
</style>