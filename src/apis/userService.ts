import request from "./request.ts";
import {loginInfo , registerInfo} from "../types/personalInfo.ts";


export default class userService{
    static async Login(data:loginInfo){
        return request({
            "header":{
                "Content-Type":"application/json"
            },
            method: "post",
            url: "/api/login",
            data:data
        });
    }

    static async Register(data:registerInfoInfo){
        return request({
            "header":{
                "Content-Type":"application/json"
            },
            method: "post",
            url: "/api/register",
            data:data
        });
    }


}