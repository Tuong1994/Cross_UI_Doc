<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import TableBasic from '@/features/Table/Basic/TableBasic.vue'
import TableExpand from '@/features/Table/TableExpand/TableExpand.vue'
import TableSelection from '@/features/Table/TableSelection/TableSelection.vue';
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout title="Table" importCode="import { Table } from @/components/UI" :desc="t.lang.table.desc">
    <TableBasic />
    <TableSelection />
    <TableExpand />
  </PageLayout>
</template>
