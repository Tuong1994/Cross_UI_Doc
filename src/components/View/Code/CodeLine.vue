<script setup lang="ts">
import { ref, computed, defineProps, withDefaults, type StyleValue } from 'vue'
import { Icon, Flex, Tooltip, Button } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { escapeHtml } from './escapeHtml'
import { useViewPoint } from '@/hooks'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { FlexRow, FlexCol } = Flex

interface CodeLineProps {
  code: string
  hasCopy?: boolean
  size?: number
}

const props = withDefaults(defineProps<CodeLineProps>(), {
  hasCopy: true,
  size: 14
})

const t = useLangStore()

const layout = useLayoutStore()

const { isPhone, isLgPhone } = useViewPoint()

const isCopy = ref<boolean>(false)

const content = ref<string>(escapeHtml(props.code))

const responsive = computed<boolean>(() => isPhone.value || isLgPhone.value)

const codeStyle = computed<StyleValue>(() => ({ fontSize: `${props.size}px` }))

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
    <FlexCol :xs="0">
      <div v-highlight>
        <pre class="line-content">
          <code :style="codeStyle" v-html="content"></code>
        </pre>
      </div>
    </FlexCol>
    <FlexCol v-if="hasCopy">
      <Button :color="layout.color" rootClassName="line-action" @click="handleCopy">
        <Tooltip placement="right">
          <template #title>
            <Icon v-if="!responsive" :iconName="iconName.COPY" />
            <span v-if="responsive">{{ t.lang.common.actions.get }} code</span>
          </template>
          <template #content>
            {{ t.lang.common.actions[isCopy ? 'copied' : 'copy'] }}
          </template>
        </Tooltip>
      </Button>
    </FlexCol>
  </FlexRow>
</template>
