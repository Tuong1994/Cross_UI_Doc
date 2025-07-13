<script setup lang="ts">
import { computed } from 'vue'
import { flexCatalogIds } from '@/features/UI/Flex/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'justify',
    props: 'justify',
    desc: t.lang.flex.api.flexRowDesc.justify,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['start', 'center', 'end', 'between', 'around', 'evenly']
    },
    required: t.lang.common.required.no,
    default: 'start'
  },
  {
    id: 'aligns',
    props: 'aligns',
    desc: t.lang.flex.api.flexRowDesc.aligns,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['top', 'middle', 'bottom', 'baseline']
    },
    required: t.lang.common.required.no,
    default: 'top'
  },
  {
    id: 'gutters',
    props: 'gutters',
    desc: t.lang.flex.api.flexRowDesc.gutters,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['[number?, number?]']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.flex.api.flexRowDesc.rootClassName,
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
    desc: t.lang.flex.api.flexRowDesc.rootStyle,
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
  <TableLayout
    title="Flex row"
    rootClassName="section-space"
    :dataSource="dataSource"
    :id="flexCatalogIds.FLEX_ROW_API"
  />
</template>
