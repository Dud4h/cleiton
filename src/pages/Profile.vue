<template>
  <Master>
    <v-container>
    <v-card class="mx-auto my-5" max-width="500" elevation="4">
      <v-card-title class="text-center">Editar Perfil</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="user.name"
            label="Nome"
            :rules="[rules.required]"
            prepend-inner-icon="mdi-account"
          ></v-text-field>

          <v-text-field
            v-model="user.email"
            label="E-mail"
            :rules="[rules.required, rules.email]"
            prepend-inner-icon="mdi-email"
          ></v-text-field>

          <v-text-field
            v-model="user.phone"
            label="Telefone"
            prepend-inner-icon="mdi-phone"
            :rules="[rules.required]"
          ></v-text-field>

          <v-textarea
            v-model="user.bio"
            label="Sobre você"
            prepend-inner-icon="mdi-pencil"
            rows="3"
          ></v-textarea>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn color="primary" block :disabled="!valid" @click="salvarPerfil">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
  </Master>
</template>

<script>
import Master from "@/components/Master.vue";

export default {
  components: {Master},
  data() {
    return {
      valid: false,
      user: {
        name: "João da Silva",
        email: "joao@email.com",
        phone: "(11) 99999-9999",
        bio: "Desenvolvedor apaixonado por tecnologia.",
      },
      rules: {
        required: (v) => !!v || "Campo obrigatório",
        email: (v) => /.+@.+\..+/.test(v) || "E-mail inválido",
      },
    };
  },
  methods: {
    salvarPerfil() {
      if (this.$refs.form.validate()) {
        alert("Perfil salvo com sucesso!");
      }
    },
  },
};
</script>
