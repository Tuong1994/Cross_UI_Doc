<script setup lang="ts">
import { Button, Space } from '@/components/UI'
import { buttonSizeReactCode, buttonSizeVueCode } from './code'
import { buttonCatalogIds } from '../../repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const layout = useLayoutStore()
</script>

<template>
  <AnchorContent :id="buttonCatalogIds.SIZE">
    <ShowCase title="Size" :vueCode="buttonSizeVueCode" :reactCode="buttonSizeReactCode">
      <Space>
        <Button :color="layout.color" sizes="sm">Button</Button>
        <Button :color="layout.color" sizes="md">Button</Button>
        <Button :color="layout.color" sizes="lg">Button</Button>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>


