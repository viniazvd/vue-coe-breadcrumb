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

  hasCrumb: true,

  methods: {
    to (id) {
      const route = {
        // path: ':id',
        label: id,
        name: 'Editar campanha',
        params: { id }
      }

      this.$router.push(route)
      // this.$breadcrumb.add(route)
    }
  }
}
</script>
