<script setup lang="ts">
import { computed } from 'vue'
import { Loading, Space } from '@/components/UI'
import { spinnerColorCode } from './code'
import { loadingCatalogIds } from '@/features/UI/Loading/repository/catalogIds'
import type { ComponentColor } from '@/common/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Spinner } = Loading

const colors = computed<ComponentColor[]>(() => [
  'blue',
  'green',
  'red',
  'orange',
  'yellow',
  'purple',
  'pink',
  'gray'
])
</script>

<template>
  <AnchorContent :id="loadingCatalogIds.SPINNER_COLOR">
    <ShowCase title="Spinner color" :code="spinnerColorCode">
      <Space>
        <Spinner v-for="color in colors" :key="color" :color="color" :size="30" />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
