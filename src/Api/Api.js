import axios from "axios";

export default axios.create({
    baseURL : 'https://apis.tjcg.in/api/',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
})