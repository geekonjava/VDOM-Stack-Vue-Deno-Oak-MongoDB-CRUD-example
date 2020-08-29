<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Create Contact</h3>
      <form @submit.prevent="update">
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
          <button class="btn btn-success btn-block">Update</button>
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
      contact: {},
    };
  },
  created() {
    let apiUrl = `http://localhost:4000/api/edit/${this.$route.params.id}`;
    axios.get(apiUrl).then((res) => {
      this.contact = res.data;
    });
  },
  methods: {
    update() {
      let apiUrl = `http://localhost:4000/api/update/${this.$route.params.id}`;
      axios.patch(apiUrl, this.contact).then((res)=>{
        console.log(res);
        this.$router.push('contacts');
      }).catch((err)=>console.log(err));
  },
}
</script>