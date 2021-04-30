import member from './data'

const memberApi = {}

memberApi.getMember = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(member.getMemberList)
    }, 300)
  })
}

export default {
  ...memberApi,
}
