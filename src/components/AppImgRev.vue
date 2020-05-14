<template>


  <!-- <div class="sl-imgs">    
        <div v-for="(image, index1) in media[index].slice(0, 4)"
          :key="index1"
          class="img-light">
          
          <div :class="{ 'opacity' : index1 === 3}"> + {{media.length-4}}</div>
          <img :src="image.src"
            @click="openGallery(index)">
            </div> -->
            
        <LightBox ref="lightbox"
              :media="media[index]"
              :show-caption="true"
              :show-light-box="false"
              >
        </LightBox>
  <!-- </div> -->
 
  <!-- :album_class="index" -->
  
         
</template>
<script>
import LightBox from 'vue-image-lightbox'

export default {
    name: 'AppImgRev',
    components: { 
      LightBox
    },
    props:['media'],
    data() {
      return {
        arrayL: null,
    //     media: {0:[{ // For image
    //       thumb: require('../assets/rev/IMG_2299.jpg'),
    //       src: require('../assets/rev/IMG_2299.jpg'),
    //       caption: 'caption to display. receive <html> <b>tag</b>', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     },
    //     { // For image
    //       thumb: require('../assets/rev/IMG_2299.jpg'),
    //       src: require('../assets/rev/IMG_2299.jpg'),
    //       caption: 'caption to display. receive <html> <b>tag</b>', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     },
    //      { // For image
    //       thumb: require('../assets/rev/IMG_2299.jpg'),
    //       src: require('../assets/rev/IMG_2299.jpg'),
    //       caption: 'caption to display. receive <html> <b>tag</b>', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     },
    //      { // For image
    //       thumb: require('../assets/rev/IMG_2299.jpg'),
    //       src: require('../assets/rev/IMG_2299.jpg'),
    //       caption: 'caption to display. receive <html> <b>tag</b>', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     },
    //      { // For image
    //       thumb: require('../assets/rev/IMG_2299.jpg'),
    //       src: require('../assets/rev/IMG_2299.jpg'),
    //       caption: 'caption to display. receive <html> <b>tag</b>', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     }],
    //     1:[{ // For image
    //       thumb: require('../assets/rev/IMG_2675.jpg'),
    //       src: require('../assets/rev/IMG_2675.jpg'),
    //       caption: '', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     },
    //     { // For image
    //       thumb: require('../assets/rev/IMG_2675.jpg'),
    //       src: require('../assets/rev/IMG_2675.jpg'),
    //       caption: '', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     },
    //      { // For image
    //       thumb: require('../assets/rev/IMG_2675.jpg'),
    //       src: require('../assets/rev/IMG_2675.jpg'),
    //       caption: '', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     },
    //      { // For image
    //       thumb: require('../assets/rev/IMG_2675.jpg'),
    //       src: require('../assets/rev/IMG_2675.jpg'),
    //       caption: '', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     },
    //      { // For image
    //       thumb: require('../assets/rev/IMG_2675.jpg'),
    //       src: require('../assets/rev/IMG_2675.jpg'),
    //       caption: '', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     }],
    //     2:[{ // For image
    //       thumb: require('../assets/rev/IMG_2675.jpg'),
    //       src: require('../assets/rev/IMG_2675.jpg'),
    //       caption: '', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     },
    //     { // For image
    //       thumb: require('../assets/rev/IMG_2675.jpg'),
    //       src: require('../assets/rev/IMG_2675.jpg'),
    //       caption: '', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     },
    //      { // For image
    //       thumb: require('../assets/rev/IMG_2675.jpg'),
    //       src: require('../assets/rev/IMG_2675.jpg'),
    //       caption: '', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     },
    //      { // For image
    //       thumb: require('../assets/rev/IMG_2675.jpg'),
    //       src: require('../assets/rev/IMG_2675.jpg'),
    //       caption: '', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     },
    //      { // For image
    //       thumb: require('../assets/rev/IMG_2675.jpg'),
    //       src: require('../assets/rev/IMG_2675.jpg'),
    //       caption: '', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     }],
    //     3:[{ // For image
    //       thumb: require('../assets/rev/IMG_2675.jpg'),
    //       src: require('../assets/rev/IMG_2675.jpg'),
    //       caption: '', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     },
    //     { // For image
    //       thumb: require('../assets/rev/IMG_2675.jpg'),
    //       src: require('../assets/rev/IMG_2675.jpg'),
    //       caption: '', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     },
    //      { // For image
    //       thumb: require('../assets/rev/IMG_2675.jpg'),
    //       src: require('../assets/rev/IMG_2675.jpg'),
    //       caption: '', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     },
    //      { // For image
    //       thumb: require('../assets/rev/IMG_2675.jpg'),
    //       src: require('../assets/rev/IMG_2675.jpg'),
    //       caption: '', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     },
    //      { // For image
    //       thumb: require('../assets/rev/IMG_2675.jpg'),
    //       src: require('../assets/rev/IMG_2675.jpg'),
    //       caption: '', // Optional
    //       srcset: '' // Optional for displaying responsive images
    //     }],
    //     },
      }
    },
    
    methods: {
      openGallery(index) {
        this.$refs.lightbox.showImage(index)
      },
      
    }
    
}
</script>
<style lang="sass">
@import '../assets/scss/rev'
</style>