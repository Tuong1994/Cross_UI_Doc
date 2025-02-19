<script setup lang="ts">
import { ref } from 'vue'
import { highlightedCode, rawCode } from './code'
import utils from '@/utils'

const highlighter = ref<string>(rawCode)
</script>

<template>
  <div class="code-block">
    <div class="block-head"></div>

    <div v-highlight class="block-content">
      <pre>
        <code>
          {{ rawCode }}
        </code>
      </pre>
    </div>
  </div>
</template>
