<script setup lang="ts">
import { Button, Space } from '@/components/UI'
import { buttonCatalogIds } from '@/features/UI/Button/repository/catalogIds'
import { buttonLoadingReactCode, buttonLoadingVueCode } from './code'
import type { ButtonColor } from '@/components/UI/Button/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
</script>

<template>
  <AnchorContent :id="buttonCatalogIds.LOADING">
    <ShowCase title="Loading" code="" :vueCode="buttonLoadingVueCode" :reactCode="buttonLoadingReactCode">
      <Space>
        <Button v-for="color in helper.getColorType()" :key="color" loading :color="color as ButtonColor">
          Button
        </Button>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>


