export const carouselAutoPlayCode = `
<script setup lang="ts">
import { Carousel } from '@/components/UI'
import type { CarouselItems } from '@/components/UI/Carousel/type'
import type { StyleValue } from 'vue'

const { Horizontal } = Carousel

const slideNames = {
  slideOne: 'slide-1',
  slideTwo: 'slide-2',
  slideThree: 'slide-3'
} as const

const items: CarouselItems = [
  { id: '1', comName: slideNames.slideOne },
  { id: '2', comName: slideNames.slideTwo },
  { id: '3', comName: slideNames.slideThree }
]

const rootStyle: StyleValue = {
  height: '400px'
}

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
</script>

<template>
  <Horizontal autoPlay :rootStyle="rootStyle" :items="items" slideId="carouselAutoPlay">
    <template #content="item">
      <div v-if="item.slide === slideNames.slideOne" :style="slideStyle">Slide 1</div>
      <div v-if="item.slide === slideNames.slideTwo" :style="slideStyle">Slide 2</div>
      <div v-if="item.slide === slideNames.slideThree" :style="slideStyle">Slide 3</div>
    </template>
  </Horizontal>
</template>
`