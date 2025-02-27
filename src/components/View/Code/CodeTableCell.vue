<script setup lang="ts">
import { computed, defineProps, withDefaults, type StyleValue } from 'vue'
import { Badge, Button, Space } from '@/components/UI'
import { RouterLink } from 'vue-router'

export interface CodeTableCellProps {
  codes: string[]
  elType?: 'default' | 'anchor'
  link?: string
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
      <a v-else-if="elType === 'anchor'" :href="`#${link}`">
        <Button sizes="sm" color="blue">
          {{ code }}
        </Button>
      </a>
      <RouterLink v-else :to="link as string">
        <Button sizes="sm" color="blue">
          {{ code }}
        </Button>
      </RouterLink>
      <span v-if="idx !== codes.length - 1">|</span>
    </Space>
  </Space>
</template>
