export const listHeadVueCode = `
<script setup lang="ts">
import { UList } from '@/components/UI'

const { List, ListItem } = UList
</script>

<template>
  <List>
    <template #head>List title</template>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
  </List>
</template>
`

export const listHeadReactCode = `
import { UList } from "./components/UI";

const { List, ListItem } = UList;

const App: React.FC = () => {
  return (
    <List title="List title">
      <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
      <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
      <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
      <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
      <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
    </List>
  );
};

export default App;
`
