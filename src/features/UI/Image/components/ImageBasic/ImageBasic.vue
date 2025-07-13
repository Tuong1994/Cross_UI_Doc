<script setup lang="ts">
import { Image } from '@/components/UI'
import { imageBasicCode } from './code'
import { imageCatalogIds } from '@/features/UI/Image/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="imageCatalogIds.BASIC">
    <ShowCase title="Basic" :code="imageBasicCode">
      <Image
        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1"
        :imgWidth="150"
        :imgHeight="150"
      />
    </ShowCase>
  </AnchorContent>
</template>
