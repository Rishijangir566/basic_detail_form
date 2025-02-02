import axios from "axios";

const instance =  axios.create({baseURL:"http://localhost:3009/register"})
export default instance;
