<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import TableBasic from '@/features/Table/Basic/TableBasic.vue'
import TableFilter from '@/features/Table/TableFilter/TableFilter.vue'
import TableExpand from '@/features/Table/TableExpand/TableExpand.vue'
import TableSelection from '@/features/Table/TableSelection/TableSelection.vue'
import TablePagination from '@/features/Table/TablePagination/TablePagination.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout title="Table" importCode="import { Table } from @/components/UI" :desc="t.lang.table.desc">
    <TableBasic />
    <TableSelection />
    <TableFilter />
    <TablePagination />
    <TableExpand />
  </PageLayout>
</template>
