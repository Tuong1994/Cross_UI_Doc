<script setup lang="ts">
import { Tabs } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { tabsBasicReactCode, tabsBasicVueCode } from './code'
import { tabsCatalogIds } from '@/features/UI/Tabs/respository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const layout = useLayoutStore()

const tabItems = [
  { id: 'item-1', label: 'Item 1', comName: 'item-1', labelIcon: iconName.USER },
  { id: 'item-2', label: 'Item 2', comName: 'item-2', labelIcon: iconName.USER },
  { id: 'item-3', label: 'Item 3', comName: 'item-3', labelIcon: iconName.USER }
]
</script>

<template>
  <AnchorContent :id="tabsCatalogIds.BASIC">
    <ShowCase title="Basic" code="" :vueCode="tabsBasicVueCode" :reactCode="tabsBasicReactCode">
      <Tabs :color="layout.color" :items="tabItems">
        <template #content="tab">
          <div v-if="tab.content.comName === 'item-1'">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore laborum labore, iure
            deleniti neque beatae asperiores suscipit cum adipisci excepturi impedit architecto culpa mollitia
            ratione doloribus modi quisquam autem enim perspiciatis molestias necessitatibus qui cupiditate.
            Expedita, saepe fugiat autem reprehenderit tempore dolor cumque sit corporis numquam, similique
            excepturi laborum.
          </div>
          <div v-if="tab.content.comName === 'item-2'">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sapiente id cupiditate ducimus
            laudantium, quo aspernatur nam eius qui iste!
          </div>
          <div v-if="tab.content.comName === 'item-3'">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eius animi nihil consectetur quae
            illum unde ab totam magni nesciunt.
          </div>
        </template>
      </Tabs>
    </ShowCase>
  </AnchorContent>
</template>
