import Axios from 'axios'

const baseURL = 'http://localhost:8000/api'

export const api = Axios.create({
    baseURL,
    headers:{
        "Content-Type":"application/json",
        Accept:'application/json'
    }
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log(error);
      const message = error
        // error.response?.data?.message ||
        // 'Something went wrong. Please try again.';
      return Promise.reject(new Error(message));
    }
  );
  