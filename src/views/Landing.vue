<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 text-xs-center mt-5>
        <h1>Welcome to Swolemates</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <blockquote class="blockquote text-xs-center">
          It's a basic Single Page application <br>
          with Google Firebase authentication
        </blockquote>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3 class="text-xs-center" mt-5>
        <v-btn color="primary" to="/signup">Sign Up</v-btn>
        <v-btn to="/signin">Sign In</v-btn>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <google-auth-button></google-auth-button>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import GoogleAuthButton from '../components/GoogleAuthButton.vue'
export default {
  components: {
    GoogleAuthButton
  }
}
</script>
