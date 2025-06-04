export const accordionLabelIconCode = `
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
