<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { Flex, Typography, Button, Divider, Space } from '@/components/UI'
import { Input } from '@/components/Control'
import { Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { useClickOutside, useRender } from '@/hooks'
import type { ControlColor } from '@/components/Control/type'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useMenu from '../SideMenu/useMenu'
import useLangStore from '@/stores/LangStore'

const { FlexRow, FlexCol } = Flex

const { Paragraph } = Typography

const { filterMenus } = useMenu()

const t = useLangStore()

const layout = useLayoutStore()

const searchRef = ref<HTMLDivElement>()

const dropdown = ref<boolean>(false)

const search = ref<string>('')

const render = useRender(dropdown)

useClickOutside(searchRef, dropdown)

const dropdownClassName = computed<string>(() => (dropdown.value ? 'search-dropdown-active' : ''))

watch(search, (newValue) => {
  if (!newValue) return (dropdown.value = false)
  dropdown.value = true
})
</script>

<template>
  <div ref="searchRef" class="header-search">
    <Input
      v-model="search"
      :placeholder="t.lang.common.form.placeholder.search"
      :color="layout.color as ControlColor"
    >
      <template #addonAfter>
        <Icon :iconName="iconName.SEARCH" />
      </template>
    </Input>
    <div v-if="render" :class="['search-dropdown', dropdownClassName]">
      <template v-if="filterMenus(search).length > 0">
        <template v-for="menu in filterMenus(search)">
          <Divider>
            {{ menu.category }}
          </Divider>
          <FlexRow>
            <FlexCol v-for="item in menu.items" :key="item.id">
              <RouterLink :to="String(item.path)">
                <Button :color="layout.color">
                  {{ item.label }}
                </Button>
              </RouterLink>
            </FlexCol>
          </FlexRow>
        </template>
      </template>
      <Space v-else justify="center">
        <Paragraph variant="secondary">{{ t.lang.common.header.search.empty }}</Paragraph>
      </Space>
    </div>
  </div>
</template>
