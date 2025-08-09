export const radioLabelVueCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { Radio } from '@/components/Control'
</script>

<template>
  <Space>
    <Radio name="label" color="green">Radio</Radio>
    <Radio name="label" color="green" optional>Radio optional</Radio>
    <Radio name="label" color="green" required>Radio required</Radio>
  </Space>
</template>
`

export const radioLabelReactCode = `
import { Space } from "./components/UI";
import { Radio } from "@/components/Control";

const App: React.FC = () => {
  return (
    <Space>
      <Radio label="Radio" />
      <Radio optional label="Radio optional" />
      <Radio required label="Radio required" />
    </Space>
  );
};

export default App;
`