<script setup lang="ts">
import { Space } from '@/components/UI'
import { Radio } from '@/components/Control'
import { radioLabelCode } from './code'
import { radioCatalogIds } from '@/features/Control/Radio/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="radioCatalogIds.LABEL">
    <ShowCase title="Label" :code="radioLabelCode">
      <Space>
        <Radio name="label" color="green">Radio</Radio>
        <Radio name="label" color="green" optional>Radio optional</Radio>
        <Radio name="label" color="green" required>Radio required</Radio>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
