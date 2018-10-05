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
    this.$store.dispatch('EDIT_ADD', this.$route.params.id)
  },

  breadcrumb: {
    type: 'categories',
    property: 'edit',
    name: 'Editar campanha'
  }
}
</script>
