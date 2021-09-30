<template>
  <card class="card" title="Ingresar Bodegas">
    <div>
      <form >
        <div class="row">
          <div class="col-md-2">
            <fg-input type="text"
                      label="Códifo"
                      >
            </fg-input>
          </div>
          <div class="col-md-5">

            <fg-input type="text"
                      label="Nombre Bodega"
                      >
            </fg-input>
          </div>
          <div class="col-md-5">
            <fg-input type="text"
                      label="Ciudad"
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
