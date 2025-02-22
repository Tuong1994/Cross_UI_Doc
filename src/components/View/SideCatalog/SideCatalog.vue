<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { routeNames } from '@/router'
import { tableCataLogs } from '@/features/Table/repository/catalogs'
import MenuLink from '../AnchorLink/MenuLink.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useCatalogStore from './CatalogStore'

const { currentRoute } = useRouter()

const layout = useLayoutStore()

const catalogStore = useCatalogStore()

const themeClassName = computed<string>(() => `side-catalog-${layout.theme}`)

watch(
  currentRoute,
  (newRoute) => {
    if (newRoute.name === routeNames.TABLE) return catalogStore.setCatalogs(tableCataLogs)
  },
  { immediate: true }
)
</script>

<template>
  <div :class="['side-catalog', themeClassName]">
    <MenuLink v-for="cataLog in catalogStore.catalogs" :key="cataLog.id" :id="cataLog.id">
      {{ cataLog.title }}
    </MenuLink>
  </div>
</template>
