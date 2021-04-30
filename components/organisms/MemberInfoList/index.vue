<template>
  <div class="member-info-list">
    <ListHeader />
    <MemberInfo />
  </div>
</template>

<script>
export default {
  props: {
    memberData: Object,
  },
}
</script>

<style>
.member-info-list {
  display: flex;
  height: 350px;
  width: 350px;
  border: 0.5px solid #6c6c6c;
}
</style>
