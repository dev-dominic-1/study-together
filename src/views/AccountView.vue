<template>
  <div class="about">
    <div class="header" />
  </div>
</template>

<script>
export default {
  name: 'AccountView'
}
</script>

<style scoped>
.about {
  width: 100%;
  background: url(../assets/Images/Desktop/Profile/Background/ellipse-bottom.png),
    url(../assets/Images/Desktop/Profile/Background/ellipse-middle.png),
    url(../assets/Images/Desktop/Profile/Background/ellipse-top.png);
  background-repeat: no-repeat;
  background-position: left -10% top 40%, left -15% top 40%, left -8% top 20%;
  background-size: 35%;
}
.header {
  height: 300px;
  width: 110%;
  transform: translate(-12px, -8px);
  background-image: url(../assets/Images/Desktop/Profile/2x/Profile-Cover-Photo-Desktop2x.jpg);
  background-size: cover;
}
</style>