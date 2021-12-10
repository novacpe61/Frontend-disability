<template>
  <div id="upload">
    <div class="container">
      <div>
        <h2>Single File</h2>
        <hr />
        <label
          >File
          <input type="file" id="file" ref="file" @change="handleFileUpload($event)" />
        </label>
        <button v-on:click="submitFile()">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import userServices from "../apiServices/usersService";
export default {
  name: "Upload",
   data(){
      return {
        file: ''
      }
    },

    methods: {

      submitFile(){
            let formData = new FormData();

            formData.append('file', this.file);
            console.log(this.file)
            userServices.upload(formData
            // axios.post( 'http://localhost:4000/users/upload',
            //     formData,
            //     {
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     }
            //   }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },

      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
};
</script>

<style></style>
