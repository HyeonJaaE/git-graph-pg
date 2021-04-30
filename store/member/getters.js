const getters = {}

getters.member = (state) => {
  console.log('mutations called')
  return state.data.map((s) => s + 1)
}

export default {
  ...getters,
}
