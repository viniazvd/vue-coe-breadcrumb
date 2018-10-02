<template>
  <div>
    <button @click="gaps">Details</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'home',

  methods: {
    ...mapActions(['BREADCRUMB_ADD']),

    gaps () {
      const crumbs = [
        {
          nivel: 2,
          name: 'Categorias',
          path: '/category'
        },
        {
          nivel: 3,
          name: 'Detalhes',
          path: '/details'
        }
      ]

      this.BREADCRUMB_ADD(crumbs)
    }
  }
}
</script>
