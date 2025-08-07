export const selectCustomDropdownVueCode = `
<script setup lang="ts">
import { computed } from 'vue'
import { Flex, Space, Icon } from '@/components/UI'
import { Select } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import type { SelectOptions } from '@/components/Control/type'

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
</template>
`

export const selectCustomDropdownReactCode = `
import { ReactNode } from "react";
import { Select } from "@/components/Control";
import { Card, Flex, Space } from "./components/UI";
import { SelectOptions } from "./components/Control/type";

const { FlexRow, FlexCol } = Flex;

const App: React.FC = () => {
  const options: SelectOptions = [
    { label: "Item 1", value: 1 },
    { label: "Item 2", value: 2 },
    { label: "Item 3", value: 3 },
    { label: "Item 4", value: 4 },
    { label: "Item 5", value: 5 },
    { label: "Item 6", value: 6 },
    { label: "Item 7", value: 7 },
    { label: "Item 8", value: 8 },
    { label: "Item 9", value: 9 },
    { label: "Item 10", value: 10 },
  ];

  const dropdownRender = (menu: ReactNode) => {
    // If you don't want to custom option item, you just return menu params. It will render default option item
    return options.map((option) => (
      <FlexRow>
        <FlexCol>
          <span>{option.label}</span>
        </FlexCol>
      </FlexRow>
    ));
  };

  const handleSelect = (value: string | number | boolean) => console.log(value);

  return <Select options={options} onChangeSelect={handleSelect} dropdownRender={dropdownRender} />;
};

export default App;
`