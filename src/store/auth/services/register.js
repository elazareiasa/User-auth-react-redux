import axios from 'axios'

export const register = async (email, password, fullname, age, address) => {
    await axios.post("/register", {
      email,
      password,
      fullname,
      age,
      address
    });
  };