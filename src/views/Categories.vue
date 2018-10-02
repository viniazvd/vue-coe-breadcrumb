<template>
  <div class="categories">
    <coe-breadcrumb />

    <hr>

    <div class="category">
      <button @click="to('11111')">Category</button>
      <button @click="to('22222')">Category</button>
      <button @click="to('33333')">Category</button>
      <button @click="to('44444')">Category</button>
      <button @click="to('55555')">Category</button>
    </div>

    <router-view />
  </div>
</template>

<script>
import CoeBreadcrumb from '../lib/components/CoeBreadcrumb'

export default {
  name: 'categories',

  components: { CoeBreadcrumb },

  data () {
    return {
      crumb: this.$route.params.label
    }
  },

  methods: {
    to (campaignSlug) {
      const route = {
        name: 'Detalhes da campanha',
        params: { campaignSlug },
        query: { category: 'lazer' }
      }

      this.$router.push(route)
    }
  }
}
</script>
