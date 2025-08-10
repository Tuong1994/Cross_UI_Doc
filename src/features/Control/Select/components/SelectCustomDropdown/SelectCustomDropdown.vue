<script setup lang="ts">
import { computed } from 'vue'
import { Flex, Space, Icon } from '@/components/UI'
import { Select } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import { selectCustomDropdownReactCode, selectCustomDropdownVueCode } from './code'
import { selectCatalogIds } from '@/features/Control/Select/repository/catalogIds'
import type { SelectOptions } from '@/components/Control/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { FlexRow, FlexCol } = Flex

const options = computed<SelectOptions>(() => [
  { label: 'Item 1', value: 1, icon: iconName.USER },
  { label: 'Item 2', value: 2, icon: iconName.BELL },
  { label: 'Item 3', value: 3, icon: iconName.BIRTHDAY_CAKE }
])

const handleSelect = (selectValue: string | number | boolean) => {
  // Logic...
  console.log(selectValue)
}
</script>

<template>
  <AnchorContent :id="selectCatalogIds.CUSTOM_DROPDOWN">
    <ShowCase title="Custom dropdown" :vueCode="selectCustomDropdownVueCode" :reactCode="selectCustomDropdownReactCode">
      <Select color="green" :options="options">
        <template #dropdown="menu">
          <FlexRow
            v-for="(option, idx) in menu.data.options"
            :key="option.label + idx"
            @click="handleSelect(option.value)"
          >
            <FlexCol>
              <Space>
                <Icon :iconName="String(option.icon)" />
                <span>{{ option.label }}</span>
              </Space>
            </FlexCol>
          </FlexRow>
        </template>
      </Select>
    </ShowCase>
  </AnchorContent>
</template>
