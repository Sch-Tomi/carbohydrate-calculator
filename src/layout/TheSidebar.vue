<template>
    <CSidebar
        fixed
        :minimize="isSideBarMinized"
        :show="isSideBarVisible"
        @update:show="value => $store.commit('layout/set', ['sidebarShow', value])"
    >
        <CSidebarBrand class="d-md-down-none flex items-center justify-content-center" to="/">
            <CIcon
                name="cil-calculator"
                :height="35"
            />
            <h2 class="m-0 pl-2">CH Calculator</h2>
        </CSidebarBrand>

        <CRenderFunction flat :content-to-render="$options.nav" />
        <CSidebarMinimizer
            class="d-md-down-none"
            @click.native="$store.commit('layout/set', ['sidebarMinimize', !isSideBarMinized])"
        />
    </CSidebar>
</template>

<script>
import nav from "./_nav";

import { mapGetters } from "vuex";

export default {
    name: "TheSidebar",
    nav,
    computed: {
        ...mapGetters("layout", ["isSideBarVisible", "isSideBarMinized"])
    }
};
</script>
