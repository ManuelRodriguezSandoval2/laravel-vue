<template>
  <card class="card" title="Ingresar Usuarios">
    <div>
      <form >
        <div class="row">
          <div class="col-md-2">
            <fg-input type="text"
                      label="Rut"
                      >
            </fg-input>
          </div>
          <div class="col-md-5">

            <fg-input type="text"
                      label="Username"
                      >
            </fg-input>
          </div>
          <div class="col-md-5">
            <fg-input type="email"
                      label="Email"
                      >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="Nombre"
                      >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Apellido Paterno"
                      >
            </fg-input>
          </div>
           <div class="col-md-4">
            <fg-input type="text"
                      label="Apellido Materno"
                      >
            </fg-input>
          </div>
        </div>
<!-- v-model="user.address" -->
        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      label="Dirección"
                      >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="Ciudad"
                      >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Contraseña"
                      >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Tipo de permiso"
                      >
            </fg-input>
          </div>
        </div>


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
