<script setup lang="ts">
import { computed } from 'vue'
import { ECodeElType } from '@/components/View/Code/enum'
import { spaceCatalogIds } from '@/features/UI/Space/repository/catalogIds'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'justify',
    props: 'justify',
    desc: t.lang.space.api.spaceDesc.justify,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['left', 'center', 'right']
    },
    required: t.lang.common.required.no,
    default: 'left'
  },
  {
    id: 'aligns',
    props: 'aligns',
    desc: t.lang.space.api.spaceDesc.aligns,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['top', 'middle', 'bottom']
    },
    required: t.lang.common.required.no,
    default: 'top'
  },
  {
    id: 'size',
    props: 'size',
    desc: t.lang.space.api.spaceDesc.size,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '10'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.space.api.spaceDesc.rootClassName,
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
    desc: t.lang.space.api.spaceDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout title="Space" :dataSource="dataSource" :id="spaceCatalogIds.SPACE_API" />
</template>
