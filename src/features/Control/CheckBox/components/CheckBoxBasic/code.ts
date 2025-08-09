export const checkboxBasicVueCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { CheckBox } from '@/components/Control'

const handleChange = (role: string) => {
  console.log(role)
}
</script>

<template>
  <Space>
    <CheckBox color="green" value="admin" @onInput="handleChange">Admin</CheckBox>
    <CheckBox color="green" value="user" @onInput="handleChange">User</CheckBox>
    <CheckBox color="green" disabled>Manager</CheckBox>
  </Space>
</template>
`

export const checkboxBasicReactCode = `
import { useState } from "react";
import { Space } from "./components/UI";
import { CheckBox } from "@/components/Control";
import { InputValue } from "./components/Control/type";

const App: React.FC = () => {
  const [role, setRole] = useState<string>("");

  const handleChange = (value: InputValue) => setRole(String(value));

  return (
    <Space>
      <CheckBox value="admin" label="Admin" onCheckInput={handleChange} />
      <CheckBox value="user" label="User" onCheckInput={handleChange} />
      <CheckBox disabled label="Manager" />
    </Space>
  );
};

export default App;
`
