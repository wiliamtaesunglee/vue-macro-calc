<template>
  <div id="app">
    <TheHeader />

    <transition mode="out-in">

      <Calculator v-if="result" key="calculator"/>
      <Result v-else key="CalcResult"/>

    </transition>

  </div>
</template>

<script>

import TheHeader from "@/components/TheHeader.vue";
import Calculator from "@/components/Calculator.vue";
import Result from "@/components/Result.vue";


import { mapState } from "vuex";

export default {

  components: {
    TheHeader,
    Calculator,
    Result
  },
  data() {
     return {};
   },
  computed: mapState(["result"])
}
</script>

<style>

  * {
    box-sizing: border-box;
  }

  body, ul, li, h1, h2, p {
    padding: 0px;
    margin: 0px;
  }

  ul {
    list-style: none;
  }

  body {
    font-family: "Poppins", Arial, sans-serif
  }

  a {
    list-style: none;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  .v-enter-active, .v-leave-active {
    transition: opacity 0.3s;
  }

  .v-enter, .v-leave-to {
    opacity: 0;
  }

  .btn {
    display: block;
    padding: 10px;
    background-color: #ffff00;
    border-radius: 20px;
    text-align: center;
    font-size: 1rem;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
    transition: all 0.3s;
    border: none;
    cursor: pointer;
    font-weight: 800;
    margin: 30px auto 0 auto;
    width: 260px;
    height: 40px;
  }

  .btn:hover {
    color: #ffff00;
    background-color: black;
    transform: scale(1.1);
  }


</style>
