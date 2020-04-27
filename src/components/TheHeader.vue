<template>
  <nav>
    <router-link to="/" class="logo">
      <img src="//static.photongroup.com/protocolwoman/assets/logo-iridium.png" alt="iridiumlabs">
    </router-link>

    <div class="title">
     <h1>Calculadora de Macronutrientes</h1>
    </div>
  </nav>

</template>

<script>
  export default {
    name: "TheHeader"
  };
</script>

<style scoped>
  nav img {
    margin: 20px auto;
    text-align: center;
    width: 100px;
  }

  div h1 {
    margin: 0 auto;
    width: 240px;
    text-align: center;
    font-size: 1.45rem;
    line-height: 1.55rem;
  }
</style>
