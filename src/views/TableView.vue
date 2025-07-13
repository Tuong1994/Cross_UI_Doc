<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import TableBasic from '@/features/UI/Table/components/TableBasic/TableBasic.vue'
import TableFilter from '@/features/UI/Table/components/TableFilter/TableFilter.vue'
import TableExpand from '@/features/UI/Table/components/TableExpand/TableExpand.vue'
import TableSelection from '@/features/UI/Table/components/TableSelection/TableSelection.vue'
import TablePagination from '@/features/UI/Table/components/TablePagination/TablePagination.vue'
import TableApi from '@/features/UI/Table/components/TableApi/TableApi.vue'
import TableColumnApi from '@/features/UI/Table/components/TableApi/TableColumnApi.vue'
import TableComponentApi from '@/features/UI/Table/components/TableApi/TableComponentApi.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout title="Table" importCode="import { Table } from @/components/UI" :desc="t.lang.table.desc">
    <template #showcase>
      <TableBasic />
      <TableSelection />
      <TableFilter />
      <TablePagination />
      <TableExpand />
    </template>
    <template #api>
      <TableApi />
      <TableColumnApi />
      <TableComponentApi />
    </template>
  </PageLayout>
</template>
