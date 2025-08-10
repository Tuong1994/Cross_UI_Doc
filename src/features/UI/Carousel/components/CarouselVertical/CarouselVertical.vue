<script setup lang="ts">
import { Carousel } from '@/components/UI'
import { carouselCatalogIds } from '@/features/UI/Carousel/repository/catalogIds'
import { carouselVerticalReactCode, carouselVerticalVueCode } from './code'
import type { StyleValue } from 'vue'
import type { CarouselItems } from '@/components/UI/Carousel/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Vertical } = Carousel

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
  <AnchorContent :id="carouselCatalogIds.VERTICAL">
    <ShowCase title="Vertical" :vueCode="carouselVerticalVueCode" :reactCode="carouselVerticalReactCode">
      <Vertical infinite :rootStyle="rootStyle" :items="items" slideId="carouselVertical">
        <template #content="item">
          <div v-if="item.slide === slideNames.slideOne" :style="slideStyle">Slide 1</div>
          <div v-if="item.slide === slideNames.slideTwo" :style="slideStyle">Slide 2</div>
          <div v-if="item.slide === slideNames.slideThree" :style="slideStyle">Slide 3</div>
        </template>
      </Vertical>
    </ShowCase>
  </AnchorContent>
</template>
