<script setup lang="ts">
import { Layout, Section } from '@/components/UI'
import Header from '../Header/Header.vue'
import SideMenu from '../SideMenu/SideMenu.vue'

const { Container, Body, Side, Content } = Layout
</script>

<template>
  <Container>
    <Header />
    <Body>
      <Side>
        <SideMenu />
      </Side>
      <Content>
        <Section>
          <slot></slot>
        </Section>
      </Content>
    </Body>
  </Container>
</template>
