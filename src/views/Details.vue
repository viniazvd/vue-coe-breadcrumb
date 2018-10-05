<template>
  <div>
    <h3>Details</h3>

    <p>{{ $route.params.campaignSlug }}</p>

    <div class="category">
      <button @click="to('xyz')">Editar</button>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'detail',

  mounted () {
    this.$store.dispatch('DETAILS_ADD', this.$route.params.campaignSlug)
  },

  breadcrumb: {
    getters: 'details',
    name: 'Detalhes da campanha'
  },

  methods: {
    to (id) {
      const route = {
        name: 'Editar campanha',
        params: { id }
      }

      this.$router.push(route)
    }
  }
}
</script>
