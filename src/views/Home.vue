<template>
  <div class="home">
    <h1>home</h1>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
//importando a Action. 
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted(){
    this.getEpisodios(),
    this.getLocais(),
    this.getPersonagens()
  },
  methods:{
    ...mapActions( 'episodio', ['getEpisodios']),
    ...mapActions( 'local', ['getLocais']),
    ...mapActions( 'personagem', ['getPersonagens'])
  },
  computed:{
    ...mapGetters('episodio', ['listEpisodios']),
    ...mapGetters('local', ['listLocais']),
    ...mapGetters('personagem', ['listPersonagens'])
  }
}
</script>
