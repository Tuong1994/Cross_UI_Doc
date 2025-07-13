<script setup lang="ts">
import { Grid, Card } from '@/components/UI'
import { gridGapCode } from './code'
import { gridCatalogIds } from '../../repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="gridCatalogIds.GAP">
    <ShowCase title="Gap" :code="gridGapCode">
      <Grid :gap="[20, 40]" :xs="2" :md="4" :lg="6" :span="8">
        <Card v-for="item in 24"></Card>
      </Grid>
    </ShowCase>
  </AnchorContent>
</template>
