<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import TabsApi from '@/features/UI/Tabs/components/TabsApi/TabsApi.vue';
import TabsItemApi from '@/features/UI/Tabs/components/TabsApi/TabsItemApi.vue';
import TabsHorizontal from '@/features/UI/Tabs/components/TabsHorizontal/TabsHorizontal.vue';
import TabsVertical from '@/features/UI/Tabs/components/TabsVertical/TabsVertical.vue';
import useLangStore from '@/stores/LangStore';

const t = useLangStore()
</script>

<template>
  <PageLayout title="Tabs" importCode="import { Tabs } from '@/components/UI'" :desc="t.lang.tabs.desc">
    <template #showcase>
      <TabsHorizontal />
      <TabsVertical />
    </template>
    <template #api>
      <TabsApi />
      <TabsItemApi />
    </template>
  </PageLayout>
</template>
