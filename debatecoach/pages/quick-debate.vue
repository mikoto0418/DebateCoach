<template>
  <view class="page">
    <view class="header">
      <text class="title">快速开辩</text>
      <text class="subtitle">选择主题，30秒准备时间</text>
    </view>
    <view class="content">
      <view class="topic-card">
        <text class="topic-text">是否应该取消英语必修课？</text>
      </view>
      <view class="action-bar">
        <button class="btn btn-outline" @click="getRandomTopic">换一题</button>
        <button class="btn btn-primary" @click="startDebate">开始辩论</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'QuickDebatePage',
  methods: {
    startDebate() {
      uni.navigateTo({ url: '/pages/debate-room/debate-room?mode=quick' })
    },
    getRandomTopic() {
      uni.showToast({ title: '换题功能开发中', icon: 'none' })
    }
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: linear-gradient(180deg, #FF6B35 0%, #F8F9FA 100%);
  padding: 40rpx 30rpx;
}
.header {
  text-align: center;
  margin-bottom: 60rpx;
  padding-top: 80rpx;
}
.title {
  font-size: 48rpx;
  font-weight: 700;
  color: #FFFFFF;
  display: block;
  margin-bottom: 16rpx;
}
.subtitle {
  font-size: 28rpx;
  color: rgba(255, 255, 255, 0.9);
}
.content {
  background-color: #FFFFFF;
  border-radius: 20rpx;
  padding: 60rpx 40rpx;
  min-height: 600rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.topic-card {
  background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%);
  border-radius: 16rpx;
  padding: 40rpx;
  margin-bottom: 40rpx;
  text-align: center;
}
.topic-text {
  font-size: 36rpx;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 1.5;
}
.action-bar {
  display: flex;
  gap: 20rpx;
  width: 100%;
}
.btn {
  flex: 1;
  border-radius: 8rpx;
  padding: 20rpx;
  font-size: 32rpx;
  text-align: center;
  border: none;
}
.btn-outline {
  background: transparent;
  color: #FF6B35;
  border: 2rpx solid #FF6B35;
}
.btn-primary {
  background-color: #FF6B35;
  color: #FFFFFF;
}
</style>
