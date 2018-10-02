<template>
  <div class="coe-breadcrumb">
    <slot name="crumbs" :crumbs="breadcrumbs">
      <ul class="breadcrumbs">
        <li v-for="(crumb, index) in breadcrumbs" :key="index" class="crumb">
          <router-link exact :class="['button', { '-active': isActive(crumb) }]" :to="crumb.path">
            {{ getLabel(index) }}
          </router-link>
        </li>
      </ul>
    </slot>
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

  watch: {
    '$route': {
      handler: function () {
        this.syncRoutes()
      },
      immediate: true
    }
  },

  methods: {
    isActive (crumb) {
      if (!crumb) return false

      const currentName = this.breadcrumbs.length && this.breadcrumbs[this.breadcrumbs.length - 1].name

      return currentName === crumb.name
    },

    getLabel (index) {
      return (this.$breadcrumb.crumbs && this.$breadcrumb.crumbs[index]) || '-'
    },

    syncRoutes () {
      if (this.$route && this.$route.matched) {
        this.breadcrumbs = this.$route.matched.filter(route => route.path)
      }

      if (this.breadcrumbs.length < this.$breadcrumb.crumbs.length) {
        const slice = this.breadcrumbs.filter((_, index) => index <= this.breadcrumbs.length).length

        this.$breadcrumb.remove(slice)
      }
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
