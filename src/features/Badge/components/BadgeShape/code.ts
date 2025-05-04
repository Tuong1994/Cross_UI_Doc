export const badgeShapeCode = `<script setup lang="ts">
import { Space, Badge } from '@/components/UI'

const colors = ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink']
</script>

<template>
    <Space>
        <Badge v-for="color in colors" :key="color" :color="color" shape="square">Badge</Badge>
    </Space>
    <Space>
        <Badge v-for="color in colors" :key="color" :color="color" ghost shape="square">Badge</Badge>
    </Space>
    <Space>
        <Badge v-for="color in colors" :key="color" :color="color" shape="round">Badge</Badge>
    </Space>
    <Space>
        <Badge v-for="color in colors" :key="color" :color="color" ghost shape="round">Badge</Badge>
    </Space>
</template>
`
