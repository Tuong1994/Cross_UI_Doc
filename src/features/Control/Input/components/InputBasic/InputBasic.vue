<script setup lang="ts">
import { ref } from 'vue'
import { Space } from '@/components/UI'
import { Input } from '@/components/Control'
import { inputBasicReactCode, inputBasicVueCode } from './code'
import { inputCatalogIds } from '@/features/Control/Input/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const inputValue = ref<string>('')
</script>

<template>
  <AnchorContent :id="inputCatalogIds.BASIC">
    <ShowCase title="Basic" code="" :vueCode="inputBasicVueCode" :reactCode="inputBasicReactCode">
      <Space>
        <Input v-model="inputValue" color="green" />
        <Input color="green" disabled />
        <Input color="green">
          <template #addonBefore>
            <span>$</span>
          </template>
        </Input>
        <Input color="green">
          <template #addonAfter>
            <span>#</span>
          </template>
        </Input>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>

