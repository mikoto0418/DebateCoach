<template>
  <view class="page">
    <!-- 顶部标题区域 -->
    <view class="header-section">
      <image class="logo" src="/static/images/logo.png" mode="aspectFit" />
      <text class="app-title">DebateCoach</text>
      <text class="app-subtitle">AI 驱动的辩论陪练平台</text>
    </view>

    <!-- 快速入口 -->
    <view class="quick-actions">
      <view class="action-card" @click="navigateToQuickDebate">
        <view class="action-icon bg-accent">
          <text class="icon">⚡</text>
        </view>
        <text class="action-title">快速开辩</text>
        <text class="action-desc">30 秒准备，即刻体验</text>
      </view>

      <view class="action-card" @click="navigateToDebateRoom">
        <view class="action-icon bg-primary">
          <text class="icon">🎯</text>
        </view>
        <text class="action-title">创建对局</text>
        <text class="action-desc">定制规则，专业训练</text>
      </view>

      <view class="action-card" @click="navigateToReview">
        <view class="action-icon bg-primary">
          <text class="icon">📊</text>
        </view>
        <text class="action-title">赛后复盘</text>
        <text class="action-desc">AI 分析，提升水平</text>
      </view>

      <view class="action-card" @click="navigateToProfile">
        <view class="action-icon bg-primary">
          <text class="icon">👤</text>
        </view>
        <text class="action-title">个人中心</text>
        <text class="action-desc">查看记录，管理设置</text>
      </view>
    </view>

    <!-- 最近对局 -->
    <view class="recent-section" v-if="recentDebates.length > 0">
      <text class="section-title">最近对局</text>
      <view class="debate-list">
        <view 
          v-for="debate in recentDebates" 
          :key="debate.id" 
          class="debate-item"
          @click="viewDebateDetail(debate.id)"
        >
          <text class="debate-topic">{{ debate.topic }}</text>
          <text class="debate-time">{{ formatTime(debate.createdAt) }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      recentDebates: []
    }
  },
  onLoad() {
    this.loadRecentDebates()
  },
  onPullDownRefresh() {
    this.loadRecentDebates()
  },
  methods: {
    // 导航方法
    navigateToQuickDebate() {
      uni.navigateTo({
        url: '/pages/quick-debate/quick-debate'
      })
    },
    navigateToDebateRoom() {
      uni.navigateTo({
        url: '/pages/debate-room/debate-room'
      })
    },
    navigateToReview() {
      uni.switchTab({
        url: '/pages/debate-review/debate-review'
      })
    },
    navigateToProfile() {
      uni.switchTab({
        url: '/pages/profile/profile'
      })
    },
    viewDebateDetail(id) {
      uni.navigateTo({
        url: `/pages/debate-detail/debate-detail?id=${id}`
      })
    },
    // 加载最近对局
    async loadRecentDebates() {
      try {
        // TODO: 从云开发或本地存储加载数据
        this.recentDebates = []
      } catch (error) {
        console.error('加载最近对局失败:', error)
      } finally {
        uni.stopPullDownRefresh()
      }
    },
    // 格式化时间
    formatTime(timestamp) {
      const date = new Date(timestamp)
      const now = new Date()
      const diff = now - date
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      
      if (days === 0) return '今天'
      if (days === 1) return '昨天'
      if (days < 7) return `${days}天前`
      return date.toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: linear-gradient(180deg, #007AFF 0%, #F8F9FA 100%);
  padding: 40rpx 30rpx;
}

.header-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60rpx;
  padding-top: 80rpx;
}

.logo {
  width: 160rpx;
  height: 160rpx;
  border-radius: 32rpx;
  margin-bottom: 30rpx;
  background-color: rgba(255, 255, 255, 0.2);
}

.app-title {
  font-size: 48rpx;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 16rpx;
}

.app-subtitle {
  font-size: 28rpx;
  color: rgba(255, 255, 255, 0.9);
}

.quick-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24rpx;
  margin-bottom: 40rpx;
}

.action-card {
  background-color: #FFFFFF;
  border-radius: 20rpx;
  padding: 40rpx 30rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.action-card:active {
  transform: scale(0.98);
}

.action-icon {
  width: 80rpx;
  height: 80rpx;
  border-radius: 20rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20rpx;
}

.action-icon .icon {
  font-size: 36rpx;
}

.action-title {
  font-size: 32rpx;
  font-weight: 600;
  color: #1A1A1A;
  margin-bottom: 8rpx;
}

.action-desc {
  font-size: 24rpx;
  color: #999999;
}

.recent-section {
  background-color: #FFFFFF;
  border-radius: 20rpx;
  padding: 30rpx;
  margin-top: 20rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: 600;
  color: #1A1A1A;
  margin-bottom: 20rpx;
}

.debate-item {
  padding: 20rpx 0;
  border-bottom: 1rpx solid #F0F0F0;
}

.debate-item:last-child {
  border-bottom: none;
}

.debate-topic {
  font-size: 28rpx;
  color: #333333;
  margin-bottom: 8rpx;
}

.debate-time {
  font-size: 24rpx;
  color: #999999;
}
</style>
