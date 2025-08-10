<script setup lang="ts">
import { computed } from 'vue'
import { layoutCatalogIds } from '@/features/UI/Layout/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'id',
    props: 'id',
    desc: t.lang.layout.api.menuItemDesc.id,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'label',
    props: 'label',
    desc: t.lang.layout.api.menuItemDesc.label,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'labelIcon',
    props: 'labelIcon',
    desc: t.lang.layout.api.menuItemDesc.labelIcon,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'type',
    props: 'type',
    desc: t.lang.layout.api.menuItemDesc.type,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['text', 'link']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'path',
    props: 'path',
    desc: t.lang.layout.api.menuItemDesc.path,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'isRoot',
    props: 'isRoot',
    desc: t.lang.layout.api.menuItemDesc.isRoot,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'children',
    props: 'children',
    desc: t.lang.layout.api.menuItemDesc.children,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['MenuItems']
    },
    required: t.lang.common.required.no,
    default: '[]'
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'id',
    props: 'id',
    desc: t.lang.layout.api.menuItemDesc.id,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'label',
    props: 'label',
    desc: t.lang.layout.api.menuItemDesc.label,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ReactNode']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'labelIcon',
    props: 'icon',
    desc: t.lang.layout.api.menuItemDesc.labelIcon,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ReactNode']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'children',
    props: 'children',
    desc: t.lang.layout.api.menuItemDesc.children,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['MenuItems']
    },
    required: t.lang.common.required.no,
    default: '[]'
  }
])
</script>

<template>
  <TableLayout
    title="MenuItems"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="layoutCatalogIds.MENU_ITEM_API"
  />
</template>
