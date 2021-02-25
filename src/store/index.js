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
          '1',
          'Пакет-майка',
          'Картон',
          1500,
          'https://vsehoztovari.ru/upload/iblock/e07/e0761d881f857ab1e0528528ca57d17e.jpg',
          2,
        ],
        [
          '2',
          'Крафтовый пакет',
          'Картон',
          1500,
          'https://www.bookvoed.ru/files/1836/73/30/18/0.jpeg',
          50,
        ],
        [
          '3',
          'Подарочная коробка в форме сердца',
          'Картон',
          1500,
          'https://dari-radosti.ru/upload/iblock/bc0/bc04e071883948ed6de748d952e840a6.jpg',
          190,
        ],
        [
          '4',
          'Подарочная коробка',
          'Картон',
          1500,
          'https://m.uvelpak.ru/preview/340x0/content/uvelpak/pics/production/a-8301-67-bordoviy.jpg',
          190,
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
