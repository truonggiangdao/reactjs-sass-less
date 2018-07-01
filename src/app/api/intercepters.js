const registerIntercepters = (axios) => {
  axios.interceptors.request.use((config) => {
    // Do something before request is sent
    const tokenUser = localStorage.getItem('token');
    console.log(tokenUser);
    if (tokenUser) {
      const newConfig = {
        ...config,
        headers: {
          ...config.headers,
          token: tokenUser,
        },
      };
      return newConfig;
    }
    return config;
  });
};

export default registerIntercepters;
