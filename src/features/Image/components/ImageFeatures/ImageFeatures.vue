<script setup lang="ts">
import { Image, Divider } from '@/components/UI'
import { imageFeaturesCode } from './code'
import { imageCatalogIds } from '@/features/Image/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="imageCatalogIds.FEATURES">
    <ShowCase title="Features" :code="imageFeaturesCode">
      <Divider> Checkbox </Divider>
      <Image
        hasCheck
        checkboxColor="green"
        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1"
        :imgWidth="150"
        :imgHeight="150"
      />
      <Divider> Viewer </Divider>
      <Image
        hasView
        hasRemove
        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1"
        :imgWidth="150"
        :imgHeight="150"
      />
    </ShowCase>
  </AnchorContent>
</template>
