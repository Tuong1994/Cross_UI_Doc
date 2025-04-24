export const dropdownTriggerCode = `
<script setup lang="ts">
import { Dropdown, Button } from '@/components/UI'
import type { DropdownItems } from '@/components/UI/Dropdown/type'

const items: DropdownItems = [
  { id: 'item-1', comName: 'item-1' },
  { id: 'item-2', comName: 'item-2' },
  { id: 'item-3', comName: 'item-3' }
]
</script>

<template>
  <Dropdown :items="items" trigger="click">
    <template #label>
      <Button>Click to dropdown</Button>
    </template>
    <template #item="com">
      <div v-if="com.item === 'item-1'">Item 1</div>
      <div v-if="com.item === 'item-2'">Item 2</div>
      <div v-if="com.item === 'item-3'">Item 3</div>
    </template>
  </Dropdown>
  <Dropdown :items="items" trigger="hover">
    <template #label>
      <Button>Hover to dropdown</Button>
    </template>
    <template #item="com">
      <div v-if="com.item === 'item-1'">Item 1</div>
      <div v-if="com.item === 'item-2'">Item 2</div>
      <div v-if="com.item === 'item-3'">Item 3</div>
    </template>
  </Dropdown>
</template>
`
