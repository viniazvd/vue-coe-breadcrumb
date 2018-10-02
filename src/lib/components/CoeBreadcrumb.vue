<template>
  <div class="coe-breadcrumb">
    <slot name="crumbs" :crumbs="breadcrumbs">
      <ul class="breadcrumbs">
        <li v-for="(crumb, index) in breadcrumbs" :key="index" class="crumb">
          <router-link exact :class="['button', { '-active': isActive(crumb) }]" :to="crumb.path">
            {{ getLabel(crumb) }}
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

    getLabel (crumb) {
      return (crumb.instances.default && crumb.instances.default._data.crumb) || '-'
    },

    syncRoutes () {
      if (this.$route && this.$route.matched) this.breadcrumbs = this.$route.matched
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
