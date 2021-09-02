const incomes = [{
    id: 0,
    category: "salary",
    description: "salary per month",
    date: "2021-07-30",
    sum: "650.00",
},
{    
    id: 1,
    category: "present",
    description: "B-day",
    date: "2021-08-24",
    sum: "300.00",  
},
{
    id: 2,
    category: "food",
    description: "sold a cake backed by myself",
    date: "2021-08-23",
    sum: "70.00",
},]

const outcomes = [{
    id: 0,
    category: "food",
    description: "visiting restaurant",
    date: "2021-08-26",
    sum: "100.00",
},
{   
    id: 1,
    category: "transport",
    description: "taking taxi",
    date: "2021-08-24",
    sum: "7.00",  
},
{   
    id: 2,
    category: "transport",
    description: "plane",
    date: "2021-08-10",
    sum: "150.00",  
},
{   
    id: 3,
    category: "food",
    description: "pizza",
    date: "2021-08-15",
    sum: "20.00",  
},
{   
    id: 4,
    category: "present",
    description: "Granny's B-day",
    date: "2021-09-01",
    sum: "100.00",  
},
]

const categories = [{
    id: 0,
    name: "food",
    icon: "fas fa-pizza-slice",
    description: "all food",
    date: "2021-08-29",
},
{
    id: 1,
    name: "transport",
    icon: "fas fa-bus",
    description: "all commuting",
    date: "2021-08-11",
},
{
    id: 2,
    name: "salary",
    icon: "fas fa-money-bill-alt",
    description: "salary per month",
    date: "2021-07-15",
},
{
    id: 3,
    name: "present",
    icon: "fas fa-gift",
    desctiption: "any money presents",
    date: "2021-03-04",

}]

const user = {
    id: 0,
    name: "",
    phone: "",
    photo: "https://geekon.media/wp-content/litespeed/avatar/05a571c863525468d1fe749bf91d7279.jpg",
    alarm: false,
    limit: 0,
}

const icons = [
    {
    id: 0,
    unicode: '&#xf155;',
    classname: "fas fa-dollar",
    description: "dollar",
    },
    {
    id: 1,
    unicode: '&#xf0fa;',
    classname: "fas fa-medkit",
    description: "health",
    },
    {
    id: 2,
    unicode: '&#xf1b0;',
    classname: "fas fa-paw",
    description: "animal",
    },
    {
    id: 3,
    unicode: '&#xf1b9;',
    classname: "fas fa-car",
    description: "transport",
    },
    {
    id: 4,
    unicode: '&#xf02d;',
    classname: "fas fa-book",
    description: "book",
    },
    {
    id: 5,
    unicode: '&#xf19d;',
    classname: "fas fa-graduation-cap",
    description: "graduation cap",
    },
    {
    id: 6,
    unicode: '&#xf072',
    classname: "fas fa-plane",
    description: "plane",
    },
    {
    id: 7,
    unicode: '&#xf279;',
    classname: "fas fa-map",
    description: "map",
    },
    {
    id: 8,
    unicode: '&#xf005;',
    classname: "fas fa-star",
    description: "star",
    },
    {
    id: 9,
    unicode: '&#xf015;',
    classname: "fas fa-home",
    description: "home",
    },
    {
    id: 10,
    unicode: '&#xf236;',
    classname: "fas fa-hotel",
    description: "hotel",
    },
    {
    id: 11,
    unicode: '&#xf13d;',
    classname: "fas fa-anchor",
    description: "anchor",
    },
    {
    id: 12,
    unicode: '&#xf179;',
    classname: "fas fa-apple",
    description: "apple",
    },
    {
    id: 13,
    unicode: '&#xf19c;',
    classname: "fas fa-bank",
    description: "bank",
    },
    {
    id: 14,
    unicode: '&#xf0f3;',
    classname: "fas fa-bell",
    description: 'bell',
    },
    {
    id: 15,
    unicode: '&#xf1fd;',
    classname: "fas fa-birthday-cake",
    description: "birthday cake",
    },
    {
    id: 16,
    unicode: '&#xf27e;',
    classname: 'fas fa-black-tie',
    description: 'black tie',
    },
    {
    id: 17,
    unicode: '&#xf1ad;',
    classname: 'fas fa-building',
    description: 'building',
    },
    {
    id: 18,
    unicode: "&#xf133",
    classname: "fas fa-calendar",
    description: "calendar",
    },
    {
    id: 19,
    unicode: '&#xf030;',
    classname: "fas fa-camera",
    description: "camera",
    },
    {
    id: 20,
    unicode: '&#xf1f0;',
    classname: "fas fa-visa",
    description: "visa",
    },
    {
    id: 21,
    unicode: '&#xf818;',
    classname: "fas fa-pizza-slice",
    description: "pizza slice",
    },
    {
    id: 22,
    unicode: '&#xf06b;',
    classname: "fas fa-gift",
    description: "present",
    },
    {
    id: 23,
    unicode: '&#xf207;',
    classname: "fas fa-bus",
    description: "bus",
    },
    {
    id: 23,
    unicode: '&#xf3d1;',
    classname: "fas fa-money-bill-alt",
    description: "money",
    },
    ]

export {user, categories, incomes, outcomes, icons};