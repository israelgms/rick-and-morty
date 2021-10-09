<template>
  <div class="home">
    <h1>home</h1>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

import { mapActions } from 'vuex'

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
  }
}
</script>
