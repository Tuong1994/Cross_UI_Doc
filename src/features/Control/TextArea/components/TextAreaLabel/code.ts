export const textareaLabelCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { TextArea } from '@/components/Control'
</script>

<template>
  <Space>
    <TextArea color="green">
      <template #label>TextArea</template>
    </TextArea>
    <TextArea color="green" optional>
      <template #label>TextArea optional</template>
    </TextArea>
    <TextArea color="green" required>
      <template #label>TextArea required</template>
    </TextArea>
  </Space>
</template>
`