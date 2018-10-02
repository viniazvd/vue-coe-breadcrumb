<template>
  <div class="categories">
    <coe-breadcrumb />

    <hr>

    <h2>Categories</h2>

    <div class="category">
      <button @click="to('11111')">Category</button>
      <button @click="to('22222')">Category</button>
      <button @click="to('33333')">Category</button>
      <button @click="to('44444')">Category</button>
      <button @click="to('55555')">Category</button>
    </div>

    <!-- <router-view /> -->
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
        params: { campaignSlug },
        query: { category: 'lazer' }
      }

      this.$breadcrumb.add(campaignSlug)
      this.$router.push(route)
    }
  }
}
</script>
