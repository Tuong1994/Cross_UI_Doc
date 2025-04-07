<script setup lang="ts">
import { computed } from 'vue'
import { typographyCatalogIds } from '@/features/Typography/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'level',
    props: 'level',
    desc: t.lang.typography.api.titleDesc.level,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['1', '2', '3', '4', '5', '6']
    },
    required: t.lang.common.required.no,
    default: '1'
  },
  {
    id: 'aligns',
    props: 'aligns',
    desc: t.lang.typography.api.titleDesc.aligns,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['left', 'center', 'right']
    },
    required: t.lang.common.required.no,
    default: 'left'
  },
  {
    id: 'variant',
    props: 'variant',
    desc: t.lang.typography.api.titleDesc.variant,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['default', 'secondary', 'success', 'warning', 'danger']
    },
    required: t.lang.common.required.no,
    default: 'default'
  },
  {
    id: 'weight',
    props: 'weight',
    desc: t.lang.typography.api.titleDesc.weight,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '500'
  },
  {
    id: 'italic',
    props: 'italic',
    desc: t.lang.typography.api.titleDesc.italic,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'underline',
    props: 'underline',
    desc: t.lang.typography.api.titleDesc.underline,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'remove',
    props: 'remove',
    desc: t.lang.typography.api.titleDesc.remove,
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
    desc: t.lang.typography.api.titleDesc.rootClassName,
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
    desc: t.lang.typography.api.titleDesc.rootStyle,
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
    title="Title"
    rootClassName="section-space"
    :id="typographyCatalogIds.TITLE_API"
    :dataSource="dataSource"
  />
</template>
