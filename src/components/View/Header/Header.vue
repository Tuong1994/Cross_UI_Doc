<script setup lang="ts">
import { ref } from 'vue'
import { Button, Icon, Flex, Layout } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { useViewPoint } from '@/hooks'
import Logo from '../Logo/Logo.vue'
import HeaderMode from './HeaderMode.vue'
import HeaderTranslate from './HeaderTranslate.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import HeaderMobile from './HeaderMobile.vue'

const { Head } = Layout

const { FlexRow, FlexCol } = Flex

const layout = useLayoutStore()

const {} = useViewPoint()

const openSide = ref<boolean>(false)

const handleOpenSide = () => openSide.value = !openSide.value
</script>

<template>
  <Head>
    <FlexRow justify="between" aligns="middle">
      <FlexCol>
        <Logo />
      </FlexCol>
      <FlexCol :xs="0" :span="6">
        <FlexRow>
          <FlexCol :span="10">
            <HeaderMode />
          </FlexCol>
          <FlexCol :span="14">
            <HeaderTranslate />
          </FlexCol>
        </FlexRow>
      </FlexCol>
      <FlexCol :span="0">
        <Button :color="layout.color" @click="handleOpenSide">
          <Icon :iconName="iconName.LIST" />
        </Button>
      </FlexCol>
    </FlexRow>
    <HeaderMobile :open="openSide" @onClose="handleOpenSide" />
  </Head>
</template>
