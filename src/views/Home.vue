<template>
  <div>
    <h2>Categorias</h2>
    <div class="categories">
      <button @click="toCategory('alimentos-e-bebidas')">Alimentos e Bebidas</button>
      <button @click="toCategory('lazer')">Lazer</button>
      <button @click="toCategory('produtos-e-servicos')">Produtos e Serviços</button>
      <button @click="toCategory('bem-estar-e-saude')">Bem estar e Saúde</button>
      <button @click="toCategory('educacao')">Educação</button>
    </div>

    <hr>

    <div class="list">
      <h2>Detalhes</h2>
      <div class="category">
        <button @click="toDetails('alimentos-e-bebidas', '11111')">Alimentos e Bebidas</button>
        <button @click="toDetails('alimentos-e-bebidas', '22222')">Alimentos e Bebidas</button>
        <button @click="toDetails('alimentos-e-bebidas', '33333')">Alimentos e Bebidas</button>
        <button @click="toDetails('alimentos-e-bebidas', '44444')">Alimentos e Bebidas</button>
        <button @click="toDetails('alimentos-e-bebidas', '55555')">Alimentos e Bebidas</button>
      </div>

      <div class="category">
        <button @click="toDetails('lazer', '11111')">Lazer</button>
        <button @click="toDetails('lazer', '22222')">Lazer</button>
        <button @click="toDetails('lazer', '33333')">Lazer</button>
        <button @click="toDetails('lazer', '44444')">Lazer</button>
        <button @click="toDetails('lazer', '55555')">Lazer</button>
      </div>

      <div class="category">
        <button @click="toDetails('produtos-e-servicos', '11111')">Produtos e Serviços</button>
        <button @click="toDetails('produtos-e-servicos', '22222')">Produtos e Serviços</button>
        <button @click="toDetails('produtos-e-servicos', '33333')">Produtos e Serviços</button>
        <button @click="toDetails('produtos-e-servicos', '44444')">Produtos e Serviços</button>
        <button @click="toDetails('produtos-e-servicos', '55555')">Produtos e Serviços</button>
      </div>

      <div class="category">
        <button @click="toDetails('bem-estar-e-saude', '11111')">Bem estar e Saúde</button>
        <button @click="toDetails('bem-estar-e-saude', '22222')">Bem estar e Saúde</button>
        <button @click="toDetails('bem-estar-e-saude', '33333')">PBem estar e Saúde</button>
        <button @click="toDetails('bem-estar-e-saude', '44444')">Bem estar e Saúde</button>
        <button @click="toDetails('bem-estar-e-saude', '55555')">Bem estar e Saúde</button>
      </div>

      <div class="category">
        <button @click="toDetails('educacao', '11111')">Educação</button>
        <button @click="toDetails('educacao', '22222')">Educação</button>
        <button @click="toDetails('educacao', '33333')">Educação</button>
        <button @click="toDetails('educacao', '44444')">Educação</button>
        <button @click="toDetails('educacao', '55555')">Educação</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

  methods: {
    toCategory (category) {
      const route = {
        name: 'Campanhas',
        params: { category, label: category },
        query: { category }
      }

      this.$router.push(route)
    },

    toDetails (category, campaignSlug) {
      const route = {
        name: 'Detalhes da campanha',
        params: { campaignSlug, label: campaignSlug },
        query: { category }
      }

      this.$router.push(route)
    }
  }
}
</script>
