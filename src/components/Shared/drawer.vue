<template>
  <v-navigation-drawer
    height="100%"
    width="17%"
    color="primary"
    floating
    permanent
    app
  >
    <v-list-item>
      <v-list-item-content class="white--text ma-3">
        <span class="display-2">TechGames</span>
        <br />
        <span class="title font-weight-light">Backend Challenge</span>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        class="py-3"
        v-for="item in items"
        :key="item.title"
        link
        router
        :to="item.link"
      >
        <v-list-item-icon>
          <v-icon large class="white--text ml-3">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="white--text title text-uppercase">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-if="!$store.state.isUserLoggedIn"
        class="py-3"
        link
        router
        to="/login"
      >
        <v-list-item-icon>
          <v-icon large class="white--text ml-3">mdi-login-variant</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="white--text title text-uppercase"
            >login</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-if="$store.state.isUserLoggedIn"
        class="py-3"
        link
        router
        to="/score"
      >
        <v-list-item-icon>
          <v-icon large class="white--text ml-3">mdi-scoreboard</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="white--text title text-uppercase"
            >score</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        @click="logout"
        v-if="$store.state.isUserLoggedIn"
        class="py-3"
        link
      >
        <v-list-item-icon>
          <v-icon large class="white--text ml-3">mdi-logout-variant</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="white--text title text-uppercase"
            >logout</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-view-dashboard", link: "/" },
        { title: "Tasks", icon: "mdi-clipboard-list", link: "/tasks" }
      ],
      mini: false
    };
  },

  methods: {
    logout() {
      this.$store.dispatch("setIsUserLoggedIn", false);
      this.$store.dispatch("setUser", null);
      this.$router.push("/login");
    }
  }
};
</script>
