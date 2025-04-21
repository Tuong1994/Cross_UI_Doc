<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import BreadcrumbApi from '@/features/Breadcrumb/components/BreadcrumbApi/BreadcrumbApi.vue'
import BreadcrumbItemApi from '@/features/Breadcrumb/components/BreadcrumbApi/BreadcrumbItemApi.vue'
import BreadcrumbBasic from '@/features/Breadcrumb/components/BreadcrumbBasic/BreadcrumbBasic.vue'
import BreadcrumbIcon from '@/features/Breadcrumb/components/BreadcrumbIcon/BreadcrumbIcon.vue'
import BreadcrumbLink from '@/features/Breadcrumb/components/BreadcrumbLink/BreadcrumbLink.vue'
import BreadcrumbSeparator from '@/features/Breadcrumb/components/BreadcrumbSeparator/BreadcrumbSeparator.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout
    title="Breadcrumb"
    importCode="import { Breadcrumb } from '@/components/UI'"
    :desc="t.lang.breadcrumb.desc"
  >
    <template #showcase>
      <BreadcrumbBasic />
      <BreadcrumbIcon />
      <BreadcrumbLink />
      <BreadcrumbSeparator />
    </template>
    <template #api>
      <BreadcrumbApi />
      <BreadcrumbItemApi />
    </template>
  </PageLayout>
</template>
