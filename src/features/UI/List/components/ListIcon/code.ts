export const listIconVueCode = `
<script setup lang="ts">
import { UList } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'

const { List, ListItem } = UList
</script>

<template>
  <List :icon="iconName.THUMBS_UP">
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
  </List>
</template>
`

export const listIconReactCode = `
import { FaThumbsUp } from "react-icons/fa";
import { UList } from "./components/UI";

const { List, ListItem } = UList;

const App: React.FC = () => {
  return (
    <List icon={<FaThumbsUp />}>
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