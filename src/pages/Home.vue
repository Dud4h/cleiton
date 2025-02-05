<template>
  <Master>
    <v-container>
      <v-text-field v-model="search" label="Pesquisar" class="mb-4" clearable />
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        :items-per-page="5"
        class="elevation-1"
      />
    </v-container>
  </Master>
</template>

<script>
import Master from "@/components/Master.vue";

export default {
  components: {Master},
  data() {
    return {
      search: "",
      items: [
        { id: 1, name: 'João Silva', email: 'joao@email.com' },
        { id: 2, name: 'Maria Souza', email: 'maria@email.com' },
        { id: 3, name: 'Carlos Mendes', email: 'carlos@email.com' },
        { id: 4, name: 'Ana Oliveira', email: 'ana@email.com' },
        { id: 5, name: 'Pedro Santos', email: 'pedro@email.com' },
        { id: 6, name: 'Mariana Lima', email: 'mariana@email.com' },
      ],
      headers: [
        { title: 'ID', key: 'id', align: 'start', sortable: true },
        { title: 'Nome', key: 'name', sortable: true },
        { title: 'E-mail', key: 'email', sortable: true },
      ]
    }
  }
}
</script>
