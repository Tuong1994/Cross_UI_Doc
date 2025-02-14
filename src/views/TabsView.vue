<script setup lang="ts">
import { iconName } from '@/components/UI/Icon/constant'

const tabItems = [
  { id: 'item-1', label: 'Item 1', comName: 'item-1', labelIcon: iconName.USER },
  { id: 'item-2', label: 'Item 2', comName: 'item-2', labelIcon: iconName.USER },
  { id: 'item-3', label: 'Item 3', comName: 'item-3', labelIcon: iconName.USER }
]
</script>

<template>
  <!-- <Tabs :items="tabItems">
          <template #content="tab">
            <div v-if="tab.content.comName === 'item-1'">Content 1</div>
            <div v-if="tab.content.comName === 'item-2'">Content 2</div>
            <div v-if="tab.content.comName === 'item-3'">Content 3</div>
          </template>
        </Tabs>

        <Tabs type="vertical" :items="tabItems">
          <template #content="tab">
            <div v-if="tab.content.comName === 'item-1'">Content 1</div>
            <div v-if="tab.content.comName === 'item-2'">Content 2</div>
            <div v-if="tab.content.comName === 'item-3'">Content 3</div>
          </template>
        </Tabs> -->
</template>
