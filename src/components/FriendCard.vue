<template>
  <v-card min-height="200px" color="background">
    FRIEND
  </v-card>
</template>

<script>
export default {
  name: 'FriendCard',
  props: {
    friend: {
      type: Object,
      default () {return {}}
    }
  }
}
</script>