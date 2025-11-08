# DebateCoach - AI 驱动的辩论陪练小程序

## 项目简介

DebateCoach 是一个基于 uniapp 框架开发的微信小程序，通过 AI 技术为用户提供专业的辩论训练和陪练服务。支持单人快速体验和多人专业对局，具备智能复盘分析功能。

## 技术栈

- **前端框架**: uniapp + Vue 3
- **状态管理**: Pinia
- **类型支持**: TypeScript
- **开发工具**: HBuilderX + 微信开发者工具
- **后端服务**: 微信云开发

## 项目结构

```
DebateCoach/
├── pages.json              # 页面路由配置
├── manifest.json           # 应用配置
├── App.vue                 # 应用入口
├── main.js                 # Vue 入口文件
├── package.json            # 项目配置
├── uni.scss               # 全局样式
├── pages/                  # 页面目录
│   ├── index/             # 首页
│   ├── quick-debate/      # 快速开辩
│   ├── debate-room/       # 对局房间
│   ├── debate-review/     # 赛后复盘
│   └── profile/           # 个人中心
├── components/             # 组件目录
├── store/                  # 状态管理
├── api/                    # API 接口
├── utils/                  # 工具函数
├── static/                 # 静态资源
└── types/                  # 类型定义
```

## 开发指南

### 环境准备

1. 安装 HBuilderX
2. 安装微信开发者工具
3. 安装 Node.js (v16+)

### 启动项目

1. 使用 HBuilderX 打开项目目录
2. 在终端中安装依赖:
   ```bash
   npm install
   ```
3. 启动开发服务:
   ```bash
   # 微信小程序
   npm run dev:mp-weixin
   
   # H5
   npm run dev:h5
   ```
4. 使用微信开发者工具打开 `unpackage/dist/dev/mp-weixin` 目录

### 编译发布

```bash
# 编译微信小程序
npm run build:mp-weixin

# 编译 H5
npm run build:h5
```

## 核心功能

### 1. 快速开辩
- 随机抽取辩题
- 30 秒准备时间
- AI 实时对辩
- 智能点评建议

### 2. 对局房间
- 自定义辩题和规则
- 人机混合参赛
- 实时计时控制
- 多轮次辩论支持

### 3. 赛后复盘
- AI 生成复盘报告
- 个人表现分析
- 改进建议
- 成长记录追踪

### 4. 个人中心
- 用户信息管理
- 对局历史记录
- 成长数据统计
- 偏好设置

## 特色功能

- **AI 辩手**: 支持多种 AI 人格和风格
- **跨端支持**: 基于 uniapp，支持多端发布
- **实时交互**: WebSocket 实时同步
- **智能分析**: AI 驱动的辩论分析和评分
- **微信生态**: 分享、登录、支付等能力集成

## 开发规范

### 代码风格
- 使用 TypeScript 进行类型安全开发
- 遵循 Vue 3 组合式 API 规范
- 组件和页面采用单文件组件 (SFC)

### 文件命名
- 页面目录使用小写字母和连字符
- 组件文件使用 PascalCase
- 工具函数使用 camelCase

### 状态管理
- 使用 Pinia 进行状态管理
- 按功能模块划分 Store
- 异步操作使用 async/await

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

MIT License

## 联系我们

- 项目作者: DebateCoach Team
- 反馈邮箱: support@debatecoach.com

## 更新日志

### v1.0.0 (2024-01)
- 初始版本发布
- 实现基础功能框架
- 完成核心页面开发
