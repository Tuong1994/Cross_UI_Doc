<script setup lang="ts">
import { BgAnimation } from '@/components/UI'
import { bgFloatingCatalogIds } from '@/features/UI/BgFloating/repository/catelogIds'
import { bgFloatingBasicReactCode, bgFloatingBasicVueCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { BgFloating } = BgAnimation
</script>

<template>
  <AnchorContent :id="bgFloatingCatalogIds.BASIC">
    <ShowCase title="Basic" :vueCode="bgFloatingBasicVueCode" :reactCode="bgFloatingBasicReactCode">
      <div :style="{ width: '100%', height: '300px', borderRadius: '6px', overflow: 'hidden' }">
        <BgFloating color="purple" />
      </div>
    </ShowCase>
  </AnchorContent>
</template>
