import Vue from "vue";
import Vuex from "vuex";
import layout from "./modules/layout";

import VuexORM from '@vuex-orm/core'
import models from '@/models'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        layout
    },
    plugins: [VuexORM.install(models)]
});
