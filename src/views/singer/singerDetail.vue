<template>
  <transition name="slide">
    <music-list></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MusicList from 'components/musicList/musicList'
export default {
  name: 'singerDetail',
  components: {
    MusicList
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~@/assets/css/variable.styl'
  .slide-leave-active {
    transition all 1s ease
  }
  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0)
  }
</style>