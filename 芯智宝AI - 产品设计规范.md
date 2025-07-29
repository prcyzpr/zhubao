# 芯智宝AI - 产品设计规范

## 技术架构

### 前端技术栈
- **框架**: React 18 + TypeScript
- **UI组件库**: Ant Design 5.x
- **状态管理**: React Context + useState/useReducer
- **路由**: React Router v6
- **图表库**: ECharts for React
- **样式**: Tailwind CSS + CSS Modules
- **图标**: Ant Design Icons + Lucide React

### 项目结构
```
src/
├── components/          # 通用组件
│   ├── Layout/         # 布局组件
│   ├── Charts/         # 图表组件
│   └── Common/         # 通用UI组件
├── pages/              # 页面组件
│   ├── Dashboard/      # 仪表盘
│   ├── GoldPrice/      # 今日金价
│   ├── Marketing/      # 营销相关
│   └── Members/        # 会员管理
├── hooks/              # 自定义Hooks
├── utils/              # 工具函数
├── types/              # TypeScript类型定义
├── data/               # 模拟数据
└── styles/             # 样式文件
```

## 设计系统

### 色彩规范
```css
:root {
  /* 主色调 - 金色系 */
  --primary-gold: #FFD700;
  --primary-orange: #FFA500;
  --primary-dark-gold: #DAA520;
  
  /* 辅助色 */
  --secondary-blue: #1E3A8A;
  --secondary-white: #FFFFFF;
  
  /* 强调色 */
  --accent-red: #DC2626;
  
  /* 背景色 */
  --bg-light: #F8FAFC;
  --bg-dark: #374151;
  
  /* 文字色 */
  --text-primary: #1F2937;
  --text-secondary: #6B7280;
  --text-light: #9CA3AF;
}
```

### 字体规范
- **主字体**: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif
- **基础字号**: 14px
- **标题字号**: 24px, 20px, 18px, 16px
- **行高**: 1.5

### 间距规范
- **基础间距**: 8px的倍数 (8px, 16px, 24px, 32px, 48px)
- **组件内边距**: 16px
- **卡片间距**: 24px
- **页面边距**: 32px

### 圆角规范
- **按钮**: 6px
- **卡片**: 8px
- **输入框**: 4px

## 组件设计

### 1. 布局组件 (Layout)
```typescript
interface LayoutProps {
  children: React.ReactNode;
}

// 主要包含：
// - 左侧导航菜单
// - 顶部面包屑
// - 主内容区域
// - AI助手悬浮按钮
```

### 2. 导航菜单 (Sidebar)
```typescript
interface MenuItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  children?: MenuItem[];
  path?: string;
}

// 菜单结构：
// - 仪表盘
// - 珠宝风尚标 (今日金价, 行业资讯)
// - 拓客聚宝盆 (营销日历, 营销活动策划, AI文案生成, 海报生成)
// - 单品爆款神器 (线上热销榜单, 店铺爆款分析, 爆款挖掘机)
// - 会员智慧营销 (会员分层管理, 关怀工具)
// - 销冠成长基地 (分级课程, 案例库)
// - 系统设置
```

### 3. 数据卡片 (DataCard)
```typescript
interface DataCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'increase' | 'decrease' | 'neutral';
  icon?: React.ReactNode;
  color?: string;
}
```

### 4. 图表组件 (Charts)
```typescript
interface ChartProps {
  data: any[];
  type: 'line' | 'bar' | 'pie' | 'area';
  height?: number;
  options?: any;
}
```

## 数据模型

### 1. 用户数据
```typescript
interface User {
  id: string;
  name: string;
  role: 'admin' | 'manager' | 'staff';
  avatar?: string;
  shopName: string;
}
```

### 2. 金价数据
```typescript
interface GoldPrice {
  date: string;
  shopGoldPrice: number;
  shopPlatinumPrice: number;
  marketGoldPrice: number;
  marketPlatinumPrice: number;
  goldChange: string;
  platinumChange: string;
}
```

### 3. 会员数据
```typescript
interface Member {
  id: string;
  name: string;
  phone: string;
  level: 'high' | 'normal' | 'sleeping';
  totalSpent: number;
  lastVisit: string;
  frequency: number;
}
```

### 4. 产品数据
```typescript
interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  sales: number;
  revenue: number;
  rank?: number;
}
```

### 5. 营销活动数据
```typescript
interface MarketingActivity {
  id: string;
  title: string;
  type: string;
  startDate: string;
  endDate: string;
  target: string;
  status: 'active' | 'planned' | 'completed';
}
```

## 页面设计规范

### 1. 仪表盘页面
- **布局**: 4列网格布局
- **组件**: 数据卡片 + 趋势图表 + 待办列表
- **交互**: 卡片悬停效果，图表可交互

### 2. 今日金价页面
- **布局**: 左右分栏 (2:1)
- **左侧**: 金价信息卡片，支持编辑
- **右侧**: 价格趋势图表
- **底部**: AI分析报告卡片

### 3. 营销日历页面
- **布局**: 日历组件 + 侧边栏
- **交互**: 日期点击，悬停提示
- **功能**: 月份切换，活动标记

### 4. 会员分层管理页面
- **布局**: 卡片网格 + 图表 + 表格
- **可视化**: 饼图显示会员分布
- **交互**: 等级筛选，详情查看

## 响应式设计

### 断点设置
```css
/* 移动端 */
@media (max-width: 767px) {
  /* 隐藏侧边栏，使用抽屉式导航 */
  /* 卡片改为单列布局 */
  /* 图表适配小屏幕 */
}

/* 平板端 */
@media (min-width: 768px) and (max-width: 1199px) {
  /* 侧边栏收缩 */
  /* 卡片2列布局 */
}

/* 桌面端 */
@media (min-width: 1200px) {
  /* 完整布局 */
  /* 卡片4列布局 */
}
```

## 交互设计

### 1. 微交互
- **按钮**: 悬停变色，点击缩放
- **卡片**: 悬停阴影加深，轻微上移
- **输入框**: 聚焦边框高亮
- **图表**: 悬停数据提示

### 2. 过渡动画
- **页面切换**: 淡入淡出 (300ms)
- **组件加载**: 从下往上滑入 (200ms)
- **数据更新**: 数字滚动效果

### 3. 加载状态
- **骨架屏**: 页面初始加载
- **加载指示器**: 数据请求中
- **进度条**: 文件上传等操作

## 可访问性

### 1. 键盘导航
- 所有交互元素支持Tab键导航
- 明确的焦点指示器
- 合理的Tab顺序

### 2. 屏幕阅读器
- 语义化HTML标签
- 适当的ARIA标签
- 图片alt文本

### 3. 色彩对比
- 文字与背景对比度 ≥ 4.5:1
- 重要信息不仅依赖颜色传达

## 性能优化

### 1. 代码分割
- 路由级别的懒加载
- 组件级别的动态导入

### 2. 资源优化
- 图片懒加载
- 图片格式优化 (WebP)
- 字体子集化

### 3. 缓存策略
- 静态资源长期缓存
- API数据适当缓存
- 离线功能支持

这个设计规范为开发提供了详细的指导，确保产品的一致性和专业性。

