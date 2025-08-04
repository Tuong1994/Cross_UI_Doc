<script setup lang="ts">
import { computed } from 'vue'
import { tableCatalogIds } from '../../repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'node',
    props: 'node',
    desc: t.lang.table.api.componentDesc.node,
    type: {
      codes: ['any'],
      elType: ECodeElType.DEFAULT
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'slotContent',
    props: 'slotContent',
    desc: t.lang.table.api.componentDesc.slotContent,
    type: {
      codes: ['any | undefined'],
      elType: ECodeElType.DEFAULT
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'props',
    props: 'props',
    desc: t.lang.table.api.componentDesc.props,
    type: {
      codes: ['any | undefined'],
      elType: ECodeElType.DEFAULT
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout
    title="Table Component (Vue)"
    :multiple="false"
    :id="tableCatalogIds.COMPONENT_API"
    :dataSource="dataSource"
  />
</template>
