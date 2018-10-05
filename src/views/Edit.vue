<template>
  <div>
    <h2>Editar</h2>

    <p>Input para editar o: {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: 'edit',

  mounted () {
    setTimeout(() => {
      this.$store.dispatch('EDIT_ADD', this.$route.params.id)
    }, 500)
  },

  breadcrumb: {
    getters: 'edit',
    name: 'Editar campanha'
  }
}
</script>
