export const menuList = [

    {
        label: "О нама",
        path: null,
        drop: true,
        active: true,
        submenu: [
            {
                label: "Савет",
                path: "/about/council",
                drop: false,
                active: true,
                submenu: []
            },
            {
                label: "Руководство",
                path: "/about/management",
                drop: false,
                active: true,
                submenu: []
            },
            {
                label: "Наставно особље",
                path: "/about/academic-staff",
                drop: false,
                active: true,
                submenu: []
            },
            {
                label: "Ненаставно особље",
                path: "/about/administrative-staff",
                drop: false,
                active: true,
                submenu: []
            }
        ]
    },
    {
        label: "Студије",
        path: "/study",
        drop: true,
        active: true,
        submenu: [
            {
                label: "Основне струковне студије",
                path: "/study/undergraduate",
                drop: false,
                active: true,
                submenu: []
            },
            {
                label: "Специјалистичке струковне студије",
                path: "/study/specialized",
                drop: false,
                active: true,
                submenu: []
            },
            {
                label: "Мастер струковне студије",
                path: "/study/master",
                drop: false,
                active: true,
                submenu: []
            }
        ]
    },
    {
        label: "Документа",
        path: "/documents",
        drop: true,
        active: true,
        submenu: [
            {
                label: "Акта и правилници",
                path: "/documents/acts_regulations",
                drop: false,
                active: true,
                submenu: []
            },
            {
                label: "Акредитација",
                path: "/documents/accreditation",
                drop: false,
                active: true,
                submenu: []
            }
        ]
    },
    {
        label: "Студенти",
        path: "/students",
        drop: true,
        active: true,
        submenu: [
            {
                label: "Распоред предавања",
                path: "/students/class",
                drop: false,
                active: true,
                submenu: []
            },
            {
                label: "Распоред испита",
                path: "/students/exam",
                drop: false,
                active: true,
                submenu: []
            }
        ]
    },
    {
        label: "Вести",
        path: "/news",
        drop: false,
        active: true,
        submenu: []
    },
    {
        label: "Алумни",
        path: "/alumni",
        drop: false,
        active: false,
        submenu: []
    },
    {
        label: "Контакт",
        path: "/contact",
        drop: false,
        active: true,
        submenu: []
    }
];