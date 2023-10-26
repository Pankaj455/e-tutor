import axios from 'axios';

const config = {
    baseURL: `${process.env.STRAPI_API_URL}/api/`,
    timeout: 8000,
    headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
    }
}

export default axios.create(config)
