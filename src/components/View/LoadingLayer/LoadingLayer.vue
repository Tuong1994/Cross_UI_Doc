<script setup lang="ts">
import { computed } from 'vue'
import { useOverflow, useRender } from '@/hooks'
import useLoadingLayerStore from './LoadingLayerStore'
import cxuiLogo from '/cxui-logo.png'

const layer = useLoadingLayerStore()

const open = computed<boolean>(() => layer.open)

const activeClassName = computed<string>(() => (layer.open ? 'loading-layer-active' : ''))

useOverflow(open)

const render = useRender(open)
</script>

<template>
  <Teleport to="#portal">
    <div v-if="render" :class="['loading-layer', activeClassName]">
      <div class="layer-left">
        <picture>
          <img :src="cxuiLogo" class="left-logo" />
        </picture>
      </div>
      <div class="layer-right">
        <div className="right-bars">
          <div v-for="(item, idx) in 8" :key="idx" className="bars-item"></div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
