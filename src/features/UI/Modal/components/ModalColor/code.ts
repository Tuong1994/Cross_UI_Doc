export const modalColorVueCode = `
<script setup lang="ts">
import { computed, ref } from 'vue'
import { Modal, Space, Button } from '@/components/UI'
import type { ComponentColor } from '@/common/type'
import type { ButtonColor } from '@/components/UI/Button/type'

const open = ref<boolean>(false)

const currentColor = ref<ComponentColor>('green')

const colors = computed<ComponentColor[]>(() => [
  'blue',
  'green',
  'red',
  'orange',
  'yellow',
  'purple',
  'pink'
])

const handleOpenModal = (color: ComponentColor) => {
  currentColor.value = color
  open.value = !open.value
}
</script>

<template>
  <Space>
    <Button
      v-for="color in colors"
      :key="color"
      :color="color as ButtonColor"
      @click="handleOpenModal(color)"
    >
      Click me
    </Button>
  </Space>
  <Modal :color="currentColor" :open="open" @onClose="handleOpenModal">
    <template #head> Modal </template>
    <template #body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae eum, laborum autem pariatur
      beatae consectetur harum magnam est numquam officia optio quae, odit totam aliquid eligendi iste culpa
      eveniet quo, in consequuntur aspernatur. Eaque quae repellat repellendus voluptatem, similique,
      asperiores veniam vero recusandae unde quidem eligendi atque consectetur fugit!
    </template>
  </Modal>
</template>
`

export const modalColorReactCode = `
import { useState } from "react";
import { Modal, Button, Space } from "./components/UI";
import { ComponentColor } from "./common/type";
import { ButtonColor } from "./components/UI/Button/type";

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [modalColor, setModalColor] = useState<ComponentColor>("blue");

  const colors: ButtonColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink"];

  const handleTrigger = (color?: ButtonColor) => {
    if (color) setModalColor(color);
    setOpen(!open);
  };

  return (
    <>
      <Space>
        {colors.map((color) => (
          <Button key={color} color={color} onClick={() => handleTrigger(color)}>
            Click me
          </Button>
        ))}
      </Space>
      <Modal color={modalColor} open={open} onCancel={handleTrigger}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita provident aliquam placeat
        repudiandae maiores porro cupiditate doloremque libero nam? Corrupti, dolores libero aliquam magnam
        quas aspernatur cumque error provident laborum cupiditate accusamus veniam, incidunt blanditiis sint
        possimus itaque aut sed atque? Asperiores saepe animi aspernatur impedit illum harum minima corporis
        earum fugiat eveniet velit, officia, quaerat facere voluptatem, laboriosam iure nobis quo nesciunt
        sint illo beatae veniam. Sequi ut et quaerat, assumenda iusto corrupti facere consequatur delectus
        dolore. Laudantium ipsa dignissimos atque incidunt ut quisquam illum velit veritatis sunt nobis
        accusamus, id ipsam ullam delectus possimus enim modi! Repellat aliquam cum veniam sit ipsum illum sed
        expedita, ipsam cumque doloremque molestias harum? Voluptatibus nihil laboriosam similique veniam
        corporis, quisquam in ullam sit voluptas reiciendis ea perferendis illum omnis accusantium alias!
        Error laboriosam et expedita sint eos aperiam aspernatur delectus laborum. Asperiores, quaerat? Quasi
        ex eius inventore quaerat itaque voluptas voluptate recusandae in, nihil voluptatibus? Quisquam
        commodi soluta accusantium explicabo, officia, hic delectus inventore aperiam quo, quam consequuntur
        provident. Impedit minus, nihil aut obcaecati ex qui dicta vero tempore repellat ad aperiam nulla
        architecto debitis, quis alias asperiores temporibus unde aliquid. Officia explicabo velit magnam
        voluptatem ut ex qui eveniet!
      </Modal>
    </>
  );
};

export default App;
`