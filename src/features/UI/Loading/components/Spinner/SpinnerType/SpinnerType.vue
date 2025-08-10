<script setup lang="ts">
import { computed } from 'vue'
import { Loading, Divider, Space } from '@/components/UI'
import { spinnerTypeReactCode, spinnerTypeVueCode } from './code'
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
  <AnchorContent :id="loadingCatalogIds.SPINNER_TYPE">
    <ShowCase title="Type" :vueCode="spinnerTypeVueCode" :reactCode="spinnerTypeReactCode">
      <Divider>Default</Divider>
      <Space>
        <Spinner v-for="color in colors" :key="color" :color="color" type="default" :size="40" />
      </Space>
      <Divider>Bubble</Divider>
      <Space>
        <Spinner v-for="color in colors" :key="color" :color="color" type="bubble" />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
