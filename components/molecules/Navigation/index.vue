<template>
  <div class="nav">
    <NavLink
      v-for="(data, idx) in navData"
      :key="idx"
      :url="data.url"
      :text="data.text"
    >
    </NavLink>
  </div>
</template>

<script>
export default {
  props: {
    navData: Array,
  },
}
</script>

<style>
.nav {
  display: flex;
  justify-content: space-around;
  width: 500px;
}
</style>
