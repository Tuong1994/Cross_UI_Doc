<script setup lang="ts">
import { Dropdown, Button } from '@/components/UI'
import { dropdownTriggerCode } from './code'
import { dropdownCatalogIds } from '@/features/UI/Dropdown/repository/catalogIds'
import type { DropdownItems } from '@/components/UI/Dropdown/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const items: DropdownItems = [
  { id: 'item-1', comName: 'item-1' },
  { id: 'item-2', comName: 'item-2' },
  { id: 'item-3', comName: 'item-3' }
]
</script>

<template>
  <AnchorContent :id="dropdownCatalogIds.TRIGGER">
    <ShowCase title="Trigger" :code="dropdownTriggerCode">
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
    </ShowCase>
  </AnchorContent>
</template>
