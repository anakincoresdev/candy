import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chocolate: {
      list: [],
    },
    packages: {
      list: [
        [
          '15010455',
          'Новогодняя упаковка «Избушка символ»',
          'Картон',
          1500,
          'https://fiestamarket.ru/img/0/1/7478.jpg',
          35,
        ],
        [
          '15010535',
          'Подарочная упаковка «Избушка гномики»',
          'Картон',
          1500,
          'https://fiestamarket.ru/img/0/1/6178.jpg',
          35,
        ],
        [
          '15010567',
          'Подарочная упаковка «Вьюга»',
          'Картон',
          1000,
          'https://fiestamarket.ru/img/0/1/6133.jpg',
          35,
        ],
        [
          '15010565',
          'Новогодняя упаковка «Открытка»',
          'Картон',
          1000,
          'https://fiestamarket.ru/img/0/1/7956.jpg',
          35,
        ],
        [
          '15010554',
          'Новогодняя упаковка «Бык»',
          'Картон',
          1000,
          'https://fiestamarket.ru/img/1/1/15010554.jpg',
          35,
        ],
        [
          '15100102',
          'Подарочные тубы «Ретро»',
          'Картон',
          1000,
          'https://fiestamarket.ru/img/1/1/15100102.jpg',
          150,
        ],
        [
          '15100103',
          'Подарочные тубы «Зима»',
          'Картон',
          1000,
          'https://fiestamarket.ru/img/1/1/15100103.jpg',
          150,
        ],
        [
          '15010391',
          'Подарочная упаковка «Снегурочка 0.8»',
          'Картон',
          800,
          'https://fiestamarket.ru/img/0/1/6238.jpg',
          35,
        ],
        [
          '15010392',
          'Подарочная упаковка «Дед мороз 0.8»',
          'Картон',
          800,
          'https://fiestamarket.ru/img/0/1/6195.jpg',
          35,
        ],
      ],
    },
  },
  mutations: {
    setList: (state, {list, name}) => {
      Vue.set(state[name], 'list', list);
    },
  },
  actions: {
    getChocolate: ({commit}) => {
      return axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=7rF9uGXCerK-Y6fmNWLcoaXcGJQuxEfOQSUKHX0sexy7sveRaJ2vK774mpJfbBHOMRioFzn0SdsiGG-56nZDWX0ApLNM1-Lvm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnN_BQqIj5WLIxAHNRRalQfaQu0tB879BQtaMdDr6TpiNL2wXn7HjYzX4waEJw5asYDnczjg0-cAR&lib=MsyTtMcNWutgtcjvKFtIlULZE41Zi1qzU')
        .then(response => {
          if (response.status === 200) {
            commit('setList', {list: response.data.result, name: 'chocolate'});
          }
        });
    },
    sendOrder({commit}, data) {
      return axios.post('mail.php', data);
    },
  },
})
