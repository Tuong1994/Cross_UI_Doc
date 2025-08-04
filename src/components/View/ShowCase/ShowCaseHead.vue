<script setup lang="ts">
import { defineProps } from 'vue'
import { Typography } from '@/components/UI'

const { Paragraph } = Typography

interface ShowCaseHeadProps {
  title?: string
  onlyCode?: boolean
}

defineProps<ShowCaseHeadProps>()
</script>

<template>
  <Paragraph v-if="!onlyCode" :size="16" :weight="600">
    {{ title }}
  </Paragraph>
  <slot v-else name="head"></slot>
</template>
