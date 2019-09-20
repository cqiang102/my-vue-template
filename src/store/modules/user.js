const user = {
  state: sessionStorage.getItem('userState') != null ? JSON.parse(sessionStorage.getItem('userState')) : {
    user: {
      username: ''
    }
  },

//取数据
  getters: {
    getUser(state) {
      return state.user;
    }
  },

//更新数据
  mutations: {
    updateUser(state, user) {
      state.user = user;
    }
  },

//异步
  actions : {
    asyncUpdateUser(context, user) {
      context.commit('updateUser', user);
    }
  }
};

export default user;
