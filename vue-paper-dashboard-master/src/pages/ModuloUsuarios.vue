<template>
    <div class="row">

      <div class="col-xl-12 col-lg-7 col-md-6">
        <Usuarios/>
       <!-- <TableList/> -->

      </div>
    </div>
</template>
<script>
import Usuarios from "./UserProfile/Usuarios.vue";
//import TableList from "./components/TableList.vue";
export default {
  components: {
    Usuarios,
  //  TableList

  }
};
</script>
<style>
</style>
