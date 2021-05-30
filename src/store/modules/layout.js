const state = {
    sidebarShow: "responsive",
    sidebarMinimize: false
};

const getters = {
    isSideBarVisible: state => state.sidebarShow,
    isSideBarMinized: state => state.sidebarMinimize
};

const actions = {};

const mutations = {
    toggleSidebarDesktop(state) {
        const sidebarOpened = [true, "responsive"].includes(state.sidebarShow);
        state.sidebarShow = sidebarOpened ? false : "responsive";
    },
    toggleSidebarMobile(state) {
        const sidebarClosed = [false, "responsive"].includes(state.sidebarShow);
        state.sidebarShow = sidebarClosed ? true : "responsive";
    },
    set(state, [variable, value]) {
        console.log(variable, value);
        state[variable] = value;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
