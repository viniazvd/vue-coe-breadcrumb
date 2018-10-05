<template>
  <div>
    <div class="category">
      Detalhes da campanha: {{ this.$route.params.campaignSlug }}

      <br /><br />

      <button @click="to('nome')">Editar Nome</button>
      <br />
      <button @click="to('endereco')">Editar Endereço</button>
      <br />
      <button @click="to('email')">Editar E-mail</button>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'detail',

  mounted () {
    setTimeout(() => {
      this.$store.dispatch('DETAILS_ADD', this.$route.params.campaignSlug)
    }, 500)
  },

  breadcrumb: {
    getters: 'details',
    name: 'Detalhes da campanha'
  },

  methods: {
    to (type) {
      const route = {
        name: 'Editar campanha',
        params: { id: type }
      }

      this.$router.push(route)
    }
  }
}
</script>
