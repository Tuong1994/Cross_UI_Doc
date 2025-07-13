<script setup lang="ts">
import { computed } from 'vue'
import { loadingCatalogIds } from '@/features/UI/Loading/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'width',
    props: 'width',
    desc: t.lang.loading.api.skeletonTypeDesc.width,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number', 'string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'height',
    props: 'height',
    desc: t.lang.loading.api.skeletonTypeDesc.height,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number', 'string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'shape',
    props: 'shape',
    desc: t.lang.loading.api.skeletonTypeDesc.shape,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['square', 'round']
    },
    required: t.lang.common.required.no,
    default: 'square'
  }
])
</script>

<template>
  <TableLayout
    title="Skeleton Title"
    rootClassName="section-space"
    :dataSource="dataSource"
    :id="loadingCatalogIds.SKELETON_TITLE_API"
  />
</template>
