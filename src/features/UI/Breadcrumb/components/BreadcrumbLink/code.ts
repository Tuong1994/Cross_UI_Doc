export const breadcrumbLinkVueCode = `
<script setup lang="ts">
import { Breadcrumb } from '@/components/UI'
import type { BreadcrumbItems } from '@/components/UI/Breadcrumb/type'

const items: BreadcrumbItems = [
  { id: 'home', label: 'Home', link: '#', actived: true },
  { id: 'product', label: 'Product', link: '#' },
  { id: 'about', label: 'About', link: '#' }
]
</script>

<template>
  <Breadcrumb :items="items" />
</template>
`

export const breadcrumbLinkReactCode = `
import { Breadcrumb } from "./components/UI";
import { BreadcrumbItems } from "./components/UI/Breadcrumb/type";

const App: React.FC = () => {
  const items: BreadcrumbItems = [
    {
      id: "home",
      label: <a href="#">Home</a>,
      actived: true,
    },
    {
      id: "product",
      label: <a href="#">Product</a>,
    },
    {
      id: "about",
      label: <a href="#">About</a>,
    },
  ];

  return <Breadcrumb items={items} />;
};

export default App;
`