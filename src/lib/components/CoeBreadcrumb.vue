<template>
  <div class="coe-breadcrumb">
    <h3>vue coe breadcrumb</h3>
    <ul v-if="crumbs.length">
      <li
        v-for="(crumb, index) in crumbs"
        :key="index"
        :class="['crumb', { '-active': isActive(crumb) }]"
        @click="to(index)"
      >
        {{ crumb.nivel }} | {{ crumb.name }} | {{ crumb.path }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'coe-breadcrumb',

  data () {
    return {
      breadcrumbs: []
    }
  },

  watch: {
    '$route': {
      handler: 'syncRoutes',
      immediate: true
    }
  },

  computed: {
    ...mapGetters(['crumbs', 'lastNivel']),

    currentNivel () {
      return this.$route.meta && this.$route.meta.crumb && this.$route.meta.crumb.nivel
    }
  },

  methods: {
    ...mapActions(['BREADCRUMB_ADD', 'BREADCRUMB_REMOVE']),

    isActive (crumb) {
      return crumb['nivel'] === this.lastNivel
    },

    syncRoutes () {
      if (!this.crumbs.length) {
        this.BREADCRUMB_ADD(this.$route.meta.crumb)
        return true
      }

      if (this.lastNivel < this.currentNivel) {
        this.BREADCRUMB_ADD(this.$route.meta.crumb)
      } else {
        this.BREADCRUMB_REMOVE(this.currentNivel)
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
