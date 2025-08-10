<script setup lang="ts">
import { Button, Space } from '@/components/UI'
import { buttonColorReactCode, buttonColorVueCode } from './code'
import { buttonCatalogIds } from '@/features/UI/Button/repository/catalogIds'
import type { ButtonColor } from '@/components/UI/Button/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
</script>

<template>
  <AnchorContent :id="buttonCatalogIds.COLOR">
    <ShowCase title="Color" :vueCode="buttonColorVueCode" :reactCode="buttonColorReactCode">
      <Space>
        <Button v-for="color in helper.getColorType()" :key="color" :color="color as ButtonColor">
          Button
        </Button>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
