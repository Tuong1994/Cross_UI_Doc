<script setup lang="ts">
import { Switch, Space } from '@/components/UI'
import type { ComponentSize } from '@/common/type'
import helper from '@/helper'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import { switchCatalogIds } from '../../repository/catalogIds'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import { switchSizeReactCode, switchSizeVueCode } from './code'

const handleSwitch = (switched: boolean) => {
  console.log(switched)
}
</script>

<template>
  <AnchorContent :id="switchCatalogIds.SIZE">
    <ShowCase title="Size" :vueCode="switchSizeVueCode" :reactCode="switchSizeReactCode">
      <Space aligns="middle">
        <Switch
          v-for="size in helper.getSizeType()"
          :key="size"
          :sizes="size as ComponentSize"
          @onSwitch="handleSwitch"
        />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
