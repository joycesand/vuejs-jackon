<template>
  <div>
    <h2>This is home page</h2>

    <div v-if="display" id="Partners" class="container">
      <h1>Project Partners</h1>

      <ol>
          <li v-for="partner in partners" v-bind:key="partner">{{partner}}</li>
         
      </ol>
      <div class="col-md-3">
      <button class="btn btn-info" v-on:click="addPartner">Add Partner</button>
      </div>

      <p v-if="passed">Congs You Passed!</p>
      <p v-else-if="probation">You are on probation!</p>
      <p v-else>Sorry You have failed!</p>
      
    </div>
    <hr/>
  </div>
</template>

<script>
export default {
  name: "AppHome",
  data() {
      return {
        display:true,
        partners:["Clarke International University",
          "Laboremus",
          "Refactory Ug",
          "Fontes Foundation"
          ],
        
        passed:false, // if u want 'else' to appear u need to change true to false.
        probation:"true"
       
      }
  },
  methods:{
      addPartner: function(){
        alert("Have added a Partner");
      }
    
  }

};
</script>
<style>
#Partners{
  text-align: justify;
  padding: 20px;

}
</style>
