<template>
  <div class="home">
    <h1>home</h1>
    <p>{{ personagens.name }}</p>
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
    this.getPersonagens()
  },
  methods:{
    ...mapActions(['getPersonagens'])
  },
  computed:{
    ...mapGetters(['listPersonagens'])
  }
}
</script>
