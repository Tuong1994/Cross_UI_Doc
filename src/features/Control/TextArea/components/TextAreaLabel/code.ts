export const textareaLabelVueCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { TextArea } from '@/components/Control'
</script>

<template>
  <Space>
    <TextArea color="green">
      <template #label>Textarea</template>
    </TextArea>
    <TextArea color="green" optional>
      <template #label>Textarea optional</template>
    </TextArea>
    <TextArea color="green" required>
      <template #label>Textarea required</template>
    </TextArea>
  </Space>
</template>
`

export const textareaLabelReactCode = `
import { TextArea } from "@/components/Control";
import { Space } from "./components/UI";

const App: React.FC = () => {
  return (
    <Space>
      <TextArea label="Textarea" />
      <TextArea optional label="Textarea optional" />
      <TextArea required label="Textarea required" />
    </Space>
  );
};

export default App;
`