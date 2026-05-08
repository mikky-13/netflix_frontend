import axios from 'axios';

export default axios.create({
    baseURL:'http://16.16.169.173:8080',

    headers: {
        'Content-Type': 'application/json',
    },
});
