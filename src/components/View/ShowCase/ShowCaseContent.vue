<script setup lang="ts">
import { ref, defineProps, withDefaults } from 'vue'
import { Divider, Tooltip, Button, Icon, Space } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import ShowCaseTabs from './ShowCaseTabs.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import CodeBlock from '../Code/CodeBlock.vue'

interface ShowCaseContentProps {
  multiple?: boolean
  code?: string
  vueCode?: string
  reactCode?: string
}

withDefaults(defineProps<ShowCaseContentProps>(), {
  multiple: true,
  code: '',
  vueCode: '',
  reactCode: ''
})

const layout = useLayoutStore()

const showCode = ref<boolean>(false)

const handleOpenCode = () => (showCode.value = !showCode.value)
</script>

<template>
  <Divider />
  <Space rootClassName="section-space" justify="end">
    <Tooltip>
      <template #title>
        <Button :color="layout.color" @click="handleOpenCode">
          <Icon :iconName="iconName.CODE" />
        </Button>
      </template>
      <template #content>Code</template>
    </Tooltip>
  </Space>
  <template v-if="!multiple">
    <CodeBlock v-if="showCode" :code="code" />
  </template>
  <template v-else>
    <ShowCaseTabs v-if="showCode" :vueCode="vueCode as string" :reactCode="reactCode as string" />
  </template>
</template>
