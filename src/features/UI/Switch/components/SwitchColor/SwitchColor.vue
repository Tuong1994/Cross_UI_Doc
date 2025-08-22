<script setup lang="ts">
import { Space, Switch } from '@/components/UI'
import { switchCatalogIds } from '@/features/UI/Switch/repository/catalogIds'
import { switchColorReactCode, switchColorVueCode } from './code'
import type { SwitchColor } from '@/components/UI/Switch/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'

const handleSwitch = (switched: boolean) => {
  console.log(switched)
}
</script>

<template>
  <AnchorContent :id="switchCatalogIds.COLOR">
    <ShowCase title="color" :vueCode="switchColorVueCode" :reactCode="switchColorReactCode">
      <Space>
        <Switch
          v-for="color in helper.getColorType()"
          :key="color"
          :color="color as SwitchColor"
          switched
          @onSwitch="handleSwitch"
        />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
