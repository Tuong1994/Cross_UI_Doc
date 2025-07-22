export const inputLabelCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { Input } from '@/components/Control'
</script>

<template>
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
</template>
`