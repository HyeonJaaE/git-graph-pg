import memberApi from '@/api'

const actions = {}

actions.getMember = ({ commit }) => {
  return memberApi
    .getMember()
    .then((res) => {
      console.log('reserserse', res.data)
      commit('SET_MEMBER', res.data.data)
    })
    .catch((err) => console.log(err))
}

export default {
  ...actions,
}
