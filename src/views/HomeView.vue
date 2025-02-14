<script setup lang="ts">
import { Divider, Typography, Flex, Button } from '@/components/UI'
import { Input } from '@/components/Control'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Title, Paragraph } = Typography

const { FlexRow, FlexCol } = Flex

const t = useLangStore()

const layout = useLayoutStore()
</script>

<template>
  <Title>Vue Components</Title>
  <Paragraph>
    Provides plenty of UI components to enrich your web applications, and we will improve components
    experience consistently.
  </Paragraph>
  <Divider />
  <FlexRow>
    <FlexCol :span="10">
      <Input :placeholder="t.lang.common.form.placeholder.search" :color="layout.color" />
    </FlexCol>
    <FlexCol>
      <Button :color="layout.color">
        {{ t.lang.common.form.placeholder.search }}  
      </Button>
    </FlexCol>
  </FlexRow>
</template>
