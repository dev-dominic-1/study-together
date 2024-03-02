<template>
  <v-tooltip color="secondary" v-bind="{[positionProp]: true}">
    <template #activator="{ on, attrs }">
      <slot v-bind="{on, attrs}">
        <v-icon v-bind="attrs" v-on="on">mdi-information</v-icon>
      </slot>
    </template>
    <span class="body-4">Feature not yet available</span>
  </v-tooltip>
</template>

<script>
const POSITION_PROPS = ['top', 'left', 'bottom', 'right']
export default {
  name: 'WipTooltip',
  props: {
    ...POSITION_PROPS.reduce((acc, p, index) => {
      if (index === POSITION_PROPS.length - 1) return {...acc, [p]: {type: Boolean, default: true}}
      return {...acc, [p]: Boolean}
    }, {}),
  },
  computed: {
    positionProp () {
      return POSITION_PROPS.find(p => this[p])
    }
  }
}
</script>