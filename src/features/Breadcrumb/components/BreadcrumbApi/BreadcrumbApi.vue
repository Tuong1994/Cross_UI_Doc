<script setup lang="ts">
import { computed } from 'vue'
import { breadcrumbCatalogIds } from '@/features/Breadcrumb/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'items',
    props: 'items',
    desc: t.lang.breadcrumb.api.breadcrumbDesc.items,
    type: {
      elType: ECodeElType.ANCHOR,
      link: breadcrumbCatalogIds.BREADCRUMB_ITEM_API,
      codes: ['BreadcrumbItems']
    },
    required: t.lang.common.required.yes,
    default: '[]'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.breadcrumb.api.breadcrumbDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'itemClassName',
    props: 'itemClassName',
    desc: t.lang.breadcrumb.api.breadcrumbDesc.itemClassName,
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
    desc: t.lang.breadcrumb.api.breadcrumbDesc.rootStyle,
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
    desc: t.lang.breadcrumb.api.breadcrumbDesc.itemStyle,
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
    title="Breadcrumb"
    rootClassName="section-space"
    :dataSource="dataSource"
    :id="breadcrumbCatalogIds.BREADCRUMB_API"
  />
</template>
