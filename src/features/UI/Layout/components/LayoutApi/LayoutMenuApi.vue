<script setup lang="ts">
import { computed } from 'vue'
import { layoutCatalogIds } from '@/features/UI/Layout/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'items',
    props: 'items',
    desc: t.lang.layout.api.menuDesc.items,
    type: {
      elType: ECodeElType.ANCHOR,
      link: layoutCatalogIds.MENU_ITEM_API,
      codes: ['MenuItems']
    },
    required: t.lang.common.required.no,
    default: '[]'
  },
  {
    id: 'type',
    props: 'type',
    desc: t.lang.layout.api.menuDesc.type,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['horizontal', 'vertical']
    },
    required: t.lang.common.required.no,
    default: 'horizontal'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.layout.api.menuDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType()
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.layout.api.commonDesc.rootClassName,
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
    desc: t.lang.layout.api.commonDesc.rootStyle,
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
  <TableLayout title="Menu" :dataSource="dataSource" :id="layoutCatalogIds.MENU_API" />
</template>
