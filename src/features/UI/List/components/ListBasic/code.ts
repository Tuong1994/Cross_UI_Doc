export const listBasicVueCode = `
<script setup lang="ts">
import { UList } from '@/components/UI'

const { List, ListItem } = UList
</script>

<template>
  <List>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
  </List>
</template>
`

export const listBasicReactCode = `
import { UList } from "./components/UI";

const { List, ListItem } = UList;

const App: React.FC = () => {
  return (
    <List>
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