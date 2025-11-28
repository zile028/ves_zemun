"use server";

const staff = {
    council: [
        {
            title: "Председник Савета",
            member: [{firstName: "Паун", lastName: "Лучановић", title: ""}]
        },
        {
            title: "Чланови Савета",
            member: [
                {firstName: "Драган", lastName: "Лучановић", title: ""},
                {firstName: "Дара", lastName: "Нисић", title: ""},
                {firstName: "Срђан", lastName: "Миленковић", title: ""},
                {firstName: "Маринета", lastName: "Урсуловић", title: ""}

            ]
        }

    ],
    management: [
        {
            title: "В.Д. директор",
            member: [{firstName: "Драган", lastName: "Милачић", title: "професор струковних студија"}]
        },
        {
            title: "Председник Савета",
            member: [{firstName: "Паун", lastName: "Лучановић", title: ""}]
        }
    ],
    "academic-staff": [
        {
            title: "Професор струковних студија",
            member: [
                {firstName: "Марко", lastName: "Бојић", title: "Професор струковних студија"},
                {firstName: "Ненад", lastName: "Дугалић", title: "Професор струковних студија"},
                {firstName: "Силвана", lastName: "Илић", title: "Професор струковних студија"},
                {firstName: "Александар", lastName: "Лукић", title: "Професор струковних студија"},
                {firstName: "Наташа", lastName: "Марјановић", title: "Професор струковних студија"},
                {firstName: "Драган", lastName: "Милачић", title: "Професор струковних студија"},
                {firstName: "Милан", lastName: "Милуновић", title: "Професор струковних студија"},
                {firstName: "Владимир", lastName: "Павићевић", title: "Професор струковних студија"},
                {firstName: "Радица", lastName: "Павловић", title: "Професор струковних студија"},
                {firstName: "Јованка", lastName: "Поповић", title: "Професор струковних студија"},
                {firstName: "Благоје", lastName: "Пушоња", title: "Професор струковних студија"},
                {firstName: "Ненад", lastName: "Равић", title: "Професор струковних студија"},
                {firstName: "Драгица", lastName: "Стојановић", title: "Професор струковних студија"}
            ]
        },
        {
            title: "Виши предавач",
            member: [
                {firstName: "Албина", lastName: "Кецман", title: "Виши предавач"},
                {firstName: "Биљана", lastName: "Кнежевић", title: "Виши предавач"}
            ]
        },
        {
            title: "Предавач",
            member: [
                {firstName: "Марија", lastName: "Бешлин-Ферух", title: "Предавач"},
                {firstName: "Срђан", lastName: "Благојевић", title: "Предавач"},
                {firstName: "Иван", lastName: "Ивановић", title: "Предавач"},
                {firstName: "Горан", lastName: "Славковић", title: "Предавач"},
                {firstName: "Саша", lastName: "Стефановић", title: "Предавач"},
                {firstName: "Милан", lastName: "Шошкић", title: "Предавач"},
                {firstName: "Соња", lastName: "Жарковић", title: "Предавач"}

            ]
        },
        {
            title: "Наставник страних језика",
            member: [
                {firstName: "Радоњић", lastName: "Јасмина", title: "Наставник страних језика"}
            ]
        }
    ],
    "administrative-staff": [
        {title: "Шеф Студентске службе", member: [{firstName: "Виолета", lastName: "Милошевић", title: ""}]},
        {
            title: "Студентска служба - референт за студентска питања",
            member: [{firstName: "Ђорђе", lastName: "Јовичић", title: ""}]
        },
        {title: "Администратор рачунарске мреже", member: [{firstName: "Марина", lastName: "Лучановић", title: ""}]},
        {title: "Библиотекар", member: [{firstName: "Бранислав", lastName: "Оровић", title: ""}]},
        {title: "Секретар Школе", member: [{firstName: "Иван", lastName: "Ђокић", title: ""}]}
    ]
};

export const AboutStaffType = async (type) => {
    return await staff[type];
};