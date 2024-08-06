<template>
  <view class="footer">
    <template v-for="(item , index) in 4" :key="index">
      <navigator class="navigator" :url="tarbarItem.tarbarUrl[index]">
      <view class="box" :class="{now:tarbarItem.active[index]}">
        <template v-if="!tarbarItem.active[index]">
          <image class="icon" :src="tarbarItem.tarbarIconUrl[index].define" mode="scaleToFill" />
        </template>
        <template v-else>
          <image class="icon" :src="tarbarItem.tarbarIconUrl[index].active" mode="scaleToFill" />
        </template>
        <text>{{ tarbarItem.tarbarTitle[index] }}</text>
      </view>
    </navigator>
    </template>
  
  </view>
</template>

<script setup>
const props = defineProps({
  activeIndex: {
    type: Number,
    default: 0
  }
});
const tarbarTitle = [
  "航前关注",
  "航班QAR",
  "个人统计",
  "我"
]
const tarbarUrl = [
  "/pages/index/index", 
  "/pages/flightQualityAssuranceReview/flightQualityAssuranceReview", 
  "/pages/personalDataStats/personalDataStats", 
  "/pages/accountInformation/accountInformation"
]
const tarbarIconUrl = [{
  define: '/static/img/tarbar/index.png',
  active: '/static/img/tarbar/index-a.png'
},
{
  define: '/static/img/tarbar/xiVisit1.png',
  active: '/static/img/tarbar/xiVisit1-a.png'
},
{
  define: '/static/img/tarbar/DataStats.png',
  active: '/static/img/tarbar/DataStats-a.png'
},
{
  define: '/static/img/tarbar/my.png',
  active: '/static/img/tarbar/my-a.png'
}];
const tarbarItem = {
  tarbarTitle,
  tarbarUrl,
  tarbarIconUrl,
  active:[0,0,0,0]
}
tarbarItem.active[props.activeIndex] = 1;

</script>

<style lang="scss" scoped>
// 组件总高度110rpx
.footer {
  position: fixed;
  bottom: 0;
  color: #AAAAAA;
  height: 109rpx;
  width: 100vw;
  border-top: 1rpx solid #555555;
  display: flex;
  align-items: center;
  background: #25324F;

  .navigator {
    flex: 1;

    .box {
      display: flex;
      flex-direction: column;
      align-items: center;

      .icon {
        width: 42rpx;
        height: 42rpx;
      }
    }

    .now {
      color: white;
    }
  }
}
</style>