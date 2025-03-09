<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import IconBasic from '@/features/Icon/components/IconBasic/IconBasic.vue'
import IconUsage from '@/features/Icon/components/IconApi/IconUsage/IconUsage.vue'
import IconApi from '@/features/Icon/components/IconApi/IconApi.vue'

const importCodes = [
  "import { Icon } from '@/components/UI'",
  "import { iconName } from '@/components/UI/Icon/constant'"
]
</script>

<template>
  <PageLayout title="Icon" :importCode="importCodes">
    <template #showcase>
      <IconBasic />
      <IconUsage />
    </template>
    <template #api>
      <IconApi />
    </template>
  </PageLayout>
</template>
