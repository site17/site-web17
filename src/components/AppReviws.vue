<template>
<div class="reviews-section">
  <div class="container"> 
    <div class="slider-reviews-wrp">
      <div class="ttl-section">Отзывы о Барселоне</div>
      <div class="slider-border">
      <div class="slider">
      <VueSlickCarousel v-bind="settings">
        
        
        <div class="slide-item" v-for="(slide, index) in slider" :key="index">
          
          <div class="slide-contain">
            <div class="sl-header">
              <div class="img-wr">
                <img :src="slide.userImg" alt="user">
              </div>
              <div class="name">{{ slide.name }}</div>
            </div>
            <div class="sl-body">
              <div class="ttl"><b>{{slide.title}}</b>— О городе:</div>
              <div class="text">{{ slide.text }}</div>
            </div>
            <div class="sl-imgs">
           
        <div v-for="(image, index1) in media[index].slice(0, 4)"
          :key="index1"
          class="img-light">
          
          <div :class="{ 'opacity' : index1 === 3}"> + {{media[index].length-4}}</div>
          <img :src="image.src"
            @click="openGallery(index1)">
            </div>
            
      
            </div>
            <LightBox ref="lightbox"
                        :media="media[index]"
                        :show-caption="true"
                        :show-light-box="false"
                        :album_class="index">
              </LightBox>
            <div class="sl-footer">
              <div class="sl-footer-item">около 1 года назад</div>
              <div class="sl-footer-item sl-footer-item2">9 комментариев</div>
              <div class="sl-footer-item sl-footer-item3">9</div>
            </div>
          </div>
          
        </div>
      
        
      </VueSlickCarousel>
      
      </div>
      </div>
      <a href="#" class="link-all-rev">Все отзывы</a>
    </div>
  </div>
</div>
</template>
<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'
import VueSlickCarousel from 'vue-slick-carousel'
import LightBox from 'vue-image-lightbox'

export default {
    name: 'AppReviews',
    components: { 
      VueSlickCarousel,
      LightBox
    },
    data() {
      return {
        arrayL: null,
        slider:{
        0:{
          name:'Наталия Полянская',
          userImg:require('../assets/rev/admin.png'),
          title:'БАРСЕЛОНА',
          text:'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
        },
        1:{
          name:'Лена Одинцова',
          userImg:require('../assets/rev/admin.png'),
          title:'БАРСЕЛОНА',
          text:'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
        },
        2:{
          name:'Лена Одинцова',
          userImg:require('../assets/rev/admin.png'),
          title:'БАРСЕЛОНА',
          text:'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
        },
        3:{
          name:'Лена Одинцова',
          userImg:require('../assets/rev/admin.png'),
          title:'БАРСЕЛОНА',
          text:'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
        }},
        media: {0:[{ // For image
          thumb: require('../assets/rev/IMG_2299.jpg'),
          src: require('../assets/rev/IMG_2299.jpg'),
          caption: 'caption to display. receive <html> <b>tag</b>', // Optional
          srcset: '' // Optional for displaying responsive images
        },
        { // For image
          thumb: require('../assets/rev/IMG_2299.jpg'),
          src: require('../assets/rev/IMG_2299.jpg'),
          caption: 'caption to display. receive <html> <b>tag</b>', // Optional
          srcset: '' // Optional for displaying responsive images
        },
         { // For image
          thumb: require('../assets/rev/IMG_2299.jpg'),
          src: require('../assets/rev/IMG_2299.jpg'),
          caption: 'caption to display. receive <html> <b>tag</b>', // Optional
          srcset: '' // Optional for displaying responsive images
        },
         { // For image
          thumb: require('../assets/rev/IMG_2299.jpg'),
          src: require('../assets/rev/IMG_2299.jpg'),
          caption: 'caption to display. receive <html> <b>tag</b>', // Optional
          srcset: '' // Optional for displaying responsive images
        },
         { // For image
          thumb: require('../assets/rev/IMG_2299.jpg'),
          src: require('../assets/rev/IMG_2299.jpg'),
          caption: 'caption to display. receive <html> <b>tag</b>', // Optional
          srcset: '' // Optional for displaying responsive images
        }],
        1:[{ // For image
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675.jpg'),
          caption: '', // Optional
          srcset: '' // Optional for displaying responsive images
        },
        { // For image
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675.jpg'),
          caption: '', // Optional
          srcset: '' // Optional for displaying responsive images
        },
         { // For image
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675.jpg'),
          caption: '', // Optional
          srcset: '' // Optional for displaying responsive images
        },
         { // For image
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675.jpg'),
          caption: '', // Optional
          srcset: '' // Optional for displaying responsive images
        },
         { // For image
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675.jpg'),
          caption: '', // Optional
          srcset: '' // Optional for displaying responsive images
        }],
        2:[{ // For image
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675.jpg'),
          caption: '', // Optional
          srcset: '' // Optional for displaying responsive images
        },
        { // For image
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675.jpg'),
          caption: '', // Optional
          srcset: '' // Optional for displaying responsive images
        },
         { // For image
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675.jpg'),
          caption: '', // Optional
          srcset: '' // Optional for displaying responsive images
        },
         { // For image
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675.jpg'),
          caption: '', // Optional
          srcset: '' // Optional for displaying responsive images
        },
         { // For image
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675.jpg'),
          caption: '', // Optional
          srcset: '' // Optional for displaying responsive images
        }],
        3:[{ // For image
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675.jpg'),
          caption: '', // Optional
          srcset: '' // Optional for displaying responsive images
        },
        { // For image
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675.jpg'),
          caption: '', // Optional
          srcset: '' // Optional for displaying responsive images
        },
         { // For image
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675.jpg'),
          caption: '', // Optional
          srcset: '' // Optional for displaying responsive images
        },
         { // For image
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675.jpg'),
          caption: '', // Optional
          srcset: '' // Optional for displaying responsive images
        },
         { // For image
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675.jpg'),
          caption: '', // Optional
          srcset: '' // Optional for displaying responsive images
        }],
        },
        settings: {
          "focusOnSelect": false,
          // "centerPadding": "20px",
          "infinite": true,
          // "lazyLoad": "ondemand",
          "arrows": false,
          "dots": true,
          "slidesToShow": 2,
          "slidesToScroll": 1,
          "swipeToSlide": true
        },
      }
    },
    
    methods: {
      openGallery(index) {
        this.$refs.lightbox.showImage(index)
      },
      // openLightbox (index) {
      //   this.showLightbox = true
      //   this.$refs.lightbox.showImage(1)
      // },
    }
    
}
</script>
<style lang="sass">
@import '../assets/scss/rev'
</style>