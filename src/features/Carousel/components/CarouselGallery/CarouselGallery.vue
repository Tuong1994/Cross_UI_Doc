<script setup lang="ts">
import { ref, type StyleValue } from 'vue'
import { Carousel, Button } from '@/components/UI'
import { carouselGalleryCode } from './code'
import { carouselCatalogIds } from '@/features/Carousel/repository/catalogIds'
import type { CarouselItems } from '@/components/UI/Carousel/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Gallery } = Carousel

const slideNames = {
  slideOne: 'slide-1',
  slideTwo: 'slide-2',
  slideThree: 'slide-3'
} as const

const items: CarouselItems = [
  {
    id: '1',
    comName: slideNames.slideOne,
    url: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1'
  },
  {
    id: '2',
    comName: slideNames.slideTwo,
    url: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1'
  },
  {
    id: '3',
    comName: slideNames.slideThree,
    url: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1'
  }
]

const slideStyle: StyleValue = {
  width: '100%',
  height: '100%',
  background: '#444',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '5px solid #ddd',
  color: '#fff'
}

const open = ref<boolean>(false)

const handleOpen = () => (open.value = !open.value)
</script>

<template>
  <AnchorContent :id="carouselCatalogIds.GALLERY">
    <ShowCase title="Gallery" :code="carouselGalleryCode">
      <Button @click="handleOpen">Open gallery</Button>
      <Gallery :open="open" :items="items" slideId="carouselGallery" @onClose="handleOpen">
        <template #content="item">
          <div v-if="item.slide === slideNames.slideOne" :style="slideStyle">Slide 1</div>
          <div v-if="item.slide === slideNames.slideTwo" :style="slideStyle">Slide 2</div>
          <div v-if="item.slide === slideNames.slideThree" :style="slideStyle">Slide 3</div>
        </template>
      </Gallery>
    </ShowCase>
  </AnchorContent>
</template>
