export const checkboxLabelVueCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { CheckBox } from '@/components/Control'
</script>

<template>
  <Space>
    <CheckBox color="green">Checkbox</CheckBox>
    <CheckBox color="green" optional>Checkbox optional</CheckBox>
    <CheckBox color="green" required>Checkbox required</CheckBox>
  </Space>
</template>
`

export const checkboxLabelReactCode = `
import { Space } from "./components/UI";
import { CheckBox } from "@/components/Control";

const App: React.FC = () => {
  return (
    <Space>
      <CheckBox label="CheckBox" />
      <CheckBox optional label="CheckBox optional" />
      <CheckBox required label="CheckBox required" />
    </Space>
  );
};

export default App;
`