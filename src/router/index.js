import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import GramToCH from "../views/GramToCH";
import CHToGram from "../views/CHToGram";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/gram-to-ch",
        name: "Gram",
        component: GramToCH
    },
    {
        path: "/ch-to-gram",
        name: "Gram",
        component: CHToGram
    }
];

const router = new VueRouter({
    routes
});

export default router;
