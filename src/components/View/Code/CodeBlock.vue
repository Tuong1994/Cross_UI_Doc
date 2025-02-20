<script setup lang="ts">
import { ref, defineProps } from 'vue'
import utils from '@/utils'

interface CodeBlockProps {
  code: string
}

const props = defineProps<CodeBlockProps>()

const content = ref<string>(utils.escapeHtml(props.code))
</script>

<template>
  <div class="code-block">
    <div class="block-head"></div>

    <div v-highlight>
      <pre class="block-content">
        <code v-html="content"></code>
      </pre>
    </div>
  </div>
</template>
