<template>
    <CHeader fixed with-subheader light>
        <CToggler
            in-header
            class="ml-3 d-lg-none"
            @click="$store.commit('layout/toggleSidebarMobile')"
        />
        <CToggler
            in-header
            class="ml-3 d-md-down-none"
            @click="$store.commit('layout/toggleSidebarDesktop')"
        />
        <CHeaderBrand class="mx-auto d-lg-none" to="/">
            <CIcon name="cil-calculator" :height="35" />
            <h2 class="m-0 pl-2">CH Calculator</h2>
        </CHeaderBrand>
    </CHeader>
</template>

<script>
export default {
    name: "TheHeader",
    components: {}
};
</script>
