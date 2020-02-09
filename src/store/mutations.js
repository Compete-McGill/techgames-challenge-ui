const mutations = {
  setUser(state, user) {
    state.user = user;
    state.isLoggedIn = true;
  }
};

export default mutations;
