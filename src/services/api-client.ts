import axios from "axios";
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'f632b77d910741ac8739d6e7673d02e5'
    }
})