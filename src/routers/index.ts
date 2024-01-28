import {createRouter,createWebHistory} from "vue-router";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Home from "../pages/Home.vue";
import Mine from "../pages/Mine.vue";
import Recommend from "../pages/Recommend.vue";
import Evaluate from "../pages/Evaluate.vue";

const routes = [
    {
        path : "/",
        name : "Home",
        component : Home
    },
    {
        path : "/login",
        name : "login",
        component : Login
    },
    {
        path : "/register",
        name : "register",
        component : Register
    },
    {
        path : "/mine",
        name : "mine",
        component : Mine
    },
    {
        path : "/recommend",
        name : "recommend",
        component : Recommend
    },
    {
        path : "/evaluate",
        name : "evaluate",
        component : Evaluate
    }

];

const router = createRouter(
    {
        history : createWebHistory(),
        routes : routes
    }
);

//登录注册的路由守卫
//登录状态用什么存，pinia还是浏览器自带的，pinia需要先导入

export default  router;