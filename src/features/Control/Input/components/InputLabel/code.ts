export const inputLabelVueCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { Input } from '@/components/Control'
</script>

<template>
  <Space>
    <Input color="green">
      <template #label>Input</template>
    </Input>
    <Input color="green" optional>
      <template #label>Input optional</template>
    </Input>
    <Input color="green" required>
      <template #label>Input required</template>
    </Input>
  </Space>
</template>
`

export const inputLabelReactCode = `
import { Input } from "@/components/Control";
import { Space } from "@/components/UI";

const App: React.FC = () => {
  return (
    <Space>
      <Input label="Input" />
      <Input optional label="Input optional" />
      <Input required label="Input required" />
    </Space>
  );
};

export default App;
`
