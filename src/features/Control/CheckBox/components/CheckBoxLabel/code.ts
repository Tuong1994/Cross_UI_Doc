export const checkboxLabelCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { CheckBox } from '@/components/Control'
</script>

<template>
  <Space>
    <CheckBox color="green">Checkbox</CheckBox>
    <CheckBox color="green" optional>Checkbox optional</CheckBox>
    <CheckBox color="green" required>Checkbox required</CheckBox>
  </Space>
</template>
`