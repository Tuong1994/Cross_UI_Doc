export const inputPhoneCode = `
<script setup lang="ts">
import { ref } from 'vue'
import { InputPhone } from '@/components/Control'

const phone = ref<string>('')
</script>

<template>
  <InputPhone v-model="phone" :rootStyle="{ width: '250px' }" color="green" />
</template>
`