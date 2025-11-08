// 全局类型定义

export interface User {
  id: string
  nickname: string
  avatar: string
  level: number
  experience: number
  winCount: number
  totalCount: number
  createdAt: number
}

export interface DebateTopic {
  id: string
  title: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  source: string
  year: number
}

export interface AIDebaterConfig {
  id: string
  name: string
  style: string
  intensity: number
  keywords: string[]
  description: string
}

export interface DebateRoom {
  id: string
  topic: DebateTopic
  participants: DebateParticipant[]
  status: 'waiting' | 'ongoing' | 'finished'
  createdAt: number
  settings: DebateSettings
}

export interface DebateParticipant {
  id: string
  type: 'human' | 'ai'
  position: 'pro' | 'con'
  role: 'first' | 'second' | 'third' | 'fourth' | 'moderator'
  name: string
  avatar?: string
  aiConfig?: AIDebaterConfig
}

export interface DebateSettings {
  timePerSpeech: number
  breakTime: number
  totalRounds: number
  audienceMode: boolean
  allowInterruption: boolean
}

export interface DebateRound {
  id: string
  roundNumber: number
  type: 'opening' | 'main' | 'crossfire' | 'closing'
  speeches: Speech[]
  startTime: number
  endTime?: number
}

export interface Speech {
  id: string
  speakerId: string
  content: string
  duration: number
  startTime: number
  endTime?: number
  isAI: boolean
}

export interface DebateReview {
  id: string
  roomId: string
  overallScore: number
  individualReviews: IndividualReview[]
  keyPoints: string[]
  suggestions: string[]
  createdAt: number
}

export interface IndividualReview {
  participantId: string
  scores: {
    logic: number
    persuasion: number
    presentation: number
    timing: number
  }
  strengths: string[]
  improvements: string[]
  totalScore: number
}
