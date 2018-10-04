<template>
  <div class="coe-breadcrumb">
    <slot name="crumbs" :crumbs="$breadcrumb.crumbs">
      <ul class="breadcrumbs">
        <li v-for="(crumb, index) in $breadcrumb.crumbs" :key="index" class="crumb">
          <component
            :is="(isActive(crumb) && 'div') || 'router-link'"
            :class="['link', { '-active': isActive(crumb) }]"
            :to="crumb"
          >
            <slot name="crumbs" :label="getLabel(crumb)">
              {{ getLabel(crumb) }}
            </slot>
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
      handler: 'syncCrumbs',
      immediate: true
    }
  },

  methods: {
    isActive (crumb) {
      if (!crumb) return false

      const currentName = this.$breadcrumb.crumbs.length && this.$breadcrumb.crumbs[this.$breadcrumb.crumbs.length - 1].name

      return currentName === crumb.name
    },

    getLabel (crumb) {
      return this.$breadcrumb.loading ? 'loading...' : (crumb.label || crumb.name)
    },

    syncCrumbs (x, y) {
      this.$breadcrumb.add(x.matched)
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

.link { text-decoration: none; }

.-active { color: red }
</style>
