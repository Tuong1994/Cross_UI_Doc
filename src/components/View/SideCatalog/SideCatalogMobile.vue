<script setup lang="ts">
import { Typography, Dropdown, Button, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import MenuLink from '../AnchorLink/MenuLink.vue'
import useCatalogStore from './CatalogStore'
import useCatalog from './useCatalog'

const { Paragraph } = Typography

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
        <template v-for="cataLog in catalogStore.catalogs">
          <Paragraph variant="secondary">
            {{ cataLog.groupTitle }}
          </Paragraph>
          <div class="dropdown-group">
            <MenuLink v-for="item in cataLog.items" :key="item.id" :id="item.id">
              {{ item.title }}
            </MenuLink>
          </div>
        </template>
      </div>
    </template>
  </Dropdown>
</template>
