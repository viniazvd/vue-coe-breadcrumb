<template>
  <div>
    <div class="list">
      <h2>Lista de campanhas</h2>

      <div class="category">
        <h4>Alimentos e Bebidas</h4>
        <button @click="toCategories('Alimentos e Bebidas', '11111')">11111</button>
        <button @click="toCategories('Alimentos e Bebidas', '22222')">22222</button>
        <button @click="toCategories('Alimentos e Bebidas', '33333')">33333</button>
        <button @click="toCategories('Alimentos e Bebidas', '44444')">44444</button>
        <button @click="toCategories('Alimentos e Bebidas', '55555')">55555</button>
      </div>

      <div class="category">
        <h4>Lazer</h4>
        <button @click="toCategories('Lazer', '11111')">11111</button>
        <button @click="toCategories('Lazer', '22222')">22222</button>
        <button @click="toCategories('Lazer', '33333')">33333</button>
        <button @click="toCategories('Lazer', '44444')">44444</button>
        <button @click="toCategories('Lazer', '55555')">55555</button>
      </div>

      <div class="category">
        <h4>Produtos e Serviços</h4>
        <button @click="toCategories('Produtos e Serviços', '11111')">11111</button>
        <button @click="toCategories('Produtos e Serviços', '22222')">22222</button>
        <button @click="toCategories('Produtos e Serviços', '33333')">33333</button>
        <button @click="toCategories('Produtos e Serviços', '44444')">44444</button>
        <button @click="toCategories('Produtos e Serviços', '55555')">55555</button>
      </div>

      <div class="category">
        <h4>Bem estar e Saúde</h4>
        <button @click="toCategories('Bem estar e Saúde', '11111')">11111</button>
        <button @click="toCategories('Bem estar e Saúde', '22222')">22222</button>
        <button @click="toCategories('Bem estar e Saúde', '33333')">33333</button>
        <button @click="toCategories('Bem estar e Saúde', '44444')">44444</button>
        <button @click="toCategories('Bem estar e Saúde', '55555')">55555</button>
      </div>

      <div class="category">
        <h4>Educação</h4>
        <button @click="toCategories('Educação', '11111')">11111</button>
        <button @click="toCategories('Educação', '22222')">22222</button>
        <button @click="toCategories('Educação', '33333')">33333</button>
        <button @click="toCategories('Educação', '44444')">44444</button>
        <button @click="toCategories('Educação', '55555')">55555</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

  methods: {
    toCategories (category, campaignSlug) {
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
