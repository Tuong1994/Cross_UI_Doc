<script setup lang="ts">
import { computed } from 'vue'
import MenuLink from '../AnchorLink/MenuLink.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useCatalog from './useCatalog'
import useCatalogStore from './CatalogStore'

const layout = useLayoutStore()

const catalogStore = useCatalogStore()

useCatalog()

const themeClassName = computed<string>(() => `side-catalog-${layout.theme}`)
</script>

<template>
  <div :class="['side-catalog', themeClassName]">
    <MenuLink v-for="cataLog in catalogStore.catalogs" :key="cataLog.id" :id="cataLog.id">
      {{ cataLog.title }}
    </MenuLink>
  </div>
</template>
