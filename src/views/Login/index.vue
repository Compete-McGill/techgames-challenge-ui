<template>
  <v-container>
    <h1 class="display-3 grey--text my-5">Login</h1>
    <br />
    <br />
    <div class="title grey--text">Login to fork our template repo and start the challenge!</div>
    <br />
    <v-btn text class="primary--text title" @click="login">
      Login with
      <v-icon large class="ml-2">mdi-github-circle</v-icon>
    </v-btn>
    <div class="red--text" v-html="error"></div>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      error: ""
    };
  },

  methods: {
    async login() {
      try {
        const auth = await this.$auth.authenticate("github");
        if (auth.status == 200) {
          const { data: githubUser } = await axios.get(
            "https://api.github.com/user",
            {
              headers: {
                Authorization: "Bearer " + auth.data.access_token
              }
            }
          );

          const { data: user } = await axios.get(
            process.env.VUE_APP_API_BASE_URL +
              "/users/username/" +
              githubUser.login +
              "?scores=true"
          );
          this.$store.dispatch("setUser", user);
          this.$store.dispatch("setIsUserLoggedIn", true);
          this.$router.push("/");
        } else {
          this.error = auth.data.message;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
