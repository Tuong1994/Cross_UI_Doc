<script setup lang="ts">
import { defineProps } from 'vue';
import { Card, Space, Button, Tooltip, Icon, Divider } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import CodeBlock from '../Code/CodeBlock.vue';
import useLayoutStore from '@/components/UI/Layout/LayoutStore';

interface ShowCaseProps {
    code: string;
}

defineProps<ShowCaseProps>()

const layout = useLayoutStore()
</script>

<template>
  <Card>
    <template #head> Basic </template>
    <template #body>
      <slot></slot>
      <Divider />
      <Space justify="end">
        <Tooltip>
          <template #title>
            <Button :color="layout.color">
              <Icon :iconName="iconName.CODE" />
            </Button>
          </template>
          <template #content>Code</template>
        </Tooltip>
      </Space>
      <CodeBlock :code="code" />
    </template>
  </Card>
</template>
