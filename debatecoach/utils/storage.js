// 本地存储工具函数

const STORAGE_KEYS = {
  USER_INFO: "debate_user_info",
  RECENT_DEBATES: "debate_recent_debates",
  USER_PREFERENCES: "debate_user_preferences",
  AI_CONFIGS: "debate_ai_configs"
}

export function setStorage(key, data) {
  try {
    uni.setStorageSync(key, data)
  } catch (error) {
    console.error("存储数据失败:", error)
  }
}

export function getStorage(key, defaultValue = null) {
  try {
    const data = uni.getStorageSync(key)
    return data || defaultValue
  } catch (error) {
    console.error("获取存储数据失败:", error)
    return defaultValue
  }
}
