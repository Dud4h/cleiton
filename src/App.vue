<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { useStore } from "vuex";
import { onMounted } from "vue";

export default {
  setup() {
    const store = useStore();

    onMounted(async () => {
      await store.dispatch("auth/checkSession");
      await store.dispatch("auth/setUsers");
    });
  },
};
</script>

<style>

</style>
