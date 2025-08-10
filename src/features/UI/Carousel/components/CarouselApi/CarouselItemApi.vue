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
    id: 'id',
    props: 'id',
    desc: t.lang.carousel.api.carouselItem.id,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'comName',
    props: 'comName',
    desc: t.lang.carousel.api.carouselItem.comName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'url',
    props: 'url',
    desc: t.lang.carousel.api.carouselItem.url,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'id',
    props: 'id',
    desc: t.lang.carousel.api.carouselItem.id,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'content',
    props: 'content',
    desc: t.lang.carousel.api.carouselItem.content,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ReactNode']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'url',
    props: 'url',
    desc: t.lang.carousel.api.carouselItem.url,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout
    title="Carousel Item"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="carouselCatalogIds.CAROUSEL_ITEM_API"
  />
</template>
