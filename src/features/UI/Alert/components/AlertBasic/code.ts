export const alertBasicCode = `
<script setup lang="ts">
import { Alert, Button } from '@/components/UI'
import useAlert from '@/components/UI/Alert/useAlert'

const alertApi = useAlert()
</script>

<template>
  <Button color="blue" @click="() => alertApi.info('This is a message')">Show alert</Button>
  <Alert />
</template>
`
