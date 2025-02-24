<script setup lang="ts">
import { computed } from 'vue'
import { Typography } from '@/components/UI'
import MenuLink from '../AnchorLink/MenuLink.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useCatalog from './useCatalog'
import useCatalogStore from './CatalogStore'

const { Paragraph } = Typography

const layout = useLayoutStore()

const catalogStore = useCatalogStore()

useCatalog()

const themeClassName = computed<string>(() => `side-catalog-${layout.theme}`)
</script>

<template>
  <div :class="['side-catalog', themeClassName]">
    <template v-for="cataLog in catalogStore.catalogs">
      <Paragraph variant="secondary">
        {{ cataLog.groupTitle }}
      </Paragraph>
      <div class="catalog-group">
        <MenuLink v-for="item in cataLog.items" :key="item.id" :id="item.id">
          {{ item.title }}
        </MenuLink>
      </div>
    </template>
  </div>
</template>
