<template>
  <div>
    <h2>Editar</h2>

    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: 'edit',

  mounted () {
    setTimeout(() => {
      this.$store.dispatch('EDIT_ADD', this.$route.params.id)
    }, 1500)
  },

  breadcrumb: {
    getters: 'edit',
    name: 'Editar campanha'
  }
}
</script>
