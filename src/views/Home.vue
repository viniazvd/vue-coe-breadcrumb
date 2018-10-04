<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>
    </div>

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
      <div class="category">
        <h4>Alimentos e Bebidas</h4>
        <button @click="toDetails('alimentos-e-bebidas', '11111')">11111</button>
        <button @click="toDetails('alimentos-e-bebidas', '22222')">22222</button>
        <button @click="toDetails('alimentos-e-bebidas', '33333')">33333</button>
        <button @click="toDetails('alimentos-e-bebidas', '44444')">44444</button>
        <button @click="toDetails('alimentos-e-bebidas', '55555')">55555</button>
      </div>

      <div class="category">
        <h4>Lazer</h4>
        <button @click="toDetails('lazer', '11111')">11111</button>
        <button @click="toDetails('lazer', '22222')">22222</button>
        <button @click="toDetails('lazer', '33333')">33333</button>
        <button @click="toDetails('lazer', '44444')">44444</button>
        <button @click="toDetails('lazer', '55555')">55555</button>
      </div>

      <div class="category">
        <h4>Produtos e Serviços</h4>
        <button @click="toDetails('produtos-e-servicos', '11111')">11111</button>
        <button @click="toDetails('produtos-e-servicos', '22222')">22222</button>
        <button @click="toDetails('produtos-e-servicos', '33333')">33333</button>
        <button @click="toDetails('produtos-e-servicos', '44444')">44444</button>
        <button @click="toDetails('produtos-e-servicos', '55555')">55555</button>
      </div>

      <div class="category">
        <h4>Bem estar e Saúde</h4>
        <button @click="toDetails('bem-estar-e-saude', '11111')">11111</button>
        <button @click="toDetails('bem-estar-e-saude', '22222')">22222</button>
        <button @click="toDetails('bem-estar-e-saude', '33333')">33333</button>
        <button @click="toDetails('bem-estar-e-saude', '44444')">44444</button>
        <button @click="toDetails('bem-estar-e-saude', '55555')">55555</button>
      </div>

      <div class="category">
        <h4>Educação</h4>
        <button @click="toDetails('educacao', '11111')">11111</button>
        <button @click="toDetails('educacao', '22222')">22222</button>
        <button @click="toDetails('educacao', '33333')">33333</button>
        <button @click="toDetails('educacao', '44444')">44444</button>
        <button @click="toDetails('educacao', '55555')">55555</button>
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
        query: { category }
      }

      this.$router.push(route)
    },

    toDetails (category, campaignSlug) {
      const route = {
        name: 'Detalhes da campanha',
        params: { campaignSlug },
        query: { category }
      }

      this.$router.push(route)
    }
  }
}
</script>
