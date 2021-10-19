<template>
  <div class="container">
    <div>
        <img class="ricklogo" src="../assets/ricklogo.png" alt="">
    </div>
    <div class="cards">
      <div
        class="card"
        v-for="personagem in listPersonagens"
        :key="personagem.index"
      >
        <div class="imagem">
          <img :src="personagem.image" alt="" />
        </div>
        <div class="conteudo">
          <h4 class="name">{{ personagem.name }}</h4>
          <div class="info">
            <span>Status: {{ personagem.status }}</span><br>
            <span>Specie: {{ personagem.species }}</span><br>
            <span>Gender: {{ personagem.gender }}</span><br>
            <span>Origin: {{ personagem.origin.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CardPersonagens",

  async mounted() {
    await this.getPersonagens();
  },

  methods: {
    ...mapActions("personagem", ["getPersonagens"]),
  },
  computed: {
    ...mapGetters("personagem", ["listPersonagens"]),
  },
};
</script>

<style scoped>

.container {
    margin: 0 auto;
    background-color: #24282F;
    padding: 15px 0 15px 0;
}

.ricklogo{
    max-width: 500px;
    margin: 10px;
}

.cards{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background-color: #3C3E44;  
  border: 1px solid #000000;
  border-radius: 10px;
  margin: 10px;
  max-width: 300px;
  color: #FFFFFF;
  overflow: hidden;
}

.name {
    font-size: 25px;
    margin-bottom: 5px;
}

.info{
    margin-bottom: 9px;
}

</style>