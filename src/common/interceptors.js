import axios from 'axios';
axios.interceptors.response.use(
  function (res) {
    return res.data;
  },
);