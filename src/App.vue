<template>
  <v-app id="inspire">
    <v-navigation-drawer
            app
            temporary
            v-model="drawer"
    >
      <v-list dense>
        <v-list-item
                v-for="link of links"
                :key="link.title"
                :to="link.url"
        >
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="link.title">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
              class="hidden-md-and-up"
      />
      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
                v-for="link in links"
                :key="link.title"
                :to="link.url"
                text
        >
          <v-icon left>
            {{link.icon}}
          </v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>


    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
    links: [
      {title: 'Login', icon: 'lock', url: '/login'},
      {title: 'Registration', icon: 'face', url: '/registration'},
      {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
      {title: 'New ad', icon: 'note_add', url: '/new'},
      {title: 'My ads', icon: 'list', url: '/list'}
    ]
  }),
};
</script>
