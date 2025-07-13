export const spinnerBasicCode = `
<script setup lang="ts">
import { Loading, Space } from '@/components/UI'

const { Spinner } = Loading
</script>

<template>
    <Space aligns="middle">
        <Spinner />
        <Spinner color="blue" />
        <Spinner color="green" :size="30" />
    </Space>
</template>
`