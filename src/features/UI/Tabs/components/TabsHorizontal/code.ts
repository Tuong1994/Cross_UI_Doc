export const tabsBasicVueCode = `
<script setup lang="ts">
import { Tabs } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'

const tabItems = [
  { id: 'item-1', label: 'Item 1', comName: 'item-1', labelIcon: iconName.USER },
  { id: 'item-2', label: 'Item 2', comName: 'item-2', labelIcon: iconName.USER },
  { id: 'item-3', label: 'Item 3', comName: 'item-3', labelIcon: iconName.USER }
]
</script>

<template>
  <Tabs :items="tabItems">
    <template #content="tab">
      <div v-if="tab.content.comName === 'item-1'">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore laborum labore, iure
        deleniti neque beatae asperiores suscipit cum adipisci excepturi impedit architecto culpa mollitia
        ratione doloribus modi quisquam autem enim perspiciatis molestias necessitatibus qui cupiditate.
        Expedita, saepe fugiat autem reprehenderit tempore dolor cumque sit corporis numquam, similique
        excepturi laborum.
      </div>
      <div v-if="tab.content.comName === 'item-2'">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sapiente id cupiditate ducimus
        laudantium, quo aspernatur nam eius qui iste!
      </div>
      <div v-if="tab.content.comName === 'item-3'">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eius animi nihil consectetur quae illum
        unde ab totam magni nesciunt.
      </div>
    </template>
  </Tabs>
</template>
`

export const tabsBasicReactCode = `
import { FaBookmark } from "react-icons/fa";
import { Tabs } from "./components/UI";
import { TabsItems } from "./components/UI/Tabs/type";

const App: React.FC = () => {
  const items: TabsItems = [
    {
      id: "tab-1",
      title: "Tab 1",
      icon: <FaBookmark />,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore laborum labore, iure deleniti neque beatae asperiores suscipit cum adipisci excepturi impedit architecto culpa mollitia ratione doloribus modi quisquam autem enim perspiciatis molestias necessitatibus qui cupiditate.  Expedita, saepe fugiat autem reprehenderit tempore dolor cumque sit corporis numquam, similique excepturi laborum.",
    },
    {
      id: "tab-2",
      title: "Tab 2",
      icon: <FaBookmark />,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore laborum labore, iure deleniti neque beatae asperiores suscipit cum adipisci excepturi impedit architecto culpa mollitia ratione doloribus modi quisquam autem enim perspiciatis molestias necessitatibus qui cupiditate.",
    },
    {
      id: "tab-3",
      title: "Tab 3",
      icon: <FaBookmark />,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore laborum labore",
    },
  ];

  return <Tabs color="blue" items={items} />;
};

export default App;
`
