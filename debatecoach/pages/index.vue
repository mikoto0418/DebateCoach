<template>
  <view class="index-page">
    <view class="header">
      <text class="greeting-text">欢迎回来！辩论新手</text>
    </view>
    <view class="section">
      <text class="section-title">快速开始</text>
      <view class="quick-buttons">
        <view class="button-card" @click="navigateToQuickDebate">
          <text class="button-title">快速辩论</text>
        </view>
        <view class="button-card" @click="navigateToDebateRoom">
          <text class="button-title">进入辩论室</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    navigateToQuickDebate() {
      uni.navigateTo({ url: '/pages/quick-debate/quick-debate' })
    },
    navigateToDebateRoom() {
      uni.navigateTo({ url: '/pages/debate-room/debate-room' })
    }
  }
}
</script>

<style scoped>
.index-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #007AFF 0%, #F8F9FA 100%);
}
.header {
  padding: 80rpx 30rpx;
  text-align: center;
}
.greeting-text {
  font-size: 48rpx;
  color: #FFFFFF;
  font-weight: 700;
}
.section {
  padding: 40rpx 30rpx;
}
.section-title {
  font-size: 32rpx;
  font-weight: 700;
  color: #1A1A1A;
  margin-bottom: 30rpx;
}
.quick-buttons {
  display: flex;
  gap: 20rpx;
}
.button-card {
  flex: 1;
  background: #FFFFFF;
  border-radius: 16rpx;
  padding: 40rpx;
  text-align: center;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);
}
.button-title {
  font-size: 28rpx;
  color: #1A1A1A;
  font-weight: 600;
}
</style>
