<template>
  <div id="AppBodyStructure">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
            <button class="btn btn-danger">Header</button>
            <NavBar/>
            <AppBodyStructure/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
                <SideBar/>
            </div>
            <div class="col-md-7">
                <button class="btn btn-danger">Center</button>
            </div>
            <div class="col-sm-2">
                <button class="btn btn-danger">Right</button>
            </div>
        </div>
      <div class="row">
            <div class="col-lg-12">
                <button class="btn btn-danger">Footer</button>
                <Footer/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import SideBar from "./SideBar.vue";
import Footer from "./Footer.vue";

export default {
  name: "AppBodyStructure",
  components: {
    NavBar,SideBar,Footer
  }
};
</script>

<style>
#AppBodyStructure {
  width: 100%;
}
.row {
  margin-bottom: 20px;
}
</style>
