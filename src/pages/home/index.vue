<template>
  <div>
    <h1>我是home组件</h1>
    <h1>
      {{weatherObj}}
    </h1>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {mapState} from 'vuex'
export default defineComponent({
  name: "home",
  mounted() {
    this.$store.dispatch('getWeather')
  },
  computed:{
    ...mapState({
      weatherObj :state => state.home.weatherObj
    })
  }

})
</script>



<style scoped>

</style>