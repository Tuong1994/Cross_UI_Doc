<script setup lang="ts">
import { computed } from 'vue'
import { carouselCatalogIds } from '@/features/UI/Carousel/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'items',
    props: 'items',
    desc: t.lang.carousel.api.carouselProductApi.items,
    type: {
      elType: ECodeElType.ANCHOR,
      link: carouselCatalogIds.CAROUSEL_ITEM_API,
      codes: ['CarouselItems']
    },
    required: t.lang.common.required.no,
    default: '[]'
  },
  {
    id: 'slideId',
    props: 'slideId',
    desc: t.lang.carousel.api.carouselProductApi.slideId,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'infinite',
    props: 'infinite',
    desc: t.lang.carousel.api.carouselProductApi.infinite,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'autoPlay',
    props: 'autoPlay',
    desc: t.lang.carousel.api.carouselProductApi.autoPlay,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'hasManualStop',
    props: 'hasManualStop',
    desc: t.lang.carousel.api.carouselProductApi.hasManualStop,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'time',
    props: 'time',
    desc: t.lang.carousel.api.carouselProductApi.time,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'prevButtonIcon',
    props: 'prevButtonIcon',
    desc: t.lang.carousel.api.carouselProductApi.prevButtonIcon,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'nextButtonIcon',
    props: 'nextButtonIcon',
    desc: t.lang.carousel.api.carouselProductApi.nextButtonIcon,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'mode',
    props: 'mode',
    desc: t.lang.carousel.api.carouselProductApi.mode,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['dark', 'light']
    },
    required: t.lang.common.required.no,
    default: 'dark'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.carousel.api.carouselProductApi.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootStyle',
    props: 'rootStyle',
    desc: t.lang.carousel.api.carouselProductApi.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'items',
    props: 'items',
    desc: t.lang.carousel.api.carouselProductApi.items,
    type: {
      elType: ECodeElType.ANCHOR,
      link: carouselCatalogIds.CAROUSEL_ITEM_API,
      codes: ['CarouselItems']
    },
    required: t.lang.common.required.no,
    default: '[]'
  },
  {
    id: 'slideId',
    props: 'slideId',
    desc: t.lang.carousel.api.carouselProductApi.slideId,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'infinite',
    props: 'infinite',
    desc: t.lang.carousel.api.carouselProductApi.infinite,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'autoPlay',
    props: 'autoPlay',
    desc: t.lang.carousel.api.carouselProductApi.autoPlay,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'hasManualStop',
    props: 'hasManualStop',
    desc: t.lang.carousel.api.carouselProductApi.hasManualStop,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'time',
    props: 'time',
    desc: t.lang.carousel.api.carouselProductApi.time,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'prevButtonIcon',
    props: 'prevButtonIcon',
    desc: t.lang.carousel.api.carouselProductApi.prevButtonIcon,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'nextButtonIcon',
    props: 'nextButtonIcon',
    desc: t.lang.carousel.api.carouselProductApi.nextButtonIcon,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'mode',
    props: 'mode',
    desc: t.lang.carousel.api.carouselProductApi.mode,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['dark', 'light']
    },
    required: t.lang.common.required.no,
    default: 'dark'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.carousel.api.carouselProductApi.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootStyle',
    props: 'style',
    desc: t.lang.carousel.api.carouselProductApi.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
])
</script>

<template>
  <TableLayout
    title="Carousel Product/Gallery"
    rootClassName="section-space"
    :dataSource="[]"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="carouselCatalogIds.CAROUSEL_PRODUCT_GALLERY_API"
  />
</template>
