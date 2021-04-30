<template>
  <div class="header">
    <Navigation :navData="navData" />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
  },
  data() {
    return {
      navData: [
        { url: '/', text: 'Home' },
        { url: '/member', text: 'Member' },
        { url: '/about', text: ' About' },
      ],
    }
  },
}
</script>

<style>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 67px;
  border-bottom: 0.5px solid #6c6c6c;
}
</style>
