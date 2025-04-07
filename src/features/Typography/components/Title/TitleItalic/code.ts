export const titleItalicCode = `
<script setup lang="ts">
import { Typography } from '@/components/UI'

const { Title } = Typography
</script>

<template>
    <Title italic :level="1">Heading</Title>
    <Title italic :level="2">Heading</Title>
    <Title italic :level="3">Heading</Title>
    <Title italic :level="4">Heading</Title>
    <Title italic :level="5">Heading</Title>
    <Title italic :level="6">Heading</Title>
</template>
`
