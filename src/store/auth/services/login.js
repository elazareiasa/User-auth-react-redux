import axios from 'axios'

export const logIn =  async (email, password) => {
    const response = await axios.post("/login", {
      email,
      password,
    });
    return { token: response.data.accessToken };
  };