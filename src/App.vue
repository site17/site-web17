<template>
  <div id="app">
    <div class="main-section">
      <div class="container">
        <div class="main-column">
          <div class="main-column-img">
            <img src="@/assets/main-section/main-img.jpg" alt="img">
          </div>
          <div class="main-column-text">
            <div class="ttl">Барселона — обзор города</div>
            <div class="text"><read-more more-str="Читать дальше" :text="msg" link="#" less-str="Свернуть" :max-chars="90"></read-more></div>
          </div>
        </div>
      </div> 
    </div>
    <app-rev-carousel/>
    <app-chat/>
  </div>
</template>

<script>
import AppChat from './components/AppChat.vue'
import ReadMore from './components/ReadMoreComponent.vue'
import AppRevCarousel from './components/AppRevCarousel.vue'

export default {
  name: 'App',
  components: {
    AppChat,
    AppRevCarousel,
    ReadMore
  },
  data(){
    return {
      msg: 'Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди, многочисленными фестивалями и гастрономическим разнообразием понравилась мне в первый же день пребывания и стала местом, в котором...'
    }

  }

}
</script>

<style lang="sass">
@import 'assets/scss/main'
</style>
