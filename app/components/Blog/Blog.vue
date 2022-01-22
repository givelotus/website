<template>
  <div class="root">
    <v-container class="max-md pt-12">
      <u-animate-container>
        <u-animate
          name="fadeInRightShort"
          delay="0.4s"
          duration="0.3s"
        >
          <v-row class="spacing8 grid">
            <v-col sm="6" class="px-0">
              <News
                img="/images/2022lotus.png"
                title="item.title"
                desc="itemsada.content"
                url="item.url"
              ></News>
            </v-col>

            <v-col sm="6" class="px-0">
              <News
                img="/images/2022lotus.png"
                title="item.title"
                desc="itemsada.content"
                url="item.url"
              ></News>
            </v-col>
            <v-col sm="6" class="px-0">
              <News
                img="/images/2022lotus.png"
                title="item.title"
                desc="itemsada.content"
                url="item.url"
              ></News>
            </v-col>
            <v-col sm="6" class="px-0">
              <News
                img="/images/2022lotus.png"
                title="item.title"
                desc="itemsada.content"
                url="item.url"
              ></News>
            </v-col>
            <v-col sm="6" class="px-0">
              <News
                img="/images/2022lotus.png"
                title="item.title"
                desc="itemsada.content"
                url="item.url"
              ></News>
            </v-col>
            <v-col sm="6" class="px-0">
              <News
                img="/images/2022lotus.png"
                title="item.title"
                desc="itemsada.content"
                url="item.url"
              ></News>
            </v-col>
            <v-col sm="6" class="px-0">
              <News
                img="/images/2022lotus.png"
                title="item.title"
                desc="itemsada.content"
                url="item.url"
              ></News>
            </v-col>
            <v-col sm="6" class="px-0">
              <News
                img="/images/2022lotus.png"
                title="item.title"
                desc="itemsada.content"
                url="item.url"
              ></News>
            </v-col>
            <v-col sm="6" class="px-0">
              <News
                img="/images/2022lotus.png"
                title="item.title"
                desc="itemsada.content"
                url="item.url"
              ></News>
            </v-col>
            <v-col sm="6" class="px-0">
              <News
                img="/images/2022lotus.png"
                title="item.title"
                desc="itemsada.content"
                url="item.url"
              ></News>
            </v-col>
          </v-row>
        </u-animate>
      </u-animate-container>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'blog-style.scss';
</style>

<script>
import Title from '../Title'
import News from '../Cards/News'

export default {
  components: {
    'title-main': Title,
    News,
  },
  data() {
    return {
      loaded: false,
    }
  },
  mounted() {
    this.loaded = true
  },
}
</script>
