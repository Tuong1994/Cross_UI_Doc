export const inputPasswordCode = `
<script setup lang="ts">
import { ref } from 'vue'
import { InputPassword } from '@/components/Control'

const password = ref<string>('')
</script>

<template>
  <InputPassword v-model="password" :rootStyle="{ width: '250px' }" color="green" />
</template>
`