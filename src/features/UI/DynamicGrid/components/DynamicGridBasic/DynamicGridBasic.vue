<script setup lang="ts">
import { DynamicGrid, Image } from '@/components/UI'
import { dynamicGridCatalogIds } from '@/features/UI/DynamicGrid/repository/catalogIds'
import { dynamicGridBasicReactCode, dynamicGridBasicVueCode } from './code'
import type { DynamicGridItems } from '@/components/UI/DynamicGrid/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const items: DynamicGridItems = [
  { id: '1', comName: 'item 1' },
  { id: '2', comName: 'item 2' },
  { id: '3', comName: 'item 3' },
  { id: '4', comName: 'item 4' },
  { id: '5', comName: 'item 5' }
]

const src = 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1'
</script>

<template>
  <AnchorContent :id="dynamicGridCatalogIds.BASIC">
    <ShowCase title="Basic" :vueCode="dynamicGridBasicVueCode" :reactCode="dynamicGridBasicReactCode">
      <DynamicGrid :items="items" :rootStyle="{ width: '250px' }">
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
