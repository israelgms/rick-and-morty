<template>
  <div class="home">
    <h1>home</h1>
    <CardPersonagens />
  </div>
</template>

<script>
import CardPersonagens from '@/components/CardPersonagens.vue'
//importando a Action. 
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    CardPersonagens
  },
  async mounted(){
    await this.getEpisodios(),
    await this.getLocais(),
    await this.getPersonagens()
  },
  methods:{
    ...mapActions( 'episodio', ['getEpisodios']),
    ...mapActions( 'local', ['getLocais']),
  },
  computed:{
    ...mapGetters('episodio', ['listEpisodios']),
    ...mapGetters('local', ['listLocais']),
  }
}
</script>
