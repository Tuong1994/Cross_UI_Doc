export const imageFeaturesCode = `
<script setup lang="ts">
import { Image, Divider } from '@/components/UI'
</script>

<template>
  <Divider> Checkbox </Divider>
  <Image
    hasCheck
    checkboxColor="green"
    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1"
    :imgWidth="150"
    :imgHeight="150"
  />
  <Divider> Viewer </Divider>
  <Image
    hasView
    hasRemove
    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1"
    :imgWidth="150"
    :imgHeight="150"
  />
</template>
`
