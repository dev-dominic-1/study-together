<template>
  <div class="background">
    <span class="heading-2">Enter Your Password</span>
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
      type="password"
    />
  </div>
</template>

<script>
export default {
  name: 'PasswordPage',
  inject: ['$formData'],
}
</script>