<script setup lang="ts">
import { Layout, Section, Flex } from '@/components/UI'
import Header from '../Header/Header.vue'
import SideMenu from '../SideMenu/SideMenu.vue'
import SideCataLog from '../SideCataLog/SideCataLog.vue';

const { FlexRow, FlexCol } = Flex

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
          <FlexRow>
            <FlexCol :span="20">
              <slot></slot>
            </FlexCol>
            <FlexCol :span="4">
              <SideCataLog />
            </FlexCol>
          </FlexRow>
        </Section>
      </Content>
    </Body>
  </Container>
</template>
