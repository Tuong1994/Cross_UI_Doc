<script setup lang="ts">
import { Grid, Card } from '@/components/UI'
import { gridCatalogIds } from '../../repository/catalogIds'
import { gridBasicReactCode, gridBasicVueCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="gridCatalogIds.BASIC">
    <ShowCase title="Basic" :vueCode="gridBasicVueCode" :reactCode="gridBasicReactCode">
      <Grid :xs="2" :md="4" :lg="6" :span="8">
        <Card v-for="item in 24"></Card>
      </Grid>
    </ShowCase>
  </AnchorContent>
</template>
