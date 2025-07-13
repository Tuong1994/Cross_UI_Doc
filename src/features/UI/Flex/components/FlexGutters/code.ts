export const flexGuttersCode = `
<script setup lang="ts">
import { Flex, Card } from '@/components/UI'

const { FlexRow, FlexCol } = Flex
</script>

<template>
  <FlexRow :gutters="[20, 25]">
    <FlexCol v-for="item in 10" :key="item" :span="6">
      <Card />
    </FlexCol>
  </FlexRow>
</template>
`
