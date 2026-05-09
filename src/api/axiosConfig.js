import axios from 'axios';

export default axios.create({
    baseURL:'http://16.170.166.63:8080',

    headers: {
        'Content-Type': 'application/json',
    },
});
