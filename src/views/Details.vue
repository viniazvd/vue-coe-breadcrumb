<template>
  <div>
    <h3>Details</h3>

    <p>{{ $route.params.campaignSlug }}</p>

    <div class="category">
      <button @click="to('11111')">Editar</button>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'editar',

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
