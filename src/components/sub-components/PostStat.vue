<template>
  <v-hover class="wrapper" #default="{ hover }">
    <div
      class="d-flex align-center elevation-2"
      :style="{
        background: $vuetify.theme.currentTheme.primary,
        border: `4px solid ${$vuetify.theme.currentTheme.primary}`,
        borderRadius: '999px',
      }"
    >
      <v-icon
        color="text"
        class="timestamp"
        :class="{expanded: hover}"
      >
        {{ POST_STAT.icon }}
      </v-icon>
      <v-expand-x-transition>
        <div v-if="hover">
          <div class="px-3 body-2 text-no-wrap">
            {{ POST_STAT.text }}
          </div>
        </div>
      </v-expand-x-transition>
    </div>
  </v-hover>
</template>

<script>
import {POST_STATS} from "@/constants";
export default {
  name: 'PostStat',
  props: {
    type: {
      type: String,
      validator (v) {return !!POST_STATS[v]},
      default: ''
    }
  },
  computed: {
    POST_STAT () {
      return POST_STATS[this.type]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  cursor: default;
}
</style>