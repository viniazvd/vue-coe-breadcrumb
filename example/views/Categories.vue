<template>
  <div class="categories">
    <coe-breadcrumb />

    <hr>

    <div class="category">
      <h2>Campanhas da categoria</h2>

      <button @click="to('11111')">11111</button>
      <button @click="to('22222')">22222</button>
      <button @click="to('33333')">33333</button>
      <button @click="to('44444')">44444</button>
      <button @click="to('55555')">55555</button>
    </div>

    <br /><br />

    <router-view />
  </div>
</template>

<script>
import CoeBreadcrumb from '../lib/components/CoeBreadcrumb'

export default {
  name: 'categories',

  components: { CoeBreadcrumb },

  mounted () {
    setTimeout(() => {
      this.$store.dispatch('CATEGORY_ADD', this.$route.query.category)
    }, 500)
  },

  breadcrumb: {
    getters: 'category',
    name: 'Campanhas'
  },

  methods: {
    to (campaignSlug) {
      const route = {
        name: 'Detalhes da campanha',
        params: { campaignSlug }
      }

      this.$router.push(route)
    }
  }
}
</script>
