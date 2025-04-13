<script setup lang="ts">
import { computed } from 'vue'
import { dividerCatalogIds } from '@/features/Divider/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import useLangStore from '@/stores/LangStore'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'

const t = useLangStore()

// rootClassName?: string
//   rootStyle?: StyleValue
//   type?: DividerType
//   placement?: ContentPlacement
//   plain?: boolean

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'type',
    props: 'type',
    desc: t.lang.divider.api.dividerDesc.type,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['horizontal', 'vertical']
    },
    required: t.lang.common.required.no,
    default: 'horizontal'
  },
  {
    id: 'placement',
    props: 'placement',
    desc: t.lang.divider.api.dividerDesc.placement,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['left', 'center', 'right']
    },
    required: t.lang.common.required.no,
    default: 'left'
  },
  {
    id: 'plain',
    props: 'plain',
    desc: t.lang.divider.api.dividerDesc.plain,
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
    desc: t.lang.divider.api.dividerDesc.rootClassName,
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
    desc: t.lang.divider.api.dividerDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
])
</script>

<template>
  <TableLayout title="Divider" :dataSource="dataSource" :id="dividerCatalogIds.DIVIDER_API" />
</template>
