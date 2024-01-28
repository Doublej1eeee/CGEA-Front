import axios from "axios";

const request = (config:object) => {
    const instance =axios.create({
        baseURL :"http://127.0.0.1:4523/m1/3941827-0-default",
        timeout : 1000,
        // withCredentials: true
    });

    return instance(config);
};

export default request;
