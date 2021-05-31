export default [
    {
        _name: "CSidebarNav",
        _children: [
            {
                _name: "CSidebarNavItem",
                name: "Home",
                to: "/",
                icon: "cil-home"
            },
            {
                _name: "CSidebarNavItem",
                name: "Gramm számoló",
                to: "/gram-to-ch",
                icon: "cil-arrow-thick-left"
            },
            {
                _name: "CSidebarNavItem",
                name: "CH számoló",
                to: "/ch-to-gram",
                icon: "cil-arrow-thick-right"
            },
            {
                _name: "CSidebarNavItem",
                name: "Meal Calculator",
                to: "/meal-calculator",
                icon: "cil-dinner"
            }
        ]
    }
];
