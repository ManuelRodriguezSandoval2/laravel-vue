import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import ModuloBajas from "@/pages/ModuloBajas.vue";
import ModuloBodegas from "@/pages/ModuloBodegas.vue";
import ModuloClientes from "@/pages/ModuloClientes.vue";
import ModuloIngresos from "@/pages/ModuloIngresos.vue";
import ModuloMovimientos from "@/pages/ModuloMovimientos.vue";
import ModuloProveedores from "@/pages/ModuloProveedores.vue";
import ModuloSalidas from "@/pages/ModuloSalidas.vue";
import ModuloTraspasos from "@/pages/ModuloTraspasos.vue";
import ModuloUsuarios from "@/pages/ModuloUsuarios.vue";
import ModuloStock from "@/pages/ModuloStock.vue";



import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [

      {
        path: "usuarios",
        name: "Usuarios",
        component: ModuloUsuarios
      },

      {
        path: "ingresos",
        name: "Ingresos",
        component: ModuloIngresos
      },
      {
        path: "bajas",
        name: "Bajas",
        component: ModuloBajas
      },
      {
        path: "bodegas",
        name: "Bodegas",
        component: ModuloBodegas
      },
      {
        path: "clientes",
        name: "Clientes",
        component: ModuloClientes
      },
      {
        path: "ingresos",
        name: "Ingresos",
        component: ModuloIngresos
      },
      {
        path: "movimientos",
        name: "Movimientos",
        component: ModuloMovimientos
      },
      {
        path: "proveedores",
        name: "Proveedores",
        component: ModuloProveedores
      },
      {
        path: "salidas",
        name: "Salidas",
        component: ModuloSalidas
      },
      {
        path: "traspasos",
        name: "Traspasos",
        component: ModuloTraspasos
      },
      {
        path: "stock",
        name: "Stock",
        component: ModuloStock
      },


      /* /* {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      }, */
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
