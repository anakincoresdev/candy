<template>
  <div id="app">
    <app-header />
    <div class="app__content">
      <router-view class="app__page" />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  name: 'app',
  components: {
    AppHeader,
  },
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap');

  * {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  #app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #3A3A3A;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #3A3A3A;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  
  .app {
    &__page {
      background-color: #F2F2F2;
      padding-top: 145px;
    }
  }

  button:focus, input:focus {
    outline: none;
  }
</style>
