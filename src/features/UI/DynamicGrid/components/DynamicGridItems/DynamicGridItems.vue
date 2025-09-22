<script setup lang="ts">
import { DynamicGrid, Divider, Image } from '@/components/UI'
import { dynamicGridItemsReactCode, dynamicGridItemsVueCode } from './code'
import { dynamicGridCatalogIds } from '@/features/UI/DynamicGrid/repository/catalogIds'
import type { DynamicGridItems } from '@/components/UI/DynamicGrid/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import useLangStore from '@/stores/LangStore'

const items: DynamicGridItems = [
  { id: '1', comName: 'item 1' },
  { id: '2', comName: 'item 2' },
  { id: '3', comName: 'item 3' },
  { id: '4', comName: 'item 4' },
  { id: '5', comName: 'item 5' },
  { id: '6', comName: 'item 6' },
  { id: '7', comName: 'item 7' },
  { id: '8', comName: 'item 8' }
]

const src = 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1'

const t = useLangStore()
</script>

<template>
  <AnchorContent :id="dynamicGridCatalogIds.ITEMS">
    <ShowCase title="Items" :vueCode="dynamicGridItemsVueCode" :reactCode="dynamicGridItemsReactCode">
      <Divider>{{ t.lang.dynamicGrid.items.oneItem }}</Divider>
      <DynamicGrid :items="items.slice(0, 1)" :rootStyle="{ width: '250px' }">
        <template #content="item">
          <Image v-if="item.comName === 'item 1'" imgWidth="100%" imgHeight="100%" :src="src" />
        </template>
      </DynamicGrid>
      <Divider>{{ t.lang.dynamicGrid.items.twoItems }}</Divider>
      <DynamicGrid :items="items.slice(0, 2)" :rootStyle="{ width: '250px' }">
        <template #content="item">
          <Image v-if="item.comName === 'item 1'" imgWidth="100%" imgHeight="100%" :src="src" />
          <Image v-if="item.comName === 'item 2'" imgWidth="100%" imgHeight="100%" :src="src" />
        </template>
      </DynamicGrid>
      <Divider>{{ t.lang.dynamicGrid.items.threeItems }}</Divider>
      <DynamicGrid :items="items.slice(0, 3)" :rootStyle="{ width: '250px' }">
        <template #content="item">
          <Image v-if="item.comName === 'item 1'" imgWidth="100%" imgHeight="100%" :src="src" />
          <Image v-if="item.comName === 'item 2'" imgWidth="100%" imgHeight="100%" :src="src" />
          <Image v-if="item.comName === 'item 3'" imgWidth="100%" imgHeight="100%" :src="src" />
        </template>
      </DynamicGrid>
      <Divider>{{ t.lang.dynamicGrid.items.fourItems }}</Divider>
      <DynamicGrid :items="items.slice(0, 4)" :rootStyle="{ width: '250px' }">
        <template #content="item">
          <Image v-if="item.comName === 'item 1'" imgWidth="100%" imgHeight="100%" :src="src" />
          <Image v-if="item.comName === 'item 2'" imgWidth="100%" imgHeight="100%" :src="src" />
          <Image v-if="item.comName === 'item 3'" imgWidth="100%" imgHeight="100%" :src="src" />
          <Image v-if="item.comName === 'item 4'" imgWidth="100%" imgHeight="100%" :src="src" />
        </template>
      </DynamicGrid>
      <Divider>{{ t.lang.dynamicGrid.items.moreFiveItems }}</Divider>
      <DynamicGrid :items="items" :rootStyle="{ width: '300px' }">
        <template #contentLeft="item">
          <Image v-if="item.comName === 'item 1'" imgWidth="100%" imgHeight="100%" :src="src" />
          <Image v-if="item.comName === 'item 2'" imgWidth="100%" imgHeight="100%" :src="src" />
        </template>
        <template #contentRight="item">
          <Image v-if="item.comName === 'item 3'" imgWidth="100%" imgHeight="100%" :src="src" />
          <Image v-if="item.comName === 'item 4'" imgWidth="100%" imgHeight="100%" :src="src" />
          <Image v-if="item.comName === 'item 5'" imgWidth="100%" imgHeight="100%" :src="src" />
        </template>
      </DynamicGrid>
    </ShowCase>
  </AnchorContent>
</template>
