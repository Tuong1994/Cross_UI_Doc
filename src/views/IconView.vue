<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import IconBasic from '@/features/UI/Icon/components/IconBasic/IconBasic.vue'
import IconUsage from '@/features/UI/Icon/components/IconUsage/IconUsage.vue'
import IconApi from '@/features/UI/Icon/components/IconApi/IconApi.vue'

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
