import axios from "axios";

export default axios.create({
    baseURL : 'https://apis.tjcg.in/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})