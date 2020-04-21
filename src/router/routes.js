const routes = [
  {
    path: "/",
    component: () => import("layouts/_template.vue"),
    children: [
      {
        name: "Welcome",
        path: "",
        component: () => import("pages/HomePage.vue"),
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
