<template>
  <div>
    <TheHeader />
      <div class="container">
        <TheNav />
        <TheMain />
      </div>
    </div>
   
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheNav from './components/layout/TheNav.vue'
import TheMain from './components/layout/TheMain.vue'

export default {
  name: 'App',
  components: {
      TheHeader,
      TheNav,
      TheMain,
    
  } 
}
</script>

<style>
@import url("./css/main.css");
</style>
