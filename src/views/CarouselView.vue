<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import CarouselApi from '@/features/UI/Carousel/components/CarouselApi/CarouselApi.vue'
import CarouselProductApi from '@/features/UI/Carousel/components/CarouselApi/CarouselProductApi.vue'
import CarouselItemApi from '@/features/UI/Carousel/components/CarouselApi/CarouselItemApi.vue'
import CarouselAutoPlay from '@/features/UI/Carousel/components/CarouselAutoPlay/CarouselAutoPlay.vue'
import CarouselBasic from '@/features/UI/Carousel/components/CarouselBasic/CarouselBasic.vue'
import CarouselGallery from '@/features/UI/Carousel/components/CarouselGallery/CarouselGallery.vue'
import CarouselProduct from '@/features/UI/Carousel/components/CarouselProduct/CarouselProduct.vue'
import CarouselVertical from '@/features/UI/Carousel/components/CarouselVertical/CarouselVertical.vue'
import CarouselInfinite from '@/features/UI/Carousel/components/Carousellnfinite/CarouselInfinite.vue'
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
