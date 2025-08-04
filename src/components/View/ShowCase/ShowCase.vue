<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { Card, Typography } from '@/components/UI'
import ShowCaseTabs from './ShowCaseTabs.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import ShowCaseHead from './ShowCaseHead.vue'
import ShowCaseContent from './ShowCaseContent.vue'

const { Paragraph } = Typography

interface ShowCaseProps {
  title?: string
  onlyCode?: boolean
  code: string
  vueCode?: string
  reactCode?: string
}

defineProps<ShowCaseProps>()

const layout = useLayoutStore()

const rootClassName = computed<string>(() => `show-case show-case-${layout.theme}`)
</script>

<template>
  <Card :rootClassName="rootClassName">
    <template #head>
      <ShowCaseHead :title="title" :onlyCode="onlyCode">
        <template #head>
          <slot name="head"></slot>
        </template>
      </ShowCaseHead>
    </template>
    <template #body>
      <slot></slot>
      <ShowCaseContent v-if="!onlyCode" :vueCode="vueCode" :reactCode="reactCode" />
      <ShowCaseTabs v-else :vueCode="vueCode as string" :reactCode="reactCode as string" />
    </template>
  </Card>
</template>
