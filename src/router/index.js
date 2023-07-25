import { createRouter, createWebHistory } from "vue-router";
import dashboardApp from '../master/dashboard-app'
import home from '../pages/home'
import table from '../pages/table'
import data from '../pages/data'
import tentang from '../pages/tentang'
import peraturan from '../pages/peraturan'
import signup from '../pages/signup'



const routes = [
  {
    name: 'dashboard-app',
    component: dashboardApp,
    path: '/',
    redirect:'/home',
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
    name: "signup",
    component: signup,
    path: "/signup",
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
