export const dropdownPlacementCode = `
<script setup lang="ts">
import { Dropdown, Divider, Button } from '@/components/UI'
import type { DropdownItems } from '@/components/UI/Dropdown/type'

const items: DropdownItems = [
  { id: 'item-1', comName: 'item-1' },
  { id: 'item-2', comName: 'item-2' },
  { id: 'item-3', comName: 'item-3' }
]
</script>

<template>
  <Divider>Left</Divider>
  <Dropdown :items="items" placement="left">
    <template #label>
      <Button>Dropdown</Button>
    </template>
    <template #item="com">
      <div v-if="com.item === 'item-1'">Item option 1</div>
      <div v-if="com.item === 'item-2'">Item option 2</div>
      <div v-if="com.item === 'item-3'">Item option 3</div>
    </template>
  </Dropdown>
  <Divider>Right</Divider>
  <Dropdown :items="items" placement="right">
    <template #label>
      <Button>Dropdown</Button>
    </template>
    <template #item="com">
      <div v-if="com.item === 'item-1'">Item option 1</div>
      <div v-if="com.item === 'item-2'">Item option 2</div>
      <div v-if="com.item === 'item-3'">Item option 3</div>
    </template>
  </Dropdown>
</template>
`
