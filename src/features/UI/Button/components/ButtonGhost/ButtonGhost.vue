<script setup lang="ts">
import { Button, Space } from '@/components/UI'
import { buttonCatalogIds } from '@/features/UI/Button/repository/catalogIds'
import { buttonGhostReactCode, buttonGhostVueCode } from './code'
import type { ButtonColor } from '@/components/UI/Button/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
</script>

<template>
  <AnchorContent :id="buttonCatalogIds.GHOST">
    <ShowCase title="Ghost" code="" :vueCode="buttonGhostVueCode" :reactCode="buttonGhostReactCode">
      <Space rootClassName="section-space">
        <Button
          v-for="color in helper.getColorType()"
          :key="color"
          :color="color as ButtonColor"
          shape="square"
          ghost
        >
          Button
        </Button>
      </Space>
      <Space>
        <Button
          v-for="color in helper.getColorType()"
          :key="color"
          :color="color as ButtonColor"
          shape="round"
          ghost
        >
          Button
        </Button>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>


