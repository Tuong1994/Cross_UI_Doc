<script setup lang="ts">
import { computed } from 'vue'
import { alertCatalogIds } from '@/features/Alert/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.alert.api.alertDesc.rootClassName,
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
    desc: t.lang.alert.api.alertDesc.rootStyle,
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
  <TableLayout title="Alert" :dataSource="dataSource" :id="alertCatalogIds.ALERT_API" />
</template>
