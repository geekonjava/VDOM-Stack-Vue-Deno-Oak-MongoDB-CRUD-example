<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in contacts" :key="contact._id.$oid">
            <td>{{cotact.firstname}}</td>
            <td>{{cotact.lastname}}</td>
            <td>{{cotact.email}}</td>
            <td>{{cotact.phone}}</td>
            <td>
              <router-link
                :to="{name: 'edit', params: {id: contact._id.$oid}}"
                class="btn btn-success"
              >Edit</router-link>
              <button class="btn btn-danger" @click.prevent="deleteContact(contact._id.$oid)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      contacts: [],
    };
  },
  created() {
    let apiUrl = "http://localhost:4000/api/contacts";
    axios
      .get(apiUrl)
      .then((res) => {
        this.contacts = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteContact(id) {
      let apiUrl = `http://localhost:4000/api/delete/${id}`;
      let indexOfArrayItem = this.contacts.findIndex((i) => i._id.$oid === id);
      if (window.confirm("Do you want to delete?")) {
        axios
          .delete(apiUrl)
          .then(() => {
            this.contacts.splice(indexOfArrayItem, 1);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
<style lang="stylus">
.btn-success {
  margin-right: 10px;
}
</style>