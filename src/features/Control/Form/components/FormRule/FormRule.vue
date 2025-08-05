<script setup lang="ts">
import { Typography } from '@/components/UI'
import { formRuleReactCode, formRuleVueCode } from './code'
import { formCatalogIds } from '@/features/Control/Form/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()
</script>

<template>
  <AnchorContent :id="formCatalogIds.FORM_RULE">
    <ShowCase :onlyCode="true" code="" :vueCode="formRuleVueCode" :reactCode="formRuleReactCode"> 
      <template #head>
        <Paragraph strong :size="16">useFormRule</Paragraph>
      </template>
    </ShowCase>
  </AnchorContent>
</template>
