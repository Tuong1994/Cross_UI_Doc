<script setup lang="ts">
import { Button, Space } from '@/components/UI'
import { buttonBasicReactCode, buttonBasicVueCode } from './code'
import { buttonCatalogIds } from '../../repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="buttonCatalogIds.BASIC">
    <ShowCase title="Basic" :vueCode="buttonBasicVueCode" :reactCode="buttonBasicReactCode">
      <Space>
        <Button>Button</Button>
        <Button ghost>Button</Button>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>


