<template>
  <footer class="app-footer">
    <div class="app-footer__info">
      <div class="app-footer__row">Магазин сладостей «Желаю к чаю»</div>
      <div class="app-footer__row">Тел. 8 (391) 214-21-71</div>
      <div class="app-footer__row">Красноярск, Норильская, 46</div>
      <div class="app-footer__row">ИП  ЦИБУЛЬКО ВИТАЛИЙ ВИКТОРОВИЧ</div>
      <div class="app-footer__row">ОГРНИП: 3 2 0 2 4 6 8 0 0 0 4 4 5 1 4</div>
      <div class="app-footer__row">ИНН  7 5 3 0 0 0 7 4 6 4 9 0</div>
      <div class="app-footer__row">р/сч 40802810831000041429</div>
      <div class="app-footer__row">БИК 040407627</div>
      <div class="app-footer__row">КРАСНОЯРСКОЕ ОТДЕЛЕНИЕ N 8646 ПАО СБЕРБАНК</div>
      <div class="app-footer__row">к/сч 30101810800000000627</div>
    </div>
    <div class="app-footer__map">
      <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A85b0e8b78dc5b833bb61fbe1cc0ae8f0d13e9e933ad0656185d89602daac1dd4&amp;source=constructor"
          width="100%"
          height="303"
          frameborder="0"
      ></iframe>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
}
</script>

<style lang="scss">
  .app-footer {
    padding: 20px 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &__info {
      margin-right: 30px;
    }

    &__row {
      margin: 10px 0;
      font-weight: 300;
      font-size: 14px;
      text-align: right;
    }
    &__map {
      width: 70%;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 20px;

      &__row {
        text-align: center;
        font-size: 14px;
      }
      &__info {
        margin-right: 0;
      }
      &__map {
        width: 100%;
        margin-bottom: 100px;
        margin-top: 20px;
      }
    }
  }
</style>