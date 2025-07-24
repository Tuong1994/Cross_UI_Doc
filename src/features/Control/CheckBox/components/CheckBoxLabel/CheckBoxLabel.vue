<script setup lang="ts">
import { Space } from '@/components/UI'
import { CheckBox } from '@/components/Control'
import { checkboxLabelCode } from './code'
import { checkboxCatalogIds } from '@/features/Control/CheckBox/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="checkboxCatalogIds.LABEL">
    <ShowCase title="Label" :code="checkboxLabelCode">
      <Space>
        <CheckBox color="green">Checkbox</CheckBox>
        <CheckBox color="green" optional>Checkbox optional</CheckBox>
        <CheckBox color="green" required>Checkbox required</CheckBox>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
