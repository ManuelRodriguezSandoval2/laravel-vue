<template>
  <div class="wrapper">
    <side-bar class="sidebar">
      <template slot="links">
        <sidebar-link to="/ingresos" name="ingresos" icon="ti-view-list-alt"/>
        <sidebar-link to="/usuarios" name="usuarios" icon="ti-plus"/>
        <sidebar-link to="/proveedores" name="proveedores" icon="ti-layout-list-thumb-alt"/>
        <sidebar-link to="/bodegas" name="bodegas" icon="ti-harddrives"/>
        <sidebar-link to="/clientes" name="clientes" icon="ti-hand-open"/>
        <sidebar-link to="/bajas" name="bajas" icon="ti-close"/>
        <sidebar-link to="/movimientos" name="movimientos" icon="ti-control-shuffle"/>
        <sidebar-link to="/traspasos" name="traspasos" icon="ti-share-alt"/>
        <sidebar-link to="/stock" name="consultar stock" icon="ti-search"/>
        <sidebar-link to="/dashboard" name="Dashboard" icon="ti-panel"/>
        <sidebar-link to="/notifications" name="Notifications" icon="ti-bell"/>
        <sidebar-link to="/icons" name="Icons" icon="ti-pencil-alt2"/>

      </template>
      <mobile-menu>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-panel"></i>
            <p>Stats</p>
          </a>
        </li>
        <drop-down class="nav-item"
                   title="5 Notifications"
                   title-classes="nav-link"
                   icon="ti-bell">
          <a class="dropdown-item">Notification 1</a>
          <a class="dropdown-item">Notification 2</a>
          <a class="dropdown-item">Notification 3</a>
          <a class="dropdown-item">Notification 4</a>
          <a class="dropdown-item">Another notification</a>
        </drop-down>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-settings"></i>
            <p>Settings</p>
          </a>
        </li>
        <li class="divider"></li>
      </mobile-menu>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>


