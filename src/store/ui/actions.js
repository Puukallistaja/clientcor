export default {
  toggleDrawerMenu({commit}, newState) {
    commit('setDrawerMenu', !!newState)
  },
}
