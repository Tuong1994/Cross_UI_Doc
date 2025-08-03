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
    desc: t.lang.carousel.api.carouselApi.items,
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
    desc: t.lang.carousel.api.carouselApi.slideId,
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
    desc: t.lang.carousel.api.carouselApi.infinite,
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
    desc: t.lang.carousel.api.carouselApi.autoPlay,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'hasArrow',
    props: 'hasArrow',
    desc: t.lang.carousel.api.carouselApi.hasArrow,
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
    desc: t.lang.carousel.api.carouselApi.hasManualStop,
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
    desc: t.lang.carousel.api.carouselApi.time,
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
    desc: t.lang.carousel.api.carouselApi.prevButtonIcon,
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
    desc: t.lang.carousel.api.carouselApi.nextButtonIcon,
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
    desc: t.lang.carousel.api.carouselApi.mode,
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
    desc: t.lang.carousel.api.carouselApi.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'prevBtnClassName',
    props: 'prevBtnClassName',
    desc: t.lang.carousel.api.carouselApi.prevBtnClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'nextBtnClassName',
    props: 'nextBtnClassName',
    desc: t.lang.carousel.api.carouselApi.nextBtnClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'dotClassName',
    props: 'dotClassName',
    desc: t.lang.carousel.api.carouselApi.dotClassName,
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
    desc: t.lang.carousel.api.carouselApi.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'prevBtnStyle',
    props: 'prevBtnStyle',
    desc: t.lang.carousel.api.carouselApi.prevBtnStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'nextBtnStyle',
    props: 'nextBtnStyle',
    desc: t.lang.carousel.api.carouselApi.nextBtnStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'dotStyle',
    props: 'dotStyle',
    desc: t.lang.carousel.api.carouselApi.dotStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'itemStyle',
    props: 'itemStyle',
    desc: t.lang.carousel.api.carouselApi.itemStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'items',
    props: 'items',
    desc: t.lang.carousel.api.carouselApi.items,
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
    desc: t.lang.carousel.api.carouselApi.slideId,
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
    desc: t.lang.carousel.api.carouselApi.infinite,
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
    desc: t.lang.carousel.api.carouselApi.autoPlay,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'hasArrow',
    props: 'hasArrow',
    desc: t.lang.carousel.api.carouselApi.hasArrow,
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
    desc: t.lang.carousel.api.carouselApi.hasManualStop,
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
    desc: t.lang.carousel.api.carouselApi.time,
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
    desc: t.lang.carousel.api.carouselApi.prevButtonIcon,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ReactNode']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'nextButtonIcon',
    props: 'nextButtonIcon',
    desc: t.lang.carousel.api.carouselApi.nextButtonIcon,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ReactNode']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'mode',
    props: 'mode',
    desc: t.lang.carousel.api.carouselApi.mode,
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
    desc: t.lang.carousel.api.carouselApi.rootClassName,
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
    desc: t.lang.carousel.api.carouselApi.rootStyle,
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
    title="Carousel"
    rootClassName="section-space"
    :dataSource="[]"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="carouselCatalogIds.CAROUSEL_API"
  />
</template>
