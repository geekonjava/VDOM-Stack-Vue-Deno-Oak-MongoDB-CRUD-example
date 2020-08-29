<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Create Contact</h3>
      <form @submit.prevent="submit">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" class="form-control" v-model="contact.firstname" required />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" class="form-control" v-model="contact.lastname" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" v-model="contact.email" required />
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="text" class="form-control" v-model="contact.phone" required />
        </div>
        <div class="form-group">
          <button class="btn btn-success btn-block">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      contact: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    submit() {
      let apiUrl = "http://localhost:4000/api/create";

      axios
        .post(apiUrl, this.contact)
        .then(() => {
          this.$router.push("/contacts");
          this.contact = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
