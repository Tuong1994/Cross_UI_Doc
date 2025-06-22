<script setup lang="ts">
import { computed } from 'vue'
import { Divider, Image } from '@/components/UI'
import { imageSizeCode } from './code'
import { imageCatalogIds } from '@/features/Image/repository/catalogIds'
import type { ComponentSize } from '@/common/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const imageSizes = computed<ComponentSize[]>(() => ['sm', 'md', 'lg'])

const dividerContent = (size: string) => {
  const content: Record<string, string> = {
    sm: t.lang.common.size.sm,
    md: t.lang.common.size.md,
    lg: t.lang.common.size.lg
  }
  return content[size]
}
</script>

<template>
  <AnchorContent :id="imageCatalogIds.SIZE">
    <ShowCase title="Size" :code="imageSizeCode">
      <template v-for="size in imageSizes" :key="size">
        <Divider>
          {{ dividerContent(size) }}
        </Divider>
        <Image
          :size="size"
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1"
        />
      </template>
    </ShowCase>
  </AnchorContent>
</template>
