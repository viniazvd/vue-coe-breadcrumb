<template>
  <div>
    <h1>categories</h1>
  </div>
</template>

<script>
import crumbSetup from '../lib/support/mixin/crumbSetup'

export default {
  mixins: [ crumbSetup ],

  breadcrumbs: {
    name: 'coeee'
  }
}
</script>
