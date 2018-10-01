<template>
  <div id="app">
    <coe-breadcrumb />

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/categories">Categorias</router-link> |
      <router-link to="/details">Detalhes</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import CoeBreadcrumb from './lib/components/CoeBreadcrumb'

export default {
  name: 'root',

  components: { CoeBreadcrumb }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
