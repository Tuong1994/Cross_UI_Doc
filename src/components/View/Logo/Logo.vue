<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Space, Image, Typography } from '@/components/UI'
import { routePaths } from '@/router'
import vueLogo from '/vue-logo.svg'
import cxuiLogo from '/cxui-logo.png'

const { Paragraph } = Typography
</script>

<template>
  <RouterLink :to="routePaths.HOME" class="logo">
    <Space aligns="middle">
      <Image rootClassName="logo-image" :imgWidth="30" :src="cxuiLogo" />
      <Paragraph strong :size="18" rootClassName="logo-name">CrossUI</Paragraph>
    </Space>
  </RouterLink>
</template>
