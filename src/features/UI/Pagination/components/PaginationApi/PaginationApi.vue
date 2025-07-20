<script setup lang="ts">
import { computed } from 'vue'
import { paginationCatalogIds } from '../../repository/catalogIds'
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
    desc: t.lang.pagination.api.paginationDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType()
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'shape',
    props: 'shape',
    desc: t.lang.pagination.api.paginationDesc.shape,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getShapeType()
    },
    required: t.lang.common.required.no,
    default: 'round'
  },
  {
    id: 'total',
    props: 'total',
    desc: t.lang.pagination.api.paginationDesc.total,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '100'
  },
  {
    id: 'limit',
    props: 'limit',
    desc: t.lang.pagination.api.paginationDesc.limit,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '10'
  },
  {
    id: 'ghost',
    props: 'ghost',
    desc: t.lang.pagination.api.paginationDesc.ghost,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'false'
  },
  {
    id: 'simple',
    props: 'simple',
    desc: t.lang.pagination.api.paginationDesc.simple,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'false'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.pagination.api.paginationDesc.rootClassName,
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
    desc: t.lang.pagination.api.paginationDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onChangePage',
    props: '@onChangePage',
    desc: t.lang.pagination.api.paginationDesc.onChangePage,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(page: number) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout title="Pagination" :dataSource="dataSource" :id="paginationCatalogIds.PAGINATION_API" />
</template>
