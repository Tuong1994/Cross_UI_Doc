<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import TabsHorizontal from '@/features/Tabs/components/TabsHorizontal/TabsHorizontal.vue';
import TabsVertical from '@/features/Tabs/components/TabsVertical/TabsVertical.vue';
</script>

<template>
  <PageLayout title="Tabs" importCode="import { Tabs } from '@/components/UI'">
    <template #showcase>
      <TabsHorizontal />
      <TabsVertical />
    </template>
  </PageLayout>
</template>
