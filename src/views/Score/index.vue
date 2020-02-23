<template>
  <v-container>
    <h1 class="display-3 grey--text my-5">Score</h1>
    <br />
    <br />
    <div class="title grey--text">View you're progress</div>
    <v-divider></v-divider>
    <div id="repository">
      <h3 class="display-1 mt-5">Your repository</h3>
      <a href style="text-decoration:none" class="title">
        {{ user.githubRepo }}</a
      >
    </div>
    <br />

    <div id="score">
      <h3 class="display-1">Most Receny Score</h3>
      <template>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="title text-left">Test</th>
                <th class="title text-left">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-show="isTest(test)"
                v-for="(value, test) in user.scores[user.scores.length - 1]"
                v-bind:key="(test, value)"
              >
                <td>{{ test }}</td>
                <td>
                  <v-icon v-if="value" class="ml-2">mdi-check-bold</v-icon>
                  <v-icon v-else-if="!value" class="ml-2"
                    >mdi-window-close</v-icon
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </template>
    </div>

    <div id="refresh-scores">
      <v-btn class="ma-2 mt-5" outlined color="blue" @click="updateUser"
        >Refresh Scores</v-btn
      >
    </div>

    <template>
      <v-container fluid>
        <v-data-iterator
          :items="this.user.scores"
          :items-per-page.sync="itemsPerPage"
          :page="page"
          hide-default-footer
        >
          <template v-slot:header>
            <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
              <v-toolbar-title>Previous Scores</v-toolbar-title>
            </v-toolbar>
          </template>

          <template v-slot:default="props">
            <v-row>
              <v-col
                v-for="item in props.items"
                :key="item"
                cols="12"
                sm="7"
                md="5"
                lg="4"
              >
                <v-card class="align-end">
                  <v-card-title class="subheading font-weight-bold">
                    Submission
                    {{ timestampToTime(item.timestamp) }}</v-card-title
                  >

                  <v-divider></v-divider>

                  <v-list dense>
                    <v-list-item
                      v-show="isTest(test)"
                      v-for="(value, test) in item"
                      v-bind:key="(test, value)"
                    >
                      <v-list-item-content
                        ><span class="text-left"
                          >{{ test }}:
                        </span></v-list-item-content
                      >
                      <v-list-item-content
                        ><span class="text-right">
                          <v-icon v-if="value" class="ml-2"
                            >mdi-check-bold</v-icon
                          >
                          <v-icon v-else-if="!value" class="ml-2"
                            >mdi-window-close</v-icon
                          >
                        </span>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </template>

          <template v-slot:footer>
            <v-toolbar class="mt-2" color="indigo" dark flat>
              <v-toolbar-title class="subheading"></v-toolbar-title>
            </v-toolbar>
          </template>
        </v-data-iterator>
      </v-container>
    </template>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: this.$store.state.user,
      error: ""
    };
  },

  methods: {
    isTest(keyString) {
      return !(
        keyString == "_id" ||
        keyString == "timestamp" ||
        keyString == "__v"
      );
    },

    timestampToTime(timestamp) {
      var date = new Date(timestamp * 1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    },

    async updateUser() {
      const { data: user } = await axios.get(
        process.env.VUE_APP_API_BASE_URL +
          "/users/username/" +
          this.user.githubUsername +
          "?scores=true"
      );
      this.user = user;
      this.$store.dispatch("setUser", user);
    }
  },
  mounted() {}
};
</script>
