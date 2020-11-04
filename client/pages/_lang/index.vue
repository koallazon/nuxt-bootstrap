<template>
  <div class="container">
    <div>
      <h1 class="h2 mt-2">
        {{ $t('head.menu1') }}
      </h1>
      <div class="videoWrap">
        <video-player :options="videoOptions" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VideoPlayer from '../../components/VideoPlayer.vue'

export default Vue.extend({
  components: {
    VideoPlayer
  },
  data () {
    return {
      videoOptions: {
        width: 800,
        muted: false,
        language: 'en',
        poster: 'https://i.ytimg.com/vi/190s8fbjWMo/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAUx-oxa8nV-_rAwO0Xd_BzuHMj7Q',
        aspectRatio: '16:9',
        autoplay: 'muted',
        controls: true,
        fluid: true,
        inactivityTimeout: 10,
        fullscreen: {
          navigationUI: 'auto'
        },
        playbackRates: [0.5, 1, 1.5, 2],
        nativeControlsForTouch: true,
        loop: true,
        techOrder: ['html5'],
        sourceOrder: true,
        sources: [
          {
            src: 'https://vod2.popkontv.hscdn.com/CAST_VOD/POPCAST_CATE_VOD/group_1/cate_9/예봄롤린vod.mp4',
            type: 'video/mp4'
          }
        ]
      }
    }
  },
  head () {
    return {
      title: '인덱스',
      titleTemplate: 'Index',
      meta: [
        { name: '여긴 인덱스입니다.', content: '인덱스에 오실 것을 환영합니다.' },
        { name: 'keywords', content: 'keyword1, keyword2' }
      ]
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.videoWrap {
  width: 1200px;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
