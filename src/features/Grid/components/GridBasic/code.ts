export const gridBasicCode = `
<script setup lang="ts">
    import { Grid, Card } from '@/components/UI'
</script>

<template>
    <Grid :xs="2" :md="4" :lg="6" :span="8">
        <Card v-for="item in 24"></Card>
    </Grid>
</template>
`
