// Pinia 状态管理入口
import { defineStore } from 'pinia'

// 用户状态管理
export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null,
    isLoggedIn: false
  }),
  actions: {
    setUserInfo(info) {
      this.userInfo = info
      this.isLoggedIn = true
    },
    logout() {
      this.userInfo = null
      this.isLoggedIn = false
    }
  }
})

// 辩论对局状态管理
export const useDebateStore = defineStore('debate', {
  state: () => ({
    currentDebate: null,
    debates: [],
    isOngoing: false
  }),
  actions: {
    setCurrentDebate(debate) {
      this.currentDebate = debate
      this.isOngoing = true
    },
    endDebate() {
      this.isOngoing = false
    }
  }
})
