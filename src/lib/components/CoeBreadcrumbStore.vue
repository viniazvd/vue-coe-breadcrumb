<template>
  <div class="coe-breadcrumb">
    <slot name="crumbs" :crumbs="$breadcrumb.crumbs()">
      <ul v-if="$breadcrumb.crumbs().length" class="breadcrumbs">
        <li
          v-for="(crumb, index) in $breadcrumb.crumbs()"
          :key="index"
          class="crumb"
        >
          <router-link
            exact
            :class="['button', { '-active': isActive(crumb) }]"
            :to="redirect(crumb)"
          >
            {{ crumb.name }}
          </router-link>
        </li>
      </ul>

      <span v-else>coe, não tem crumbs</span>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'coe-breadcrumb',

  watch: {
    '$route': {
      handler: function () {
        this.$breadcrumb.syncNivel(this.$route.meta && this.$route.meta.crumb && this.$route.meta.crumb.nivel)
        this.syncRoutes()
      },
      immediate: true
    }
  },

  methods: {
    isActive (crumb) {
      if (!crumb) return false

      return crumb['nivel'] === this.$breadcrumb.lastNivel()
    },

    syncRoutes () {
      if (!this.$breadcrumb.crumbs().length) {
        this.$breadcrumb.add(this.$route.meta.crumb)
        return true
      }

      if (this.$breadcrumb.lastNivel() < this.$breadcrumb.currentNivel()) {
        this.$breadcrumb.add(this.$route.meta.crumb)
      } else {
        this.$breadcrumb.remove(this.$breadcrumb.currentNivel())
      }
    },

    redirect ({ name, query = '', params = '' }) {
      if (name) return { name, query, params }
    }
  }
}
</script>

<style scoped>
.coe-breadcrumb {}

.breadcrumbs { display: flex; }

.crumb {
  padding-right: 10px;
  list-style-type: none;
}

.crumb:not(:last-child):after {
  content: '|';
  padding-left: 10px;
}

.button { text-decoration: none; }

.-active { color: red }
</style>
