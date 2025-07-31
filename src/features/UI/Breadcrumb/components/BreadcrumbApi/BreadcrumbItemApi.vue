<script setup lang="ts">
import { computed } from 'vue'
import { breadcrumbCatalogIds } from '@/features/UI/Breadcrumb/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'id',
    props: 'id',
    desc: t.lang.breadcrumb.api.itemDesc.id,
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
    desc: t.lang.breadcrumb.api.itemDesc.label,
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
    desc: t.lang.breadcrumb.api.itemDesc.labelIcon,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'link',
    props: 'link',
    desc: t.lang.breadcrumb.api.itemDesc.link,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'actived',
    props: 'actived',
    desc: t.lang.breadcrumb.api.itemDesc.actived,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'id',
    props: 'id',
    desc: t.lang.breadcrumb.api.itemDesc.id,
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
    desc: t.lang.breadcrumb.api.itemDesc.label,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ReactNode']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'actived',
    props: 'actived',
    desc: t.lang.breadcrumb.api.itemDesc.actived,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout
    title="Breadcrumb Item"
    :dataSource="[]"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="breadcrumbCatalogIds.BREADCRUMB_ITEM_API"
  />
</template>
