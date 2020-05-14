<template>
<div class="reviews-section">
  <div class="container"> 
    <div class="slider-reviews-wrp">
      <div class="ttl-section">Отзывы о Барселоне</div>
      <div class="slider-border">
      <div class="slider">
        <carousel :perPage="2" :loop="true" :mouse-drag="true">
            <slide v-for="(slide, index) in slider" :key="index" @slideclick="numSlideClick(index)">
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
                class="img-light" 
                @click="openGallery(index1)" >
                
                <div :class="{ 'opacity' : index1 === 3}"> + {{media[index].length-4}}</div>
                <img :src="image.thumb"
                      >
              </div>
            </div>
            <div class="sl-footer">
              <div class="sl-footer-item">около 1 года назад</div>
              <div class="sl-footer-item sl-footer-item2">9 комментариев</div>
              <div class="sl-footer-item sl-footer-item3">9</div>
            </div>
          </div>
            </slide>
        </carousel>
        <LightBox ref="lightbox"
              :media="media[indSl]"
              :show-caption="false"
              :show-light-box="false"
              >
        </LightBox>
      </div>
      </div>
      <a href="#" class="link-all-rev">Все отзывы</a>
    </div>
  </div>
</div>
</template>
<script>
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'
import {Carousel, Slide} from 'vue-carousel'

export default {
    name: 'AppRevCarousel',
    components: { 
      LightBox: () => import("vue-image-lightbox"),
      Carousel,
      Slide
    },
    
    data() {
      return {
        indSl: 0,
        arrayL: null,
        media: {0:[{ 
          thumb: require('../assets/rev/IMG_2299.jpg'),
          src: require('../assets/rev/IMG_2299-b.jpg')
        },
        { 
          thumb: require('../assets/rev/IMG_2299.jpg'),
          src: require('../assets/rev/IMG_2299-b.jpg'),
        },
         { 
          thumb: require('../assets/rev/IMG_2299.jpg'),
          src: require('../assets/rev/IMG_2299-b.jpg'),
        },
         { 
          thumb: require('../assets/rev/IMG_2299.jpg'),
          src: require('../assets/rev/IMG_2299-b.jpg'),
        },
         { 
          thumb: require('../assets/rev/IMG_2299.jpg'),
          src: require('../assets/rev/IMG_2299-b.jpg'),
        }],
        1:[{ 
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675-b.jpg'),
        },
        { 
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675-b.jpg'),
         
        },
         { 
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675-b.jpg'),
        },
         {
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675-b.jpg'),
        
        },
         {
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675-b.jpg'),
          
        }],
        2:[{ 
          thumb: require('../assets/rev/IMG_2388.jpg'),
          src: require('../assets/rev/IMG_2388-b.jpg'),
          
        },
        { 
          thumb: require('../assets/rev/IMG_2388.jpg'),
          src: require('../assets/rev/IMG_2388-b.jpg'),
         
        },
         { 
          thumb: require('../assets/rev/IMG_2388.jpg'),
          src: require('../assets/rev/IMG_2388-b.jpg'),
          
        },
         { 
          thumb: require('../assets/rev/IMG_2388.jpg'),
          src: require('../assets/rev/IMG_2388-b.jpg'),
          
        },
         { 
          thumb: require('../assets/rev/IMG_2388.jpg'),
          src: require('../assets/rev/IMG_2388-b.jpg'),
          
        }],
        3:[{
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675-b.jpg'),
          
        },
        { 
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675-b.jpg'),
          
        },
         { 
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675-b.jpg'),
         
        },
         { 
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675-b.jpg'),
         
        },
         { 
          thumb: require('../assets/rev/IMG_2675.jpg'),
          src: require('../assets/rev/IMG_2675-b.jpg'),
        }],
        },
     
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
        
      }
    },
   computed:{
    
   },
    
    methods: {
      openGallery(index) {
        this.$refs.lightbox.showImage(index)
      },
      numSlideClick(dataset){
        return this.indSl = dataset
      }
      
    }
    
}
</script>
<style lang="sass">
@import '../assets/scss/rev'
</style>