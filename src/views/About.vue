<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ data_user }}</h2>
  </div>
</template>

<script>
import axios from "axios";
import userServices from '../apiServices/usersService';
export default {
  data() {
    return {
      data_user: [],
    }
  },
  
  async created() {
    try {
      const res = await userServices.index();
      const res_data = res.data.data;
      this.data_user = res_data;
      console.log(res_data);
    } catch(e) {
      this.data_user.push(e)
    }
  },
};
</script>
