const isAuthenticated = state => {
  console.log(state);
  return state.auth.token;
};

const getUserName = state => state.auth.user.name;

export default { isAuthenticated, getUserName };
