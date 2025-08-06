export const textareaBasicVueCode = `
<script setup lang="ts">
import { ref } from 'vue'
import { TextArea } from '@/components/Control'

const inputValue = ref<string>('')
</script>

<template>
  <TextArea v-model="inputValue" rootClassName="section-space" color="green" />
  <TextArea color="green" disabled />
</template>
`

export const textareaBasicReactCode = `
import { useState } from "react";
import { TextArea } from "@/components/Control";

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const handleChange = (value: string) => setInput(value);

  return (
    <>
      <TextArea value={input} onChangeInput={handleChange} />
      <TextArea disabled />
    </>
  );
};

export default App;
`