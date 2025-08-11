<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { RouterView } from 'vue-router'
import FlexProvider from './components/UI/Flex/FlexProvider.vue'
import AppLayout from './components/View/AppLayout/AppLayout.vue'
import LoadingLayer from './components/View/LoadingLayer/LoadingLayer.vue'
import useLoadingLayerStore from './components/View/LoadingLayer/LoadingLayerStore'

const layer = useLoadingLayerStore()

onBeforeMount(() => layer.trigger())
</script>

<template>
  <LoadingLayer />
  <FlexProvider>
    <AppLayout>
      <RouterView />
    </AppLayout>
  </FlexProvider>
</template>
