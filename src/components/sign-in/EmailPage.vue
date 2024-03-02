<template>
  <div class="background">
    <span class="heading-2">Welcome to Study Together!</span>
    <v-form ref="form">
      <v-text-field
        v-model="$formData().email"
        label="Email"
        color="secondary"
        outlined
        class="pt-6"
        :rules="[
          (v) => {return !v.includes('@') || !v.split('@')[1]?.includes('.') || 'Please enter a valid email address'}
        ]"
        hide-details="auto"
      />
    </v-form>
    <v-btn
      class="secondary background--text mt-4"
      block
      x-large
      @click="doUserLookup($formData().email)"
    >
      Continue
    </v-btn>
    <div class="alt-sign-in-wrapper">
      <hr>
      <span class="heading-2">or</span>
      <hr>
    </div>
    <wip-tooltip bottom #default="{ attrs, on }">
      <div
        v-bind="attrs"
        class="alt-sign-in-button"
        v-on="on"
      >
        <v-btn
          block
          color="background"
          x-large
          disabled
        >
          Continue with Google
        </v-btn>
        <v-icon>mdi-google</v-icon>
      </div>
    </wip-tooltip>
    <wip-tooltip bottom #default="{ on, attrs }">
      <div
        v-bind="attrs"
        class="alt-sign-in-button mt-4"
        v-on="on"
      >
        <v-btn
          block
          color="background"
          x-large
          disabled
        >
          Continue with Apple
        </v-btn>
        <v-icon>mdi-apple</v-icon>
      </div>
    </wip-tooltip>
  </div>
</template>

<script>
import WipTooltip from "@/components/sub-components/WipTooltip.vue";
import ApiConnector from "@/api/ApiConnector";
import ApiQueryParameters from "@/api/ApiQueryParameters";
import {RESPONSE_CODES} from "@/constants";
export default {
  name: 'EmailPage',
  components: {WipTooltip},
  inject: ['$formData', '$tabKeys'],
  methods: {
    async doUserLookup (email) {
      if (!this.$refs.form.validate()) return
      let resp = await new ApiConnector(this, 'user', ['findByEmail'], new ApiQueryParameters({email})).suppressErrors().get()
      switch (resp.statusCode) {
        case RESPONSE_CODES.OK:
          this.$emit('set-tab', this.$tabKeys.PASSWORD)
          break
        case RESPONSE_CODES.NOT_FOUND:
          this.$emit('set-tab', this.$tabKeys.REGISTER)
          break
      }
    }
  }
}
</script>

<style scoped>
.alt-sign-in-wrapper {
  padding: 32px 0;
  opacity: 0.55;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-column-gap: 12px;
  align-items: center;
  &>*:nth-child(2) {
    transform: translateY(-2px);
  }
}
.alt-sign-in-button {
  position: relative;
  &>.v-icon {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
  }
}
</style>