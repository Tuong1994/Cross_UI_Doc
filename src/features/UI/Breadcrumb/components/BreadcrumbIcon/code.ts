export const breadcrumbIconVueCode = `
<script setup lang="ts">
import { Breadcrumb } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import type { BreadcrumbItems } from '@/components/UI/Breadcrumb/type'

const items: BreadcrumbItems = [
  { id: 'home', label: 'Home', labelIcon: iconName.HOUSE, actived: true },
  { id: 'product', label: 'Product', labelIcon: iconName.BOX_ARCHIVE },
  { id: 'about', label: 'About', labelIcon: iconName.BOOKMARK }
]
</script>

<template>
  <Breadcrumb :items="items" />
</template>
`

export const breadcrumbIconReactCode = `
import { FaArchive, FaBookmark, FaHome } from "react-icons/fa";
import { Breadcrumb, Space } from "./components/UI";
import { BreadcrumbItems } from "./components/UI/Breadcrumb/type";

const App: React.FC = () => {
  const items: BreadcrumbItems = [
    {
      id: "home",
      label: (
        <Space>
          <FaHome />
          <span>Home</span>
        </Space>
      ),
      actived: true,
    },
    {
      id: "product",
      label: (
        <Space>
          <FaArchive />
          <span>Product</span>
        </Space>
      ),
    },
    {
      id: "about",
      label: (
        <Space>
          <FaBookmark />
          <span>About</span>
        </Space>
      ),
    },
  ];

  return <Breadcrumb items={items} />;
};

export default App;
`