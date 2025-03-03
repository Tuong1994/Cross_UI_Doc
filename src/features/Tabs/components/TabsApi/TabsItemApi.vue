<script setup lang="ts">
import { computed } from 'vue'
import { tabsCatalogIds } from '../../respository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'id',
    props: 'id',
    desc: t.lang.tabs.api.itemDesc.id,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'label',
    props: 'label',
    desc: t.lang.tabs.api.itemDesc.label,
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
    desc: t.lang.tabs.api.itemDesc.comName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'labelIcon',
    props: 'labelIcon',
    desc: t.lang.tabs.api.itemDesc.labelIcon,
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
  <TableLayout title="Item" :dataSource="dataSource" :id="tabsCatalogIds.ITEM_API" />
</template>
