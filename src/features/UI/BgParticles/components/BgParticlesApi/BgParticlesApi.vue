<script setup lang="ts">
import { computed } from 'vue'
import { ECodeElType } from '@/components/View/Code/enum'
import { bgParticlesCatalogIds } from '@/features/UI/BgParticles/repository/catalogIds'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'id',
    props: 'id',
    desc: t.lang.backgrounds.particles.api.particlesDesc.id,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: 'tsparticles'
  },
  {
    id: 'hasColor',
    props: 'hasColor',
    desc: t.lang.backgrounds.particles.api.particlesDesc.hasColor,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.backgrounds.particles.api.particlesDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType()
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'zIndex',
    props: 'zIndex',
    desc: t.lang.backgrounds.particles.api.particlesDesc.zIndex,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '0'
  },
  {
    id: 'fullScreen',
    props: 'fullScreen',
    desc: t.lang.backgrounds.particles.api.particlesDesc.fullScreen,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'options',
    props: 'options',
    desc: t.lang.backgrounds.particles.api.particlesDesc.options,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ISourceOptions']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.backgrounds.particles.api.particlesDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootStyle',
    props: 'rootStyle',
    desc: t.lang.backgrounds.particles.api.particlesDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'id',
    props: 'id',
    desc: t.lang.backgrounds.particles.api.particlesDesc.id,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: 'tsparticles'
  },
  {
    id: 'hasColor',
    props: 'hasColor',
    desc: t.lang.backgrounds.particles.api.particlesDesc.hasColor,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.backgrounds.particles.api.particlesDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType()
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'zIndex',
    props: 'zIndex',
    desc: t.lang.backgrounds.particles.api.particlesDesc.zIndex,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '0'
  },
  {
    id: 'fullScreen',
    props: 'fullScreen',
    desc: t.lang.backgrounds.particles.api.particlesDesc.fullScreen,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'options',
    props: 'options',
    desc: t.lang.backgrounds.particles.api.particlesDesc.options,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ISourceOptions']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.backgrounds.particles.api.particlesDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootStyle',
    props: 'style',
    desc: t.lang.backgrounds.particles.api.particlesDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout
    title="BG Particles"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="bgParticlesCatalogIds.BG_PARTICLES_API"
  />
</template>
