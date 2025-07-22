<script setup lang="ts">
import { Space } from '@/components/UI'
import { TextArea } from '@/components/Control'
import { textareaLabelCode } from './code'
import { textareaCatalogIds } from '@/features/Control/TextArea/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="textareaCatalogIds.LABEL">
    <ShowCase title="Label" :code="textareaLabelCode">
      <Space>
        <TextArea color="green">
          <template #label>TextArea</template>
        </TextArea>
        <TextArea color="green" optional>
          <template #label>TextArea optional</template>
        </TextArea>
        <TextArea color="green" required>
          <template #label>TextArea required</template>
        </TextArea>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
