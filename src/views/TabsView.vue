<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import TabsHorizontal from '@/features/Tabs/components/TabsHorizontal/TabsHorizontal.vue';
</script>

<template>
  <PageLayout title="Tabs" importCode="import { Tabs } from '@/components/UI'">
    <template #showcase>
      <TabsHorizontal />
    </template>
  </PageLayout>
</template>
