<script setup lang="ts">
import { Dropdown, Button, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import MenuLink from '../AnchorLink/MenuLink.vue'
import useCatalogStore from './CatalogStore'
import useCatalog from './useCatalog'

const catalogStore = useCatalogStore()

useCatalog()
</script>

<template>
  <Dropdown rootClassName="side-catalog-mobile">
    <template #label>
      <Button ghost>
        <Icon :iconName="iconName.SLIDERS_H" />
      </Button>
    </template>
    <template #dropdown>
      <div class="mobile-dropdown">
        <MenuLink v-for="cataLog in catalogStore.catalogs" :key="cataLog.id" :id="cataLog.id">
          {{ cataLog.title }}
        </MenuLink>
      </div>
    </template>
  </Dropdown>
</template>
