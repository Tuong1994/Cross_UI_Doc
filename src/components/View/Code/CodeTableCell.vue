<script setup lang="ts">
import { computed, defineProps, withDefaults, type StyleValue } from 'vue'
import { Badge, Button, Space } from '@/components/UI'

interface CodeTableCellProps {
  codes: string[]
  elType?: 'default' | 'anchor'
  size?: number
}

const props = withDefaults(defineProps<CodeTableCellProps>(), {
  size: 12,
  elType: 'default',
  codes: () => []
})

const badgeStyle = computed<StyleValue>(() => ({ fontSize: `${props.size}px` }))
</script>

<template>
  <Space :size="5" aligns="middle">
    <Space v-for="(code, idx) in codes" :key="idx" :size="5" aligns="middle">
      <Badge v-if="elType === 'default'" ghost shape="square" color="pink" :rootStyle="badgeStyle">
        {{ code }}
      </Badge>
      <Button v-else sizes="sm" color="blue">
        {{ code }}
      </Button>
      <span v-if="idx !== codes.length - 1">|</span>
    </Space>
  </Space>
</template>
