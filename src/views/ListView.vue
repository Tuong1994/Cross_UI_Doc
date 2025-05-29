<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import ListApi from '@/features/List/components/ListApi/ListApi.vue'
import ListItemApi from '@/features/List/components/ListApi/ListItemApi.vue'
import ListBasic from '@/features/List/components/ListBasic/ListBasic.vue'
import ListHead from '@/features/List/components/ListHead/ListHead.vue'
import ListIcon from '@/features/List/components/ListIcon/ListIcon.vue'
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
