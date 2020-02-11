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
          <v-list-item-title class="white--text title text-uppercase">
            {{ item.title }}
          </v-list-item-title>
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
        { title: "Tasks", icon: "mdi-clipboard-list", link: "/tasks" },
        { title: "Login", icon: "mdi-login-variant", link: "/login" }
      ],
      mini: false
    };
  }
};
</script>
