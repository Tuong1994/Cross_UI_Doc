<script setup lang="ts">
import { type StyleValue } from 'vue'
import Spinner from '@/components/UI/Loading/Spinner.vue'

interface ImageLoadingProps {
  imageSize: StyleValue
}

defineProps<ImageLoadingProps>()
</script>

<template>
  <div :style="imageSize" class="image-loading">
    <Spinner />
  </div>
</template>
