//api.js

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://protected-escarpment-93524-e347b697cce9.herokuapp.com'
});

export default instance;
