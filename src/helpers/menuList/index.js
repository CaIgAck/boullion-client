const menu = [
  {
    name: "План питания",
    path: "/meal-plan",
    roles: ["user"],
  },
  {
    name: "Профиль",
    path: "/profile",
    roles: ["user", "admin"],
  },
  {
    name: "Избранное",
    path: "/favorites",
    roles: ["user"],
  },
  {
    name: "Пользователи",
    path: "/users",
    roles: ["admin"],
  },
  {
    name: "Список заявок",
    path: "/orders",
    roles: ["admin"],
  },
];
export default {
  menu,
};
