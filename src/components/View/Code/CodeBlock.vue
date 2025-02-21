<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { Tooltip, Button, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import utils from '@/utils'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

interface CodeBlockProps {
  code: string
}

const props = defineProps<CodeBlockProps>()

const t = useLangStore()

const layout = useLayoutStore()

const isCopy = ref<boolean>(false)

const content = ref<string>(utils.escapeHtml(props.code))

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
  <div v-highlight class="code-block">
    <Tooltip rootClassName="block-action">
      <template #title>
        <Button :color="layout.color" @click="handleCopy">
          <Icon :iconName="iconName.COPY" />
        </Button>
      </template>
      <template #content>
        {{ t.lang.common.actions[isCopy ? 'copied' : 'copy'] }}
      </template>
    </Tooltip>
    <pre class="block-content">
        <code v-html="content"></code>
    </pre>
  </div>
</template>
