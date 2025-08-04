<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'
import { Tabs } from '@/components/UI'
import type { TabsItems } from '@/components/UI/Tabs/type'
import CodeBlock from '../Code/CodeBlock.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface TabsCodeBlockProps {
  vueCode: string
  reactCode: string
}

withDefaults(defineProps<TabsCodeBlockProps>(), {
  vueCode: '',
  reactCode: ''
})

const layout = useLayoutStore()

const items = computed<TabsItems>(() => [
  { id: 'vue', label: 'Vue', comName: 'vue' },
  { id: 'react', label: 'React', comName: 'react' }
])
</script>

<template>
  <Tabs :color="layout.color" :items="items">
    <template #content="tab">
      <CodeBlock v-if="tab.content.comName === 'vue'" :code="vueCode" />
      <CodeBlock v-if="tab.content.comName === 'react'" :code="reactCode" />
    </template>
  </Tabs>
</template>
