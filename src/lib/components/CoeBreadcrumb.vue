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
            <slot name="crumbs" :label="getLabel(index)">
              {{ getLabel(index) }}
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

    getValue (obj) {
      return Object.values(obj)[0]
    },

    replace () {
      const key = Object.keys(this.$route.params)[0]

      const currentParam = {
        label: this.$route.params[key],
        params: { [key]: this.$route.params[key] }
      }

      this.$breadcrumb.replace(currentParam)
    },

    syncCrumbs (x, y) {
      // sync
      // .. to-do (remover lógica dos guards das rotas)

      // if page reload, remap the labels of store
      // if (this.$breadcrumb.crumbs.some(({ label }) => !label)) this.$breadcrumb.remap()

      // replace
      // if ((x && x.name) === (y && y.name) && (x && x.path) !== (y && y.path)) this.replace()

      // remove
      // if (this.$breadcrumb.crumbs.length > this.$route.matched.length) {
      //   this.$breadcrumb.remove(this.$breadcrumb.crumbs.length - this.$route.matched.length)
      // }

      // takes the value of the last parameter of the store
      // const lastCrumb = this.$breadcrumb.crumbs[this.$breadcrumb.crumbs.length - 1]
      // let property = 'query'
      // if (!lastCrumb[property]) property = 'params'

      // const { [property]: paramRoute } = x

      // replace after remove
      // if (this.getValue(lastCrumb[property]) !== this.getValue(paramRoute)) this.replace()
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
