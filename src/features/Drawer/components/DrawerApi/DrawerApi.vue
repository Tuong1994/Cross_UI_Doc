<script setup lang="ts">
import { computed } from 'vue'
import { drawerCatalogIds } from '@/features/Drawer/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'open',
    props: 'open',
    desc: t.lang.drawer.api.drawerDesc.open,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'full',
    props: 'full',
    desc: t.lang.drawer.api.drawerDesc.full,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'hasHead',
    props: 'hasHead',
    desc: t.lang.drawer.api.drawerDesc.hasHead,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.drawer.api.drawerDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'headClassName',
    props: 'headClassName',
    desc: t.lang.drawer.api.drawerDesc.headClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'bodyClassName',
    props: 'bodyClassName',
    desc: t.lang.drawer.api.drawerDesc.bodyClassName,
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
    desc: t.lang.drawer.api.drawerDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'headStyle',
    props: 'headStyle',
    desc: t.lang.drawer.api.drawerDesc.headStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'bodyStyle',
    props: 'bodyStyle',
    desc: t.lang.drawer.api.drawerDesc.bodyStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onClose',
    props: 'onClose',
    desc: t.lang.drawer.api.drawerDesc.onClose,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['() => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout title="Drawer" :dataSource="dataSource" :id="drawerCatalogIds.DRAWER_API" />
</template>
