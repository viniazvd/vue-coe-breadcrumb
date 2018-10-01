<template>
  <div>
    <h1>home</h1>

    <router-link to="/details">Details</router-link>
  </div>
</template>

<script>
import crumbSetup from '../lib/support/mixin/crumbSetup'

export default {
  name: 'home',

  mixins: [ crumbSetup ],

  breadcrumb: {
    Detalhes: {
      untilLast: [
        {
          nivel: 2,
          name: 'Categorias',
          path: '/category'
        }
      ]
    }
  }
}
</script>
