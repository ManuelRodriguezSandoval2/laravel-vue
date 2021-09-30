<template>
  <card class="card" title="Ingreso de productos">
    <div>
      <form >
        <div class="row">
          <div class="col-md-2">
            <fg-input type="text"
                      label="Número de guia"
                      >
            </fg-input>
          </div>
          <div class="col-md-5">

            <fg-input type="text"
                      label="Bodega"
                      >
            </fg-input>
          </div>
          <div class="col-md-5">
            <fg-input type="text"
                      label="Proveedor"
                      >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="Producto"
                      >
            </fg-input>
          </div>


        </div>
<!-- v-model="user.address" -->





        <div class="text-center">
          <p-button type="info"
                    round
                    @click.native.prevent="updateProfile">
            Ingresar
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
export default {
 /*  data() {
    return {
      user: {
        company: "Paper Dashboard",
        username: "michael23",
        email: "",
        firstName: "Chet",
        lastName: "Faker",
        address: "Melbourne, Australia",
        city: "Melbourne",
        postalCode: "",
        aboutMe: `We must accept finite disappointment, but hold on to infinite hope.`
      }
    };
  }, */
  methods: {
    updateProfile() {
     // alert("Your data: " + JSON.stringify(this.user));
    }
  }
};
</script>
<style>
</style>
