<script setup lang="ts">
import { Space } from '@/components/UI'
import { TextArea } from '@/components/Control'
import { textareaLabelReactCode, textareaLabelVueCode } from './code'
import { textareaCatalogIds } from '@/features/Control/TextArea/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="textareaCatalogIds.LABEL">
    <ShowCase title="Label" code="" :vueCode="textareaLabelVueCode" :reactCode="textareaLabelReactCode">
      <Space>
        <TextArea color="green">
          <template #label>Textarea</template>
        </TextArea>
        <TextArea color="green" optional>
          <template #label>Textarea optional</template>
        </TextArea>
        <TextArea color="green" required>
          <template #label>Textarea required</template>
        </TextArea>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
