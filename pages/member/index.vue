<template>
  <div>
    <Member />
    <h1>master</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('member', ['member']),
  },
  methods: {
    ...mapActions('member', ['getMember']),
  },
  created() {
    this.getMember()
    console.log('member', this.member)
  },
}
</script>
