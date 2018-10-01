<template>
  <div class="coe-breadcrumb">
    <h3>vue coe breadcrumb</h3>
    <ul v-if="breadcrumbs.length">
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        :class="['crumb', { '-active': crumb.nivel === currentNivel }]"
        @click="to(index)"
      >
        {{ crumb.nivel }} | {{ crumb.name }} | {{ crumb.path }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'coe-breadcrumb',

  data () {
    return {
      breadcrumbs: []
    }
  },

  watch: { '$route': 'syncRoutes' },

  mounted () { this.syncRoutes() },

  computed: {
    currentNivel () {
      return this.$route.meta && this.$route.meta.crumb && this.$route.meta.crumb.nivel
    },

    lastNivel () {
      const length = this.breadcrumbs.length

      return length && this.breadcrumbs[length - 1].nivel
    }
  },

  methods: {
    syncRoutes () {
      const length = this.breadcrumbs.length

      if (!length) {
        this.breadcrumbs = [ ...this.breadcrumbs, this.$route.meta.crumb ]
        return true
      }

      if (this.lastNivel < this.currentNivel) {
        this.breadcrumbs = [ ...this.breadcrumbs, this.$route.meta.crumb ]
      } else {
        this.breadcrumbs = this.breadcrumbs.filter(crumb => crumb.nivel <= this.currentNivel)
      }
    },

    to (index) {
      if (this.breadcrumbs[index].path) this.$router.push(this.breadcrumbs[index].path)
    }
  }
}
</script>

<style>
.coe-breadcrumb {}

.crumb { list-style-type: none; }

.-active { color: red }
</style>
