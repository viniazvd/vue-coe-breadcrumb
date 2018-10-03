<template>
  <div>
    <h2>Editar</h2>

    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: 'edit',

  hasCrumb: true
}
</script>
