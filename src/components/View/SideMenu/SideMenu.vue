<script setup lang="ts">
import { computed } from 'vue'
import { Typography, Divider } from '@/components/UI'
import type { ItemChild } from './type'
import SideMenuItem from './SideMenuItem.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useMenu from './useMenu'

const { Paragraph } = Typography

const emits = defineEmits<{
  (e: 'onNavigate', payload: ItemChild): void
}>()

const { menus } = useMenu()

const layout = useLayoutStore()

const colorClassName = computed<string>(() => `side-menu-${layout.color}`)

const themeClassName = computed<string>(() => `side-menu-${layout.theme}`)

const handleNavigate = (item: ItemChild) => emits('onNavigate', item)
</script>

<template>
  <div :class="['side-menu', colorClassName, themeClassName]">
    <div v-for="menu in menus" :key="menu.id" class="menu-group">
      <Paragraph strong variant="secondary">{{ menu.category }}</Paragraph>
      <Divider rootClassName="group-divider" />
      <SideMenuItem v-for="item in menu.items" :key="item.id" :item="item" @onClick="handleNavigate(item)" />
    </div>
  </div>
</template>
