<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Divider, Typography, Flex, Button, Card } from '@/components/UI'
import { Input } from '@/components/Control'
import type { SideMenuItems } from '@/components/View/SideMenu/type'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'
import useMenu from '@/components/View/SideMenu/useMenu'

const { Title, Paragraph } = Typography

const { FlexRow, FlexCol } = Flex

const t = useLangStore()

const layout = useLayoutStore()

const menus = useMenu()

const search = ref<string>('')

const filterMenus = computed<SideMenuItems>(() => {
  if (!search.value) return menus.value
  const newMenus = menus.value.map((menu) => ({
    ...menu,
    items: menu.items.filter((item) => item.label.toLowerCase().includes(search.value.toLowerCase()))
  })).filter(menu => menu.items.length > 0)
  return newMenus
})
</script>

<template>
  <Title>Vue Components</Title>
  <Paragraph>
    {{ t.lang.home.desc }}
  </Paragraph>
  <Divider />
  <FlexRow>
    <FlexCol :span="10">
      <Input v-model="search" :placeholder="t.lang.common.form.placeholder.search" :color="layout.color" />
    </FlexCol>
    <FlexCol>
      <Button :color="layout.color">
        {{ t.lang.common.form.placeholder.search }}
      </Button>
    </FlexCol>
  </FlexRow>
  <div class="home-menu">
    <Card v-for="menu in filterMenus" :key="menu.id" class="menu-group" hoverable>
      <template #body>
        <Paragraph strong :size="18" variant="secondary" rootClassName="group-category">
          {{ menu.category }}
        </Paragraph>
        <FlexRow>
          <FlexCol v-for="item in menu.items" :key="item.id">
            <RouterLink :to="String(item.path)">
              <Button :color="layout.color" ghost>
                {{ item.label }}
              </Button>
            </RouterLink>
          </FlexCol>
        </FlexRow>
      </template>
    </Card>
  </div>
</template>
