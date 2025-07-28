<script setup lang="ts">
import { Card, Typography } from '@/components/UI'
import { formRuleCode } from './code'
import { formCatalogIds } from '@/features/Control/Form/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import CodeBlock from '@/components/View/Code/CodeBlock.vue'
import CodeLine from '@/components/View/Code/CodeLine.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()
</script>

<template>
  <AnchorContent :id="formCatalogIds.FORM_RULE">
    <Card rootClassName="section-space">
      <template #head>
        <Paragraph strong :size="16">useFormRule</Paragraph>
      </template>
      <template #body>
        <Paragraph strong>{{ t.lang.common.usage }}</Paragraph>
        <CodeLine
          code="const { requiredString, requiredNumber, minNumber, maxNumber, email, password, phone, match, yup } = useFormRule()"
        />
        <CodeBlock :code="formRuleCode" />
      </template>
    </Card>
  </AnchorContent>
</template>
