<template>
  <div class="parallax-wrap dots-wrap">
    <div v-if="loaded" class="inner-parallax large">
      <parallax
        :speed-factor="0.3"
        :section-height="600"
        direction="up"
      >
        <div class="figure">
          <div>
            <svg class="plus">
              <use xlink:href="/images/decoration/plus.svg#main" />
            </svg>
          </div>
        </div>
      </parallax>
      <parallax
        :speed-factor="0.2"
        :section-height="700"
        direction="up"
      >
        <div class="figure">
          <div>
            <svg class="circle">
              <use xlink:href="/images/decoration/circle.svg#main" />
            </svg>
          </div>
        </div>
      </parallax>
      <parallax
        :speed-factor="0.15"
        :section-height="700"
        direction="up"
      >
        <div class="figure">
          <div>
            <svg class="zigzag">
              <use xlink:href="/images/decoration/zigzag.svg#main" />
            </svg>
          </div>
        </div>
      </parallax>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './parallax-style.scss';
</style>

<script>
import Parallax from 'vue-parallaxy'

export default {
  components: {
    Parallax
  },
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
