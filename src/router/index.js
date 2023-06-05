import { createRouter, createWebHistory } from "vue-router";
import dashboardApp from '../master/dashboard-app'
import home from '../pages/home'
import table from '../pages/table'
import data from '../pages/data'
import tentang from '../pages/tentang'
import login from '../pages/login'
import peraturan from '../pages/peraturan'


const routes = [
  {
    name: 'dashboard-app',
    component: dashboardApp,
    path: '/home',
    children: [
      {
        name: "home",
        component: home, 
        path: "/home",
      },
      {
        name: "table",
        component: table, 
        path: "/form",
      },
      {
        name: "data",
        component: data, 
        path: "/data",
      },
      {
        name: "tentang",
        component: tentang, 
        path: "/tentang",
      },
      {
        name: "peraturan",
        component: peraturan, 
        path: "/peraturan",
      },
    ]
  },
  {
    name: "login",
    component: login,
    path: "/login",
  },
];


const router = Router();
export default router;

function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
