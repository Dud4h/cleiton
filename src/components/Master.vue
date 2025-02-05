<template>
  <v-app>
    <!-- Barra Superior -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="menuOpen = !menuOpen"></v-app-bar-nav-icon>
      <v-toolbar-title>Meu App</v-toolbar-title>
    </v-app-bar>

    <!-- Menu Lateral -->
    <v-navigation-drawer v-model="menuOpen" app>
      <v-list>
        <v-list-item title="Menu"></v-list-item>
        <v-divider></v-divider>

        <v-list-item v-for="item in menuItems" :key="item.text" :to="item.route">
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          {{ item.text }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Conteúdo Principal -->
    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: true,
      menuItems: [
        { text: "Início", icon: "mdi-home", route: "/" },
        { text: "Configurações", icon: "mdi-cog", route: "/profile" },
      ],
    };
  },
};
</script>

<style scoped>
/* Estilização opcional */
</style>
