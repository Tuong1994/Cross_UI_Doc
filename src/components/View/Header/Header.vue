<script setup lang="ts">
import { computed, ref } from 'vue'
import { Button, Space, Icon, Flex, Layout } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { useRouter } from 'vue-router'
import { useViewPoint } from '@/hooks'
import { routeNames } from '@/router'
import Logo from '../Logo/Logo.vue'
import HeaderSearch from './HeaderSearch.vue'
import HeaderMode from './HeaderMode.vue'
import HeaderTranslate from './HeaderTranslate.vue'
import HeaderMobile from './HeaderMobile.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Head } = Layout

const { FlexRow, FlexCol } = Flex

const layout = useLayoutStore()

const { isPhone, isTablet } = useViewPoint()

const { currentRoute } = useRouter()

const openSide = ref<boolean>(false)

const responsive = computed<boolean>(() => Boolean(isPhone.value || isTablet.value))

const hasSearch = computed<boolean>(() => currentRoute.value.name !== routeNames.HOME)

const handleOpenSide = () => (openSide.value = !openSide.value)
</script>

<template>
  <Head>
    <FlexRow justify="between" aligns="middle">
      <FlexCol>
        <Space size="lg">
          <Logo />
          <HeaderSearch v-if="hasSearch && !responsive" />
        </Space>
      </FlexCol>
      <FlexCol :xs="0" :md="12" :lg="8" :span="6">
        <FlexRow justify="end">
          <FlexCol :md="10" :lg="12" :span="8">
            <HeaderMode />
          </FlexCol>
          <FlexCol :md="10" :lg="12" :span="8">
            <HeaderTranslate />
          </FlexCol>
        </FlexRow>
      </FlexCol>
      <FlexCol :lg="0" :span="0">
        <Button :color="layout.color" @click="handleOpenSide">
          <Icon :iconName="iconName.LIST" />
        </Button>
      </FlexCol>
    </FlexRow>
    <HeaderMobile v-if="responsive" :open="openSide" @onClose="handleOpenSide" />
  </Head>
</template>
