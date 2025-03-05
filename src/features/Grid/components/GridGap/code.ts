export const gridGapCode = `
<script setup lang="ts">
    import { Grid, Card } from '@/components/UI'
</script>

<template>
  <Grid :gap="[20, 40]" :xs="2" :md="4" :lg="6" :span="8">
    <Card v-for="item in 24"></Card>
  </Grid>
</template>
`
