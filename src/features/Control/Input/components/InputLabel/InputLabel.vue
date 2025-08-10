<script setup lang="ts">
import { Space } from '@/components/UI'
import { Input } from '@/components/Control'
import { inputCatalogIds } from '@/features/Control/Input/repository/catalogIds'
import { inputLabelReactCode, inputLabelVueCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="inputCatalogIds.LABEL">
    <ShowCase title="Label" :vueCode="inputLabelVueCode" :reactCode="inputLabelReactCode">
      <Space>
        <Input color="green">
          <template #label>Input</template>
        </Input>
        <Input color="green" optional>
          <template #label>Input optional</template>
        </Input>
        <Input color="green" required>
          <template #label>Input required</template>
        </Input>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
