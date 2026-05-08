import axios from 'axios';

export default axios.create({
    baseURL:'http://13.51.251.187:8080',

    headers: {
        'Content-Type': 'application/json',
    },
});
