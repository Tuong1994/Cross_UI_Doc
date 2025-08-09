export const radioBasicVueCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { Radio } from '@/components/Control'

const handleChange = (role: string) => {
  console.log(role)
}
</script>

<template>
  <Space>
    <Radio name="role" color="green" value="admin" @onInput="handleChange">Admin</Radio>
    <Radio name="role" color="green" value="user" @onInput="handleChange">User</Radio>
    <Radio name="role" color="green" disabled>Manager</Radio>
  </Space>
</template>
`

export const radioBasicReactCode = `
import { useState } from "react";
import { Space } from "./components/UI";
import { Radio } from "@/components/Control";
import { InputValue } from "./components/Control/type";

const App: React.FC = () => {
  const [role, setRole] = useState<string>("");

  const handleChange = (value: InputValue) => setRole(String(value));

  return (
    <Space>
      <Radio name="role" value="admin" label="Admin" onCheck={handleChange} />
      <Radio name="role" value="user" label="User" onCheck={handleChange} />
      <Radio disabled label="Manager" />
    </Space>
  );
};

export default App;
`