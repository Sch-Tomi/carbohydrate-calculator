<template>
    <div class="c-app">
        <TheSidebar />
        <CWrapper>
            <TheHeader />
            <div class="c-body">
                <main class="c-main">
                    <CContainer fluid>
                        <transition name="fade" mode="out-in">
                            <router-view :key="$route.path"></router-view>
                        </transition>
                    </CContainer>
                </main>
            </div>
            <TheFooter />
        </CWrapper>
    </div>
</template>

<script>
import TheSidebar from "./layout/TheSidebar";
import TheHeader from "./layout/TheHeader";
import TheFooter from "./layout/TheFooter";

export default {
    name: "TheContainer",
    components: {
        TheSidebar,
        TheHeader,
        TheFooter
    }
};
</script>

<style lang="scss">
// Import Main styles for this application
@import "assets/scss/style";
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
