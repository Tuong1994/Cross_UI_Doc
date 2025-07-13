export const titleWeightCode = `
<script setup lang="ts">
import { Typography } from '@/components/UI'

const { Title } = Typography
</script>

<template>
    <Title>Heading</Title>
    <Title :weight="800">Heading</Title>
</template>
`