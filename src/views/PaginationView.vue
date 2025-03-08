<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import PaginationApi from '@/features/Pagination/components/PaginationApi/PaginationApi.vue'
import PaginationBasic from '@/features/Pagination/components/PaginationBasic/PaginationBasic.vue'
import PaginationColor from '@/features/Pagination/components/PaginationColor/PaginationColor.vue'
import PaginationContent from '@/features/Pagination/components/PaginationContent/PaginationContent.vue'
import PaginationGhost from '@/features/Pagination/components/PaginationGhost/PaginationGhost.vue'
import PaginationShape from '@/features/Pagination/components/PaginationShape/PaginationShape.vue'
import PaginationSimple from '@/features/Pagination/components/PaginationSimple/PaginationSimple.vue'
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
      <PaginationShape />
      <PaginationGhost />
      <PaginationContent />
      <PaginationSimple />
    </template>
    <template #api>
      <PaginationApi />
    </template>
  </PageLayout>
</template>
