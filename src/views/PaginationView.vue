<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import PaginationBasic from '@/features/Pagination/components/PaginationBasic/PaginationBasic.vue'
import PaginationColor from '@/features/Pagination/components/PaginationColor/PaginationColor.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout
    title="Pagination"
    importCode="import { Pagination } from '@/components/UI'"
    :desc="t.lang.pagination.desc"
  >
    <template #showcase>
      <PaginationBasic />
      <PaginationColor />
    </template>
    <template #api></template>
  </PageLayout>
</template>
