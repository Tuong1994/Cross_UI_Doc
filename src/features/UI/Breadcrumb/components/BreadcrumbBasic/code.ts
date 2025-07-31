export const breadcrumbBasicVueCode = `
<script setup lang="ts">
import { Breadcrumb } from '@/components/UI'
import type { BreadcrumbItems } from '@/components/UI/Breadcrumb/type'

const items: BreadcrumbItems = [
  { id: 'home', label: 'Home', actived: true },
  { id: 'product', label: 'Product' },
  { id: 'about', label: 'About' }
]
</script>

<template>
  <Breadcrumb :items="items" />
</template>
`

export const breadcrumbBasicReactCode = `
import { Breadcrumb } from "./components/UI";
import { BreadcrumbItems } from "./components/UI/Breadcrumb/type";

const App: React.FC = () => {
  const items: BreadcrumbItems = [
    { id: "home", label: "Home", actived: true },
    { id: "product", label: "Product" },
    { id: "about", label: "About" },
  ];

  return <Breadcrumb items={items} />;
};

export default App;
`