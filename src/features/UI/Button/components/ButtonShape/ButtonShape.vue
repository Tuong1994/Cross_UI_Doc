<script setup lang="ts">
import { buttonShapeReactCode, buttonShapeVueCode } from './code'
import { Button, Space } from '@/components/UI'
import { buttonCatalogIds } from '../../repository/catalogIds'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const layout = useLayoutStore()
</script>

<template>
  <AnchorContent :id="buttonCatalogIds.SHAPE">
    <ShowCase title="Shape" code="" :vueCode="buttonShapeVueCode" :reactCode="buttonShapeReactCode">
      <Space>
        <Button :color="layout.color" shape="square">Button</Button>
        <Button :color="layout.color" shape="round">Button</Button>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>


