<template>
  <div class="result">
    <div>
      <p>Carboidratos</p>
      <span>{{$store.state.carb}} g</span>
    </div>


    <div>
      <p>Proteínas</p>
      <span>{{$store.state.prot}} g</span>
    </div>

    <div>
      <p>Gordura</p>
      <span>{{$store.state.fat}} g</span>
    </div>

    <div>
      <p>Total de calorias</p>
      <span>{{$store.state.cal}} kcal</span>
    </div>

    <button @click="calcReturn" class="btn">Refazer Cálculo</button>

    <button type="submit" @click="goTo('https://www.feitodeiridium.com.br/category/alimentacao/')" class="btn">Blog de Alimentação</button>

    <button type="submit" @click="goTo('https://iridiumlabs.com.br/')" class="btn">Loja da Iridium</button>
  </div>
</template>

<script>
  export default {
    name: "Result",

    methods: {
      calcReturn() {
        this.$store.commit("changeResult", true);
      },
      goTo(url) {
        window.open(url);
      }
    }
  }
</script>

<style>
  .result {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
  }

  .result div {
    margin: 16px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 240px;
  }

</style>
