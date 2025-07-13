<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import ListApi from '@/features/UI/List/components/ListApi/ListApi.vue'
import ListItemApi from '@/features/UI/List/components/ListApi/ListItemApi.vue'
import ListBasic from '@/features/UI/List/components/ListBasic/ListBasic.vue'
import ListHead from '@/features/UI/List/components/ListHead/ListHead.vue'
import ListIcon from '@/features/UI/List/components/ListIcon/ListIcon.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const importCodes = ['import { UList } from "@/components/UI"', 'const { List, ListItem } = UList']
</script>

<template>
  <PageLayout title="List" :importCode="importCodes" :desc="t.lang.list.desc">
    <template #showcase>
      <ListBasic />
      <ListHead />
      <ListIcon />
    </template>
    <template #api>
      <ListApi />
      <ListItemApi />
    </template>
  </PageLayout>
</template>
