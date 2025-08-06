export const inputPhoneVueCode = `
<script setup lang="ts">
import { ref } from 'vue'
import { InputPhone } from '@/components/Control'

const phone = ref<string>('')
</script>

<template>
  <InputPhone v-model="phone" :rootStyle="{ width: '250px' }" color="green" />
</template>
`

export const inputPhoneReactCode = `
import { useState } from "react";
import { InputPhone } from "@/components/Control";

const App: React.FC = () => {
  const [phone, setPhone] = useState<string>("");

  const handleChange = (value: string) => setPhone(value);

  return <InputPhone value={phone} onChangeInput={handleChange} rootStyle={{ width: "250px" }} />;
};

export default App;
`
