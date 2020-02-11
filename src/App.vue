<template>
  <v-app>
    <Drawer />
    <v-content class="ma-3">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Drawer from "@/components/Shared/drawer";

export default {
  name: "App",

  data: () => ({
    //
  }),

  components: {
    Drawer
  }
};
</script>
