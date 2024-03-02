<template>
  <div class="background">
    <span class="heading-2">Create Your Account</span>
    <v-text-field
      v-model="$formData().email"
      label="Email"
      color="secondary"
      outlined
      hide-details="auto"
      class="pt-6"
    />
    <v-text-field
      v-model="$formData().password"
      label="Password"
      color="secondary"
      outlined
      hide-details="auto"
      class="pt-4"
      :class="{'type-password': !showPassword}"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-closed'"
      @click:append="showPassword = !showPassword"
    />
    <v-text-field
      v-model="$formData().confirmPassword"
      label="Confirm Password"
      color="secondary"
      outlined
      hide-details="auto"
      class="pt-4"
      :class="{'type-password': !showConfirmPassword}"
      :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-closed'"
      @click:append="showConfirmPassword = !showConfirmPassword"
    />
    <div class="pt-6" />
    <div class="d-flex justify-end">
      <v-btn color="secondary white--text" class="rounded-l">
        Set Up Profile
        <v-icon small class="pl-2">mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  inject: ['$formData'],
  data () {
    return {
      showPassword: false,
      showConfirmPassword: false,
    }
  }
}
</script>

<style scoped>
.type-password >>> input {
  -webkit-text-security: disc;
}
</style>