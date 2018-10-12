<template>
  <div class="coe-breadcrumb">
    <slot name="crumbs" :crumbs="$breadcrumb.crumbs">
      <ul class="breadcrumbs">
        <li v-for="(crumb, index) in $breadcrumb.crumbs" :key="index" :style="separator" class="crumb">
          <component :is="getType(crumb)" :class="getClasses(crumb)" :to="redirect(crumb)">
            <slot name="crumbs" :label="getLabel(crumb)">{{ getLabel(crumb) }}</slot>
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
      handler: 'syncRoute',
      immediate: true
    }
  },

  computed: {
    separator () {
      return { '--separator': `'${this.$breadcrumb.separator}'` }
    }
  },

  methods: {
    isActive (crumb) {
      if (!crumb) return false

      const currentName = this.$breadcrumb.crumbs.length && this.$breadcrumb.crumbs[this.$breadcrumb.crumbs.length - 1].name

      return currentName === crumb.name
    },

    getType (crumb) {
      return (this.isActive(crumb) && 'div') || 'router-link'
    },

    getClasses (crumb) {
      return ['link', { '-active': this.isActive(crumb) }]
    },

    getLabel (crumb) {
      return (crumb.label || crumb.name || 'Início')
    },

    redirect (crumb) {
      return (!crumb.path && '/') || crumb
    },

    syncRoute ({ fullPath, name, matched, query, params }) {
      this.$breadcrumb.syncRoute({ fullPath, name, matched, query, params })
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
  content: var(--separator);
  padding-left: 10px;
}

.link { text-decoration: none; }

.-active { color: red }
</style>
