<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import PaginationApi from '@/features/UI/Pagination/components/PaginationApi/PaginationApi.vue'
import PaginationBasic from '@/features/UI/Pagination/components/PaginationBasic/PaginationBasic.vue'
import PaginationColor from '@/features/UI/Pagination/components/PaginationColor/PaginationColor.vue'
import PaginationContent from '@/features/UI/Pagination/components/PaginationContent/PaginationContent.vue'
import PaginationGhost from '@/features/UI/Pagination/components/PaginationGhost/PaginationGhost.vue'
import PaginationShape from '@/features/UI/Pagination/components/PaginationShape/PaginationShape.vue'
import PaginationSimple from '@/features/UI/Pagination/components/PaginationSimple/PaginationSimple.vue'
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
