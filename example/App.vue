<template>
  <div id="app">
    <router-link to="/">Home</router-link>

    <h2>Categorias</h2>

    <div class="categories">
      <button @click="toCategory('Alimentos e Bebidas')">Batatas e Bebidas</button>
      <button @click="toCategory('Lazer')">Lazer</button>
      <button @click="toCategory('Produtos e Serviços')">Produtos e Serviços</button>
      <button @click="toCategory('Bem estar e Saúde')">Bem estar e Saúde</button>
      <button @click="toCategory('Educação')">Educação</button>
    </div>

    <hr>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',

  methods: {
    toCategory (category) {
      // console.log('toCategory')
      const route = {
        name: 'Campanhas',
        query: { category }
      }

      this.$router.push(route)
    }
  }
}
</script>
