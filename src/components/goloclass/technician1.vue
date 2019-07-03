<template>
  <div class="technician1">
    <img src="./images/03.jpg" alt="活动">
  </div>
</template>

<script>
  export default {
    name: "technician1",
    components: {},
    data() {
      return {
        shareTitle:"",
        shareDesc:"",
        shareUrl:location.origin+"/goloclass/technician/1",
        shareImg:location.origin+"/static/images/share.png",
      }
    },
    created() {
      //this.$wxShare.wxShare(this,this.shareTitle, this.shareDesc,this.shareUrl,this.shareImg)
    },
    beforeMount() {
    },
    mounted() {
    },
    watch: {},
    computed: {},
    methods: {},
  }
</script>

<style scoped lang="stylus">
  .technician1 {
    font-size 0
    width 750px
    height 1334px
    margin 0 auto
    text-align center
    img{
      width 100%
      height 100%
    }
  }
</style>