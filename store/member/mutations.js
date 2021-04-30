const mutations = {}

mutations.SET_MEMBER = (state, member) => {
  console.log(123123123)
  state.data = member
}

export default {
  ...mutations,
}
