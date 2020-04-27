<template>
  <div class="calculator">

    <form @submit.prevent="handleSubmit">
      <div>
        <label>Peso</label>

        <div class="input">
          <input v-model="newWeight"  @change="handleChange('changeWeight', newWeight)" type="number" min="35" max="200" />
          <label>kg</label>
        </div>
        </div>

      <div>
        <label>Altura</label>
        <div class="input">
        <input v-model="newHeight" @change="handleChange('changeHeight', newHeight)" type="number" min="100" max="300" />
        <label>cm</label>
        </div>
      </div>

      <div>
        <label>Idade</label>
        <div class="input">
          <input v-model="newAge"  @change="handleChange('changeAge', newAge)" type="number" min="18" max="75" />
          <label>anos</label>
        </div>
      </div>


      <button type="submit"  class="btn">Calcular Macronutrientes</button>
    </form>

    </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
   name: "Calculator",

    data() {
      return {
        newWeight: 0,
        newHeight: 0,
        newAge: 0
      }
    },

   computed: mapState(["weight", "height", "age", "prot", "carb", "fat", "cal"]),
   methods: {
      handleChange(func, pay) {
        this.$store.commit(func, pay);
      },
      handleSubmit() {
        if(this.weight > 0 && this.height > 0 && this.age > 0) {

          this.$store.commit("protCalc", Math.round(this.weight * 1.4));
          this.$store.commit("carbCalc", this.weight * 4);
          this.$store.commit("fatCalc", Math.round(this.weight * .7));
          this.$store.commit("calCalc", this.prot * 4 + this.carb * 4 + this.fat * 8);

          this.$store.commit("changeResult", false);
        }
      }
    }
  };
</script>

<style scoped>
  .calculator {
    margin: 0 auto;
    width: 242px;
    display: flex;
    flex-direction: column;
    justify-contnet: center;

  }

  form {
    width: 240px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
  }

  form div {
    font-weight: 500;
    font-size: 1.115rem;
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .input {
    margin: 0;
    border: 1px solid black;
    border-radius: 10px;
    width: 95px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

  .input input {
    font-size: 1rem;
    font-weight: bold;
    border: none;
    height: 20px;
    width: 35px;
  }

</style>
