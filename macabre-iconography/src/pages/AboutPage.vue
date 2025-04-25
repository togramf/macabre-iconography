<template>
    <div>
      <ThreeScene />
      <div class="content">
        <h1>Informations and credits with 3D in it</h1>
        <button> {{ $t("ldgbuttonseemore") }}</button>
      </div>
    </div>
  </template>
  
  <script>
  import ThreeScene from "../components/ThreeScene.vue";
  
  export default {
    components: { ThreeScene }
  };
  </script>
  
  <style scoped>
  .content {
    position: relative;
    z-index: 1; /* Place le contenu au-dessus */
    text-align: center;
    margin-top: 100px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 18px;
  }
  </style>
  