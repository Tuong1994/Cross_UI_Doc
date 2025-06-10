export const toastBasicCode = `
<script setup lang="ts">
import { ToastMessage, Button } from '@/components/UI'
import useMessage from '@/components/UI/ToastMessage/useMessage'

const messageApi = useMessage()
</script>

<template>
  <Button color="green" @click="messageApi.success('This is a success message')">Show message</Button>
  <ToastMessage />
</template>
`