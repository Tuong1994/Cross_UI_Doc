export const dynamicGridItemsVueCode = `
<script setup lang="ts">
import { DynamicGrid, Divider, Image } from '@/components/UI'
import type { DynamicGridItems } from '@/components/UI/DynamicGrid/type'

const items: DynamicGridItems = [
  { id: '1', comName: 'item 1' },
  { id: '2', comName: 'item 2' },
  { id: '3', comName: 'item 3' },
  { id: '4', comName: 'item 4' },
  { id: '5', comName: 'item 5' },
  { id: '6', comName: 'item 6' },
  { id: '7', comName: 'item 7' },
  { id: '8', comName: 'item 8' },
]

const src = 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1'
</script>

<template>
  <Divider>One item</Divider>
  <DynamicGrid :items="items.slice(0, 1)" :rootStyle="{ width: '250px' }">
    <template #content="item">
      <Image v-if="item.comName === 'item 1'" imgWidth="100%" imgHeight="100%" :src="src" />
    </template>
  </DynamicGrid>
  <Divider>Two items</Divider>
  <DynamicGrid :items="items.slice(0, 2)" :rootStyle="{ width: '250px' }">
    <template #content="item">
      <Image v-if="item.comName === 'item 1'" imgWidth="100%" imgHeight="100%" :src="src" />
      <Image v-if="item.comName === 'item 2'" imgWidth="100%" imgHeight="100%" :src="src" />
    </template>
  </DynamicGrid>
  <Divider>Three items</Divider>
  <DynamicGrid :items="items.slice(0, 3)" :rootStyle="{ width: '250px' }">
    <template #content="item">
      <Image v-if="item.comName === 'item 1'" imgWidth="100%" imgHeight="100%" :src="src" />
      <Image v-if="item.comName === 'item 2'" imgWidth="100%" imgHeight="100%" :src="src" />
      <Image v-if="item.comName === 'item 3'" imgWidth="100%" imgHeight="100%" :src="src" />
    </template>
  </DynamicGrid>
  <Divider>Four items</Divider>
  <DynamicGrid :items="items.slice(0, 4)" :rootStyle="{ width: '250px' }">
    <template #content="item">
      <Image v-if="item.comName === 'item 1'" imgWidth="100%" imgHeight="100%" :src="src" />
      <Image v-if="item.comName === 'item 2'" imgWidth="100%" imgHeight="100%" :src="src" />
      <Image v-if="item.comName === 'item 3'" imgWidth="100%" imgHeight="100%" :src="src" />
      <Image v-if="item.comName === 'item 4'" imgWidth="100%" imgHeight="100%" :src="src" />
    </template>
  </DynamicGrid>
   <Divider>More than five items</Divider>
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
</template>
`

export const dynamicGridItemsReactCode = `
import { DynamicGrid, Divider, Image } from "./components/UI";
import { DynamicGridItems } from "./components/UI/DynamicGrid/type";

const App: React.FC = () => {
  const items: DynamicGridItems = [
    { id: "1", node: <Image imgWidth="100%" imgHeight="100%" /> },
    { id: "2", node: <Image imgWidth="100%" imgHeight="100%" /> },
    { id: "3", node: <Image imgWidth="100%" imgHeight="100%" /> },
    { id: "4", node: <Image imgWidth="100%" imgHeight="100%" /> },
    { id: "5", node: <Image imgWidth="100%" imgHeight="100%" /> },
    { id: "6", node: <Image imgWidth="100%" imgHeight="100%" /> },
    { id: "7", node: <Image imgWidth="100%" imgHeight="100%" /> },
    { id: "8", node: <Image imgWidth="100%" imgHeight="100%" /> },
  ];

  return (
    <>
      <Divider>One item</Divider>
      <DynamicGrid style={{ width: "300px" }} items={items.slice(0, 1)} />
      <Divider>Two items</Divider>
      <DynamicGrid style={{ width: "300px" }} items={items.slice(0, 2)} />
      <Divider>Three items</Divider>
      <DynamicGrid style={{ width: "300px" }} items={items.slice(0, 3)} />
      <Divider>Four items</Divider>
      <DynamicGrid style={{ width: "300px" }} items={items.slice(0, 4)} />
      <Divider>More than five items</Divider>
      <DynamicGrid style={{ width: "300px" }} items={items} />
    </>
  );
};

export default App;
`