<template>
  <v-dialog
    :value="value"
    persistent
    width="450px"
    max-width="90vw"
  >
    <v-card color="background">
      <v-toolbar class="elevation-0" color="transparent">
        <v-btn
          color="text"
          icon
          :disabled="!tab"
          @click="goBack"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <span>Sign in or Sign up</span>
        <v-spacer />
        <v-btn
          color="text"
          icon
          @click="$emit('input', false)"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="pt-8" />
      <div class="text--text px-4 pb-4">
        <v-tabs v-model="tab" style="display: none">
          <v-tab v-for="tab in tabs" :key="`tab-${tab}`" />
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item :key="tabKeys.EMAIL">
            <email-page @set-tab="setTab" />
          </v-tab-item>
          <v-tab-item :key="tabKeys.REGISTER">
            <register-page @set-tab="setTab" />
          </v-tab-item>
          <v-tab-item :key="tabKeys.PASSWORD">
            <password-page @set-tab="setTab" />
          </v-tab-item>
        </v-tabs-items>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import EmailPage from "@/components/sign-in/EmailPage.vue";
import RegisterPage from "@/components/sign-in/RegisterPage.vue";
import PasswordPage from "@/components/sign-in/PasswordPage.vue";

const tabKeys = {
  EMAIL: 'EMAIL',
  REGISTER: 'REGISTER',
  PASSWORD: 'PASSWORD',
  PROFILE: 'PROFILE',
  BIO: 'BIO'
}
export default {
  name: 'SignInDialog',
  components: {PasswordPage, RegisterPage, EmailPage},
  provide () {
    return {
      $tabKeys: tabKeys,
      $formData: () => {return this.formData},
    }
  },
  props: {
    value: Boolean,
  },
  data () {
    return {
      tab: 0,
      tabs: Object.keys(tabKeys),
      formData: {
        email: '',
        registered: false,
        password: '',
        confirmPassword: '',
        displayName: '',
        institution: '',
        Major: '',
        bio: ''
      }
    }
  },
  computed: {
    tabKeys () {return tabKeys}
  },
  watch: {
    value (v) {
      if (!v) this.tab = 0
    }
  },
  methods: {
    goBack () {
      switch (this.tabs[this.tab]) {
        case tabKeys.REGISTER:
        case tabKeys.PASSWORD:
        case tabKeys.PROFILE:
          this.setTab(tabKeys.EMAIL)
          break
        case tabKeys.BIO:
          this.setTab(tabKeys.PROFILE)
      }
    },
    setTab (tabKey) {
      this.tab = this.tabs.findIndex(e => e === tabKey)
    }
  }
}
</script>
