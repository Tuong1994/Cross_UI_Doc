<script setup lang="ts">
import { Button, Space } from '@/components/UI'
import { buttonCatalogIds } from '../../repository/catalogIds'
import { buttonLoadingCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="buttonCatalogIds.LOADING">
    <ShowCase title="Loading" :code="buttonLoadingCode">
      <Space>
        <Button loading color="blue">Button</Button>
        <Button loading color="green">Button</Button>
        <Button loading color="red">Button</Button>
        <Button loading color="orange">Button</Button>
        <Button loading color="yellow">Button</Button>
        <Button loading color="purple">Button</Button>
        <Button loading color="pink">Button</Button>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
