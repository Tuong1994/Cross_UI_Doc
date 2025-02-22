<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { Icon, Flex, Tooltip, Button } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { escapeHtml } from './escapeHtml'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { FlexRow, FlexCol } = Flex

interface CodeLineProps {
  code: string
}

const props = defineProps<CodeLineProps>()

const t = useLangStore()

const layout = useLayoutStore()

const isCopy = ref<boolean>(false)

const content = ref<string>(escapeHtml(props.code))

const handleCopy = () => {
  navigator.clipboard
    .writeText(props.code)
    .then(() => {
      isCopy.value = true
      setTimeout(() => (isCopy.value = false), 2000)
    })
    .catch(() => console.log('False to copy'))
}
</script>

<template>
  <FlexRow rootClassName="code-line" aligns="middle">
    <FlexCol>
      <div v-highlight>
        <pre class="line-content">
          <code v-html="content"></code>
        </pre>
      </div>
    </FlexCol>
    <FlexCol>
      <Button :color="layout.color" rootClassName="line-action" @click="handleCopy">
        <Tooltip placement="right">
          <template #title>
            <Icon :iconName="iconName.COPY" />
          </template>
          <template #content>
            {{ t.lang.common.actions[isCopy ? 'copied' : 'copy'] }}
          </template>
        </Tooltip>
      </Button>
    </FlexCol>
  </FlexRow>
</template>
