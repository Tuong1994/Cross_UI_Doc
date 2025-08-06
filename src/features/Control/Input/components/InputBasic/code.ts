export const inputBasicVueCode = `
<script setup lang="ts">
import { ref } from 'vue'
import { Space } from '@/components/UI'
import { Input } from '@/components/Control'

const inputValue = ref<string>('')
</script>

<template>
  <Space>
    <Input v-model="inputValue" color="green" />
    <Input color="green" disabled />
    <Input color="green">
      <template #addonBefore>
        <span>$</span>
      </template>
    </Input>
    <Input color="green">
      <template #addonAfter>
        <span>#</span>
      </template>
    </Input>
  </Space>
</template>

`

export const inputBasicReactCode = `
import { useState } from "react";
import { Input } from "@/components/Control";
import { Space } from "@/components/UI";

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const handleChange = (value: string) => setInput(value);

  return (
    <Space>
      <Input value={input} onChangeInput={handleChange} />
      <Input disabled />
      <Input addonBefore="$" />
      <Input addonAfter="#" />
    </Space>
  );
};

export default App;
`