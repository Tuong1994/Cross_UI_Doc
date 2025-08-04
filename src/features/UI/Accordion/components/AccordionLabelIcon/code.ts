export const accordionLabelIconVueCode = `
<script setup lang="ts">
import { Accordion } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
</script>

<template>
  <Accordion label="Click to collapse" :labelIcon="iconName.CIRCLE_INFO">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate assumenda maxime odit eveniet
    porro cupiditate ullam deleniti non consequatur.
  </Accordion>
</template>
`

export const accordionLabelIconReactCode = `
import { FaBookmark } from "react-icons/fa";
import { Accordion } from "./components/UI";

const App: React.FC = () => {
  return (
    <Accordion
      label="Click to collapse"
      expandIcon={(collapse: boolean) => {
        console.log(collapse);
        return <FaBookmark />;
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate assumenda maxime odit eveniet
      porro cupiditate ullam deleniti non consequatur.
    </Accordion>
  );
};

export default App;

`