<template>
  <div>
    <span>single layout</span>
    <AppNavigation />
    <hr>
    <nuxt />
    <nuxt-link to="/">トップページへ戻る</nuxt-link>
    <hr>
    <footer>
      footer
    </footer>
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation';

export default {
  components: {
    AppNavigation,
  },
};
</script>
