<script setup lang="ts">
import { computed } from 'vue'
import { loadingCatalogIds } from '@/features/UI/Loading/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'color',
    props: 'color',
    desc: t.lang.loading.api.spinnerDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType('white', 'black')
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'size',
    props: 'size',
    desc: t.lang.loading.api.spinnerDesc.size,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '15'
  },
  {
    id: 'type',
    props: 'type',
    desc: t.lang.loading.api.spinnerDesc.type,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['default', 'bubble']
    },
    required: t.lang.common.required.no,
    default: 'default'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.loading.api.spinnerDesc.rootClassName,
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
  <TableLayout title="Spinner" rootClassName="section-space" :dataSource="dataSource" :id="loadingCatalogIds.SPINNER_API" />
</template>
