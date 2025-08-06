export const inputNumberVueCode = `
<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@/components/Control'

const nums = ref<number>(0)
</script>

<template>
  <InputNumber v-model="nums" :rootStyle="{ width: '250px' }" color="green" />
</template>
`

export const inputNumberReactCode = `
import { useState } from "react";
import { InputNumber } from "@/components/Control";

const App: React.FC = () => {
  const [number, setNumber] = useState<number>(0);

  const handleChange = (value: number) => setNumber(value);

  return <InputNumber value={number} onChangeInput={handleChange} rootStyle={{ width: "250px" }} />;
};

export default App;
`
