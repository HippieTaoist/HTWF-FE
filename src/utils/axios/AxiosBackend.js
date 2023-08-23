import axios from 'axios';

let url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'http://PRODUCTIONLINKHERE';

const AxiosBackend = axios.create({
  baseURL: url,
  timeout: 100000,
  headers: {
    Accept: '*',
    authorization: `Bearer ${window.localStorage.getItem('jwtToken')}`,
  },
});

export default AxiosBackend;
