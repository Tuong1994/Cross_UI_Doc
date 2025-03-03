<script setup lang="ts">
import { Button, Space } from '@/components/UI'
import { buttonColorCode } from './code'
import { buttonCatalogIds } from '../../repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="buttonCatalogIds.COLOR">
    <ShowCase title="Color" :code="buttonColorCode">
      <Space>
        <Button color="blue">Button</Button>
        <Button color="green">Button</Button>
        <Button color="red">Button</Button>
        <Button color="orange">Button</Button>
        <Button color="yellow">Button</Button>
        <Button color="purple">Button</Button>
        <Button color="pink">Button</Button>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
