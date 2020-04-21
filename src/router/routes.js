const routes = [
  {
    path: "/",
    component: () => import("layouts/PlainLayout.vue"),
    children: [
      {
        name: "Welcome",
        path: "",
        component: () => import("pages/HomePage.vue"),
      },
    ],
  },
  {
    path: "/office",
    component: () => import("layouts/OfficeLayout.vue"),
    children: [
      {
        name: "Restaurants",
        path: "restaurant",
        component: () => import("pages/RestaurantPage.vue"),
      },
      {
        name: "Orders",
        path: "order",
        component: () => import("pages/OrderPage.vue"),
      },
    ],
  },
]

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue"),
  })
}

export default routes
