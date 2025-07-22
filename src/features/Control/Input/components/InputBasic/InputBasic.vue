<script setup lang="ts">
import { ref } from 'vue'
import { Space } from '@/components/UI'
import { Input } from '@/components/Control'
import { inputBasicCode } from './code'
import { inputCatalogIds } from '@/features/Control/Input/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const inputValue = ref<string>('')
</script>

<template>
  <AnchorContent :id="inputCatalogIds.BASIC">
    <ShowCase title="Basic" :code="inputBasicCode">
      <Space>
        <Input v-model="inputValue" color="green" />
        <Input color="green" disabled />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
