<template>
  <Nuxt-link class="link" :to="url">{{ text }}</Nuxt-link>
</template>

<script>
export default {
  props: {
    url: String,
    text: String,
  },
}
</script>

<style>
.link {
  text-decoration: none;
}

.link:visited {
  color: black;
}
</style>
