<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { Typography } from '@/components/UI'
import type { ItemChild } from './type'

const { Paragraph } = Typography

interface SideMenuItemProps {
  item: ItemChild
}

const props = defineProps<SideMenuItemProps>()

const { currentRoute } = useRouter()

const isSelected = computed<boolean>(() => false)

const selectedClassName = computed<string>(() => (isSelected.value ? 'group-item-selected' : ''))
</script>

<template>
  <RouterLink :to="String(item.path)" :class="['group-item', selectedClassName]">
    <Paragraph :size="13">
      {{ item.label }}
    </Paragraph>
  </RouterLink>
</template>
