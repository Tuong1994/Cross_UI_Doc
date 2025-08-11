<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'
import { Card } from '@/components/UI'
import ShowCaseTabs from './ShowCaseTabs.vue'
import ShowCaseHead from './ShowCaseHead.vue'
import ShowCaseContent from './ShowCaseContent.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface ShowCaseProps {
  title?: string
  onlyCode?: boolean
  multiple?: boolean
  code?: string
  vueCode?: string
  reactCode?: string
}

withDefaults(defineProps<ShowCaseProps>(), {
  multiple: true,
  code: '',
  vueCode: '',
  reactCode: ''
})

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
      <ShowCaseContent
        v-if="!onlyCode"
        :multiple="multiple"
        :code="code"
        :vueCode="vueCode"
        :reactCode="reactCode"
      />
      <ShowCaseTabs v-else :vueCode="vueCode" :reactCode="reactCode" />
    </template>
  </Card>
</template>
