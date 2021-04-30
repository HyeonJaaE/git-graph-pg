<template>
  <div>
    <div>commit - 2</div>
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
