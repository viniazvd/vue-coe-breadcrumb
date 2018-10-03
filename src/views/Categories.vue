<template>
  <div class="categories">
    <coe-breadcrumb />

    <hr>

    <h2>Categories</h2>

    <div class="category">
      <button @click="to('11111')">11111</button>
      <button @click="to('22222')">22222</button>
      <button @click="to('33333')">33333</button>
      <button @click="to('44444')">44444</button>
      <button @click="to('55555')">55555</button>
    </div>

    <router-view />
  </div>
</template>

<script>
import CoeBreadcrumb from '../lib/components/CoeBreadcrumb'

export default {
  name: 'categories',

  components: { CoeBreadcrumb },

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
