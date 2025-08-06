export const inputPasswordVueCode = `
<script setup lang="ts">
import { ref } from 'vue'
import { InputPassword } from '@/components/Control'

const password = ref<string>('')
</script>

<template>
  <InputPassword v-model="password" :rootStyle="{ width: '250px' }" color="green" />
</template>
`

export const inputPasswordReactCode = `
import { useState } from "react";
import { InputPassword } from "@/components/Control";

const App: React.FC = () => {
  const [password, setPassword] = useState<string>("");

  const handleChange = (value: string) => setPassword(value);

  return <InputPassword value={password} onChangeInput={handleChange} rootStyle={{ width: "250px" }} />;
};

export default App;
`
