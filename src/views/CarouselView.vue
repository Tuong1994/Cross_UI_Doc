<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import CarouselApi from '@/features/Carousel/components/CarouselApi/CarouselApi.vue'
import CarouselProductApi from '@/features/Carousel/components/CarouselApi/CarouselProductApi.vue'
import CarouselItemApi from '@/features/Carousel/components/CarouselApi/CarouselItemApi.vue'
import CarouselAutoPlay from '@/features/Carousel/components/CarouselAutoPlay/CarouselAutoPlay.vue'
import CarouselBasic from '@/features/Carousel/components/CarouselBasic/CarouselBasic.vue'
import CarouselGallery from '@/features/Carousel/components/CarouselGallery/CarouselGallery.vue'
import CarouselProduct from '@/features/Carousel/components/CarouselProduct/CarouselProduct.vue'
import CarouselVertical from '@/features/Carousel/components/CarouselVertical/CarouselVertical.vue'
import CarouselInfinite from '@/features/Carousel/components/Carousellnfinite/CarouselInfinite.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const importCodes = [
  "import { Carousel } from '@/components/UI'",
  'const { Horizontal, Vertical, Product, Gallery } = Carousel'
]
</script>

<template>
  <PageLayout title="Carousel" :importCode="importCodes" :desc="t.lang.carousel.desc">
    <template #showcase>
      <CarouselBasic />
      <CarouselInfinite />
      <CarouselAutoPlay />
      <CarouselVertical />
      <CarouselProduct />
      <CarouselGallery />
    </template>
    <template #api>
      <CarouselApi />
      <CarouselProductApi />
      <CarouselItemApi />
    </template>
  </PageLayout>
</template>
