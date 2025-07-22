export const inputBasicCode = `
<script setup lang="ts">
import { ref } from 'vue'
import { Space } from '@/components/UI'
import { Input } from '@/components/Control'

const inputValue = ref<string>('')
</script>

<template>
  <Space>
    <Input v-model="inputValue" color="green" />
    <Input color="green" disabled />
  </Space>
</template>
`