<script setup lang="ts">
import { Accordion } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { accordionLabelIconReactCode, accordionLabelIconVueCode } from './code'
import { accordionCatalogIds } from '@/features/UI/Accordion/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="accordionCatalogIds.LABEL_ICON">
    <ShowCase title="Label icon" code="" :vueCode="accordionLabelIconVueCode" :reactCode="accordionLabelIconReactCode">
      <Accordion label="Click to collapse" :labelIcon="iconName.CIRCLE_INFO">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate assumenda maxime odit
        eveniet porro cupiditate ullam deleniti non consequatur.
      </Accordion>
    </ShowCase>
  </AnchorContent>
</template>
