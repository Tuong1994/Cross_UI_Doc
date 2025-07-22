export const textareaBasicCode = `
<script setup lang="ts">
import { ref } from 'vue'
import { TextArea } from '@/components/Control'

const inputValue = ref<string>('')
</script>

<template>
  <TextArea v-model="inputValue" rootClassName="section-space" color="green" />
  <TextArea color="green" disabled />
</template>
`