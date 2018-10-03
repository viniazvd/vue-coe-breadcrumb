<template>
  <div class="coe-breadcrumb">
    <slot name="crumbs" :crumbs="$breadcrumb.crumbs">
      <ul class="breadcrumbs">
        <li v-for="(crumb, index) in $breadcrumb.crumbs" :key="index" class="crumb">
          <component
            :is="(isActive(crumb) && 'div') || 'router-link'"
            :class="['button', { '-active': isActive(crumb) }]"
            :to="redirectTo(crumb, index)"
          >
            {{ getLabel(index) }}
          </component>
        </li>
      </ul>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'coe-breadcrumb',

  watch: {
    '$route': {
      handler: 'syncRoutes',
      deep: true,
      immediate: true
    }
  },

  computed: {
    last () {
      const length = this.$breadcrumb.crumbs.length - 1

      return this.$breadcrumb.crumbs[length]
    }
  },

  methods: {
    isActive (crumb) {
      if (!crumb) return false

      const currentName = this.$breadcrumb.crumbs.length && this.$breadcrumb.crumbs[this.$breadcrumb.crumbs.length - 1].name

      return currentName === crumb.name
    },

    getLabel (index) {
      return (this.$breadcrumb.crumbs && this.$breadcrumb.crumbs[index] && this.$breadcrumb.crumbs[index].label) || '-'
    },

    syncRoutes (x, y) {
      if ((x && x.name) === (y && y.name) && (x && x.path) !== (y && y.path)) {
        const key = Object.keys(this.$route.params)[0]
        const currentParam = {
          label: this.$route.params[key],
          params: { [key]: this.$route.params[key] }
        }

        this.$breadcrumb.replace(currentParam)
      }

      if (this.$breadcrumb.crumbs.length > this.$route.matched.length) {
        this.$breadcrumb.remove(this.$breadcrumb.crumbs.length - this.$route.matched.length)
      }
    },

    redirectTo (crumb, index) {
      return {
        path: crumb.path || '/',
        params: { campaignSlug: '11111' }
      }
    }
  }
}
</script>

<style scoped>
.coe-breadcrumb {}

.breadcrumbs {
  display: flex;
  margin: 0;
  padding: 0;
}

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
