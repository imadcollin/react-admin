const authProvider = {
  login: ({ username, password }) => {
  
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    return Promise.resolve();
  },
  getIdentity: () => {
    const  fullName  = localStorage.getItem('username');
    return {fullName };
},
  logout: () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    return Promise.resolve();
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject({ redirectTo: "/no-access" });
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject({ redirectTo: "/no-access" });
  },
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
