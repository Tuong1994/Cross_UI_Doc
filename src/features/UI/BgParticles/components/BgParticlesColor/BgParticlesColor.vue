<script setup lang="ts">
import { BgAnimation } from '@/components/UI'

const { BgParticles } = BgAnimation
</script>

<template>
  <div :style="{ width: '100%', height: '300px' }">
    <BgParticles :fullScreen="false" hasColor color="blue" />
  </div>
</template>