<script setup lang="ts">
import { computed } from 'vue'
import { Divider, Image } from '@/components/UI'
import { imageSizeCode } from './code'
import { imageCatalogIds } from '@/features/UI/Image/repository/catalogIds'
import { useDisplayComponentSize } from '@/hooks'
import type { ComponentSize } from '@/common/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const imageSizes = computed<ComponentSize[]>(() => ['sm', 'md', 'lg'])

const sizeContent = useDisplayComponentSize()
</script>

<template>
  <AnchorContent :id="imageCatalogIds.SIZE">
    <ShowCase title="Size" :code="imageSizeCode">
      <template v-for="size in imageSizes" :key="size">
        <Divider>
          {{ sizeContent(size) }}
        </Divider>
        <Image
          :size="size"
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1"
        />
      </template>
    </ShowCase>
  </AnchorContent>
</template>
