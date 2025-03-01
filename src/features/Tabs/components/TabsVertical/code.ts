export const tabsVerticalCode = `
<script setup lang="ts">
import { Tabs } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'

const tabItems = [
  { id: 'item-1', label: 'Item 1', comName: 'item-1', labelIcon: iconName.USER },
  { id: 'item-2', label: 'Item 2', comName: 'item-2', labelIcon: iconName.USER },
  { id: 'item-3', label: 'Item 3', comName: 'item-3', labelIcon: iconName.USER }
]
</script>

<template>
  <Tabs type="vertical" :items="tabItems">
    <template #content="tab">
      <div v-if="tab.content.comName === 'item-1'">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium voluptates quibusdam sit non.
        Tenetur, cupiditate. Deserunt, laborum modi odio sed repellat illum autem recusandae voluptatum
        accusamus libero fuga exercitationem quisquam eveniet blanditiis labore, ex, molestiae atque facere
        quod maxime odit quae? Voluptates accusantium beatae consequuntur possimus voluptatibus iure fuga
        blanditiis?
      </div>
      <div v-if="tab.content.comName === 'item-2'">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus veniam, illo, cupiditate sint hic
        inventore dolor quaerat nihil quos incidunt soluta dolores esse, suscipit obcaecati. Ratione esse
        similique velit id.
      </div>
      <div v-if="tab.content.comName === 'item-3'">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore nesciunt cumque veniam labore optio
        sunt rerum totam expedita harum quisquam?
      </div>
    </template>
  </Tabs>
</template>
`