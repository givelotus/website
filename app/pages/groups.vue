<template>
  <v-container class="page-wrap pt-16">
    <h1 class="pt-16">Groups</h1>
    <div class="pb-16 pt-16">
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          />
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="groups"
          :items-per-page="100"
          :search="search"
        >
          <template #item.contact="{ item }">
            <v-btn
              v-if="item.email"
              icon
              class="social-btn"
              :href="`mailto:${item.email}`"
              target="_blank"
            >
              <v-icon>mdi-email</v-icon>
            </v-btn>
            <v-btn
              v-if="item.website"
              icon
              class="social-btn"
              :href="`${item.website}`"
              target="_blank"
            >
              <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>

    <v-banner dark>
      If you have contributed to Lotus, please add your name to the list of
      contributors on
      <a
        href="https://github.com/LogosFoundation/website/edit/master/app/pages/credits.vue"
        >github.</a
      >
      If you do not know how to use Github, ask someone in the dev chat on the
      discord.
    </v-banner>
  </v-container>
</template>

<script lang="ts">
import { ref } from 'vue'

type LotusGroup = {
  name: string
  location: string
  about: string
  email?: string
  website?: string
}

const groups: Array<LotusGroup> = [
  {
    name: 'Lotus VN',
    location: 'Hội An, Vietnam',
    about: ''
  },
  {
    name: 'Lotus Ladies',
    location: 'Phillipines',
    about: ''
  },
  {
    name: 'Lotus Lounge',
    location: 'Oakland, CA',
    about: ''
  }
]

export default {
  components: {},
  layout: 'default',
  setup() {
    return {
      search: ref('')
    }
  },
  data() {
    groups.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
    return {
      headers: [
        {
          text: 'Name',
          sortable: true,
          value: 'name'
        },
        {
          text: 'Location',
          sortable: false,
          value: 'location'
        },
        {
          text: 'Contact',
          sortable: false,
          value: 'contact'
        }
      ],
      groups
    }
  }
}
</script>

<style>
.item {
  width: 100%;
  max-width: 800px;
  justify-content: center;
}

.container > div {
  margin-bottom: 10px;
}
</style>
