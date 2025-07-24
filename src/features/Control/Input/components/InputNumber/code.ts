export const inputNumberCode = `
<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@/components/Control'

const nums = ref<number>(0)
</script>

<template>
  <InputNumber v-model="nums" :rootStyle="{ width: '250px' }" color="green" />
</template>
`