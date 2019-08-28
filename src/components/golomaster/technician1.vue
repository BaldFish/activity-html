<template>
  <div class="technician1">
    <img src="./images/sass.png" alt="活动">
    <div class="text_wrap">
      <div class="url">入驻地址:http://1t.click/Pmc</div>
      <p class="url_tips">（复制至浏览器打开）</p>
      <ul class="info_wrap">
        <li>商务负责人：张经理</li>
        <li>电话：<a href="tel:18001226131">180 0122 6131</a>（同微信）</li>
        <li>邮箱：zhangqing@cnlaunch.com</li>
      </ul>
    </div>
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
        shareUrl:location.origin+"/golomaster/technician/1",
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
    //height 2763px
    margin 0 auto
    text-align center
    position relative
    
    img {
      width 100%
      height 100%
    }
    
    .text_wrap {
      position absolute
      bottom 0
      left 0
      z-index 1000
      
      .url {
        width 750px
        text-align center
        height: 44px;
        font-size: 40px;
        font-family: Lantinghei SC;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 44px;
      }
      
      .url_tips {
        width: 750px;
        margin-top 9px
        font-size: 20px;
        font-family: PingFang SC;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
      }
      
      .info_wrap {
        margin-top 28px
        margin-bottom 56px
        
        li {
          font-size:30px;
          font-family:PingFang SC;
          font-weight:100;
          color:rgba(255,255,255,1);
          line-height:48px;
          a{
            font-size:30px;
            color:rgba(255,255,255,1);
          }
        }
      }
    }
  }
</style>