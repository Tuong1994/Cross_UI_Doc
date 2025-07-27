<script setup lang="ts">
import { Layout, Divider } from '@/components/UI'
import { routePaths } from '@/router'
import type { MenuItems } from '@/components/UI/Layout/Menu/type'
import useLangStore from '@/stores/LangStore'

const { Menu } = Layout

const t = useLangStore()

const items: MenuItems = [
  { id: 'item-1', label: 'Item 1', type: 'text' },
  { id: 'item-2', label: 'Item 2', type: 'text' },
  { id: 'item-3', label: 'Item 3', type: 'text' },
  { id: 'item-4', label: 'Item 4', type: 'text' },
  { id: 'item-5', label: 'Item 5', type: 'link', path: routePaths.LAYOUT }
]
</script>

<template>
  <Divider>{{ t.lang.common.type.horizontal }}</Divider>
  <Menu type="horizontal" :items="items" />
  <Divider>{{ t.lang.common.type.vertical }}</Divider>
  <Menu type="vertical" :items="items" />
</template>
