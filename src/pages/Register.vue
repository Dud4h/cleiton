<template>
  <v-app>
    <v-main>
      <v-container class="d-flex justify-center align-center h-100 mt-5">
        <v-card class="v-col-6 pa-5">
          <v-card-title class="text-center">Cadastrar</v-card-title>
          <v-card-text>
            <v-form>
              <v-alert
                v-if="hasError"
                type="error"
                variant="text"
                dense
                class="my-2"
              >
                Preencha todos os campos
              </v-alert>

              <v-text-field
                label="Nome"
                v-model="name"
                type="name"
                required
              ></v-text-field>

              <v-text-field
                label="Email"
                v-model="email"
                type="email"
                required
              ></v-text-field>

              <v-text-field
                label="Senha"
                v-model="password"
                type="password"
                required
              ></v-text-field>

              <v-btn
                class="mt-4"
                color="primary"
                block
                @click="handleRegister"
              >
                Cadastrar-se
              </v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="navigateToLogin">Entrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: '',
      password: '',
      hasError: false
    };
  },
  methods: {
    handleRegister() {
      if (!this.email || !this.password || !this.name) {
        this.hasError = true;
        return;
      }

      const user = {
        name: this.name,
        email: this.email,
        password: this.password,
      }

      this.$store.dispatch("auth/addUser", user);
    },
    navigateToLogin() {
      this.$router.push('/login');
    },
  },
};
</script>

<style>
.text-center {
  text-align: center;
}
</style>
