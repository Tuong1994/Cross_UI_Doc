<script setup lang="ts">
import { computed } from 'vue'
import { badgeCatalogIds } from '@/features/UI/Badge/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'color',
    props: 'color',
    desc: t.lang.badge.api.badgeDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['blue', 'red', 'green', 'orange', 'yellow', 'purple', 'pink']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'shape',
    props: 'shape',
    desc: t.lang.badge.api.badgeDesc.shape,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['square', 'round']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'ghost',
    props: 'ghost',
    desc: t.lang.badge.api.badgeDesc.ghost,
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
    desc: t.lang.badge.api.badgeDesc.rootClassName,
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
    desc: t.lang.badge.api.badgeDesc.rootStyle,
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
  <TableLayout title="Badge" :id="badgeCatalogIds.BADGE_API" :dataSource="dataSource" />
</template>
