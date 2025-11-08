<script>
export default {
  name: 'App',
  
  onLaunch() {
    console.log('DebateCoach 启动')
    this.checkUpdate()
  },
  
  onShow() {
    console.log('App Show')
  },
  
  onHide() {
    console.log('App Hide')
  },
  
  onError(err) {
    console.error('全局错误:', err)
  },
  
  methods: {
    // 检查小程序更新
    checkUpdate() {
      // #ifdef MP-WEIXIN
      const updateManager = uni.getUpdateManager()
      
      updateManager.onCheckForUpdate((res) => {
        console.log('检查更新结果:', res.hasUpdate)
      })
      
      updateManager.onUpdateReady(() => {
        uni.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: (res) => {
            if (res.confirm) {
              updateManager.applyUpdate()
            }
          }
        })
      })
      
      updateManager.onUpdateFailed(() => {
        uni.showToast({
          title: '更新失败',
          icon: 'none'
        })
      })
      // #endif
    }
  }
}
</script>

<style>
/* 引入全局样式 */
@import url('./uni.scss');

/* 全局样式重置 */
* {
  box-sizing: border-box;
}

page {
  background-color: #F8F9FA;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

/* 主色调 */
.primary-color {
  color: #007AFF;
}

.bg-primary {
  background-color: #007AFF;
}

.accent-color {
  color: #FF6B35;
}

.bg-accent {
  background-color: #FF6B35;
}

/* 通用按钮样式 */
.btn {
  border-radius: 8rpx;
  padding: 20rpx 40rpx;
  font-size: 32rpx;
  text-align: center;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #007AFF;
  color: #FFFFFF;
}

.btn-accent {
  background-color: #FF6B35;
  color: #FFFFFF;
}

.btn-outline {
  border: 2rpx solid #007AFF;
  color: #007AFF;
  background-color: transparent;
}

/* 卡片样式 */
.card {
  background-color: #FFFFFF;
  border-radius: 16rpx;
  padding: 30rpx;
  margin: 20rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);
}

/* 文字样式 */
.text-title {
  font-size: 36rpx;
  font-weight: 600;
  color: #1A1A1A;
  margin-bottom: 20rpx;
}

.text-subtitle {
  font-size: 28rpx;
  color: #666666;
  margin-bottom: 16rpx;
}

.text-body {
  font-size: 28rpx;
  color: #333333;
  line-height: 1.6;
}

.text-muted {
  font-size: 24rpx;
  color: #999999;
}

/* 布局工具类 */
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-row {
  flex-direction: row;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.align-center {
  align-items: center;
}

.text-center {
  text-align: center;
}

.w-full {
  width: 100%;
}

.h-full {
  height: 100%;
}
</style>
