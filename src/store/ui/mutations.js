export default {
  setDrawerMenu (state, newState) {
    state.drawerMenuOpen = newState || !state.drawerMenuOpen
  }
}
