<script setup lang="ts">
import { Carousel } from '@/components/UI'
import { carouselCatalogIds } from '@/features/UI/Carousel/repository/catalogIds'
import { carouselProductReactCode, carouselProductVueCode } from './code'
import type { StyleValue } from 'vue'
import type { CarouselItems } from '@/components/UI/Carousel/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Product } = Carousel

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
  <AnchorContent :id="carouselCatalogIds.PRODUCT">
    <ShowCase title="Product" code="" :vueCode="carouselProductVueCode" :reactCode="carouselProductReactCode">
      <Product :rootStyle="rootStyle" :items="items" slideId="carouselProduct">
        <template #content="item">
          <div v-if="item.slide === slideNames.slideOne" :style="slideStyle">Slide 1</div>
          <div v-if="item.slide === slideNames.slideTwo" :style="slideStyle">Slide 2</div>
          <div v-if="item.slide === slideNames.slideThree" :style="slideStyle">Slide 3</div>
        </template>
      </Product>
    </ShowCase>
  </AnchorContent>
</template>
