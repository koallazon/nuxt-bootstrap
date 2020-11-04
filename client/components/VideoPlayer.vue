<template>
  <div>
    <video ref="videoPlayer" class="video-js" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default Vue.extend({
  props: {
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      player: {}
    }
  },
  created () {
    // videojs.hook('beforesetup', function (videoEl, self.options): number {
    //   // videoEl.className += ' some-super-class'
    //   return 0
    // })
  },
  mounted () {
    const vueInstance = this
    this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      function onPlayerReady () {
        // console.log('play')
        // vueInstance.player.muted(false)
        // vueInstance.player.volume(0.5)
        // vueInstance.player.requestFullscreen()
      }
    )
    // console.log(this.player.volume())
    // this.player.aspectRatio('1:1')
  },
  beforeDestroy () {
    if (this.player) {
      // this.player.dispose()
    }
  }
})
</script>
