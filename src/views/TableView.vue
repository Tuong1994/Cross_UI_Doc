<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import TableBasic from '@/features/Table/components/TableBasic/TableBasic.vue'
import TableFilter from '@/features/Table/components/TableFilter/TableFilter.vue'
import TableExpand from '@/features/Table/components/TableExpand/TableExpand.vue'
import TableSelection from '@/features/Table/components/TableSelection/TableSelection.vue'
import TablePagination from '@/features/Table/components/TablePagination/TablePagination.vue'
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
