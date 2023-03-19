<template>
  <v-container class="page-wrap pt-16">
    <h1 class="pt-16">Contributors</h1>
    <h3 class="p-8">
      We appreciate all the people that contribute to the Lotus ecosystem.
    </h3>
    <div class="pb-16 pt-16">
      <v-data-table
        :headers="headers"
        :items="contributors"
        :items-per-page="100"
      >
        <template #item.socials="{ item }">
          <v-btn
            v-if="item.twitter"
            icon
            class="social-btn"
            :href="`https://twitter.com/${item.twitter}`"
            target="_blank"
          >
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn
            v-if="item.github"
            icon
            class="social-btn"
            :href="`https://twitter.com/${item.github}`"
            target="_blank"
          >
            <v-icon>mdi-github</v-icon>
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
    </div>

    <v-banner dark>
      If you have contributed to Lotus, please add your name to the list of
      contributors on
      <a
        href="https://github.com/givelotus/website/edit/master/app/pages/credits.vue"
        >github.</a
      >
      If you do not know how to use Github, ask someone in the dev chat on the
      discord.
    </v-banner>
  </v-container>
</template>

<script lang="ts">
type Contributor = {
  name: string
  contributions: string
  twitter?: string
  github?: string
  website?: string
}

const contributors: Array<Contributor> = [
  {
    name: 'Vic',
    contributions: 'Built the first iteration of givelotus.org',
    github: 'wiktorcie'
  },
  {
    name: 'Alex U.',
    contributions: 'Writes "This week in Stamp" blogs',
    github: 'wiktorcie'
  },
  {
    name: 'Austin',
    contributions: 'Newsletter system.',
    github: 'wiktorcie'
  },
  {
    name: 'Mags',
    contributions: 'Maintains Vase, and built blog.givelotus.org',
    twitter: 'magsmagnoli'
  },
  {
    name: 'Tobias Ruck',
    contributions: 'Major contributions to lotusd, and wrote chronik',
    twitter: 'TobiasRuck'
  },
  {
    name: 'Shammah',
    contributions: 'Founded Stamp, and major contributions to lotusd',
    github: 'schancel',
    twitter: 'micropresident'
  },
  {
    name: 'Maff',
    contributions: 'Built our excellent block explorer',
    website: 'https://explorer.givelotus.org'
  },
  {
    name: 'Nghia Cao',
    contributions: 'Built SendLotus.com and runs GiveLotus2Vietnam',
    website: 'https://givelotus.vn'
  },
  {
    name: 'Nath Swerve',
    contributions: 'Branding'
  },
  {
    name: 'Pierre',
    contributions: 'Helping keep lotusd up to date!'
  },
  {
    name: 'Hiecho',
    contributions: 'Keeping the excitement high in the Phillipines.',
    twitter: 'HiechoEcash'
  },
  {
    name: 'Avie',
    contributions: 'Running fun online community games.'
  },
  {
    name: 'Sean Ballard',
    contributions:
      "Running our online meetings and making sure we don't lose spirit.",
    twitter: 'seanballard'
  },
  {
    name: 'Sunglasses',
    contributions: 'Mr Turtle!',
    twitter: 'MrTurtleGive'
  },
  {
    name: 'Harry B',
    contributions: 'Tons of contributions to Stamp'
  }
]

export default {
  components: {},
  layout: 'default',
  data() {
    contributors.sort((a, b) => {
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
          text: 'Contributions',
          sortable: false,
          value: 'contributions'
        },
        {
          text: 'Socials',
          sortable: false,
          value: 'socials'
        }
      ],
      contributors
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
