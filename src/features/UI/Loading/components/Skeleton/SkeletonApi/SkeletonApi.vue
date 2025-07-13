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
    id: 'type',
    props: 'type',
    desc: t.lang.loading.api.skeletonDesc.type,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['title', 'paragraph', 'image', 'button']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.loading.api.skeletonDesc.rootClassName,
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
    desc: t.lang.loading.api.skeletonDesc.rootStyle,
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
  <TableLayout title="Skeleton" rootClassName="section-space" :dataSource="dataSource" :id="loadingCatalogIds.SKELETON_API" />
</template>
