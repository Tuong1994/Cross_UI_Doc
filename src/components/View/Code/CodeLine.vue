<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { Icon, Flex, Tooltip, Button } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import utils from '@/utils'

const { FlexRow, FlexCol } = Flex

interface CodeLineProps {
  code: string
}

const props = defineProps<CodeLineProps>()

const t = useLangStore()

const layout = useLayoutStore()

const highlightedCode = ref<string>(utils.escapeHtml(props.code))
</script>

<template>
  <FlexRow rootClassName="code-line" aligns="middle">
    <FlexCol>
      <div v-highlight class="line-content">
        <pre>
          <code v-html="highlightedCode"></code>
      </pre>
      </div>
    </FlexCol>
    <FlexCol>
      <Button :color="layout.color" rootClassName="line-action">
        <Tooltip placement="right">
          <template #title>
            <Icon :iconName="iconName.PENCIL_ALT" />
          </template>
          <template #content>
            {{ t.lang.common.actions.copy }}
          </template>
        </Tooltip>
      </Button>
    </FlexCol>
  </FlexRow>
</template>
