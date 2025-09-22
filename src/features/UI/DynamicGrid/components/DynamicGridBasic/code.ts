export const dynamicGridBasicVueCode = `
<script setup lang="ts">
import { DynamicGrid, Image } from '@/components/UI'
import type { DynamicGridItems } from '@/components/UI/DynamicGrid/type'

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
</template>
`

export const dynamicGridBasicReactCode = `
import { DynamicGrid, Image } from "./components/UI";

const App: React.FC = () => {
  return (
    <DynamicGrid
      items={[
        { id: "1", node: <Image imgWidth="100%" imgHeight="100%" /> },
        { id: "2", node: <Image imgWidth="100%" imgHeight="100%" /> },
        { id: "3", node: <Image imgWidth="100%" imgHeight="100%" /> },
        { id: "4", node: <Image imgWidth="100%" imgHeight="100%" /> },
        { id: "5", node: <Image imgWidth="100%" imgHeight="100%" /> },
      ]}
    />
  );
};

export default App;
`