<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Roster />
  </div>
</template>

<script>
// @ is an alias to /src
import Roster from '@/components/Roster.vue'

export default {
  name: 'Home',
  components: {
    Roster
  }
}
</script>
