<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { Typography } from '@/components/UI'
import type { ItemChild } from './type'

const { Paragraph } = Typography

interface SideMenuItemProps {
  item: ItemChild
}

const props = defineProps<SideMenuItemProps>()

const emits = defineEmits<{
  (e: 'onClick', payload: ItemChild): void
}>()

const { currentRoute } = useRouter()

const isSelected = computed<boolean>(() => currentRoute.value.name === props.item.id)

const selectedClassName = computed<string>(() => (isSelected.value ? 'group-item-selected' : ''))

const handleClick = (item: ItemChild) => emits('onClick', item)
</script>

<template>
  <RouterLink :to="String(item.path)" :class="['group-item', selectedClassName]" @click="handleClick(item)">
    <Paragraph :size="13">
      {{ item.label }}
    </Paragraph>
  </RouterLink>
</template>
