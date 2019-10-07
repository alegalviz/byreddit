<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-card
        max-width="344"
        class="mx-auto"
        v-for="i in 10"
        v-bind:key="i"
      >
        <v-card-title>I'm a title</v-card-title>
        <v-card-text>I'm card text</v-card-text>
        <v-card-actions>
          <v-btn text>Click</v-btn>
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Reader for Reddit</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    drawer: null
  })
};
</script>
