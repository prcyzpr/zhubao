// 模拟数据
const mockData = {
    user: {
        name: "张经理",
        shopName: "金辉珠宝旗舰店"
    },
    dashboard: {
        todaySales: "¥128,500",
        memberCount: 1900,
        hotProduct: "古法金龙凤手镯",
        activeMarketing: 3,
        salesTrend: {
            dates: ["1月19日", "1月20日", "1月21日", "1月22日", "1月23日", "1月24日", "1月25日"],
            values: [85000, 92000, 78000, 105000, 118000, 135000, 128500]
        }
    },
    goldPrice: {
        shopGoldPrice: 485,
        shopPlatinumPrice: 320,
        marketGoldPrice: 482,
        marketPlatinumPrice: 318,
        goldChange: "+0.62%",
        platinumChange: "+0.31%"
    },
    news: [
        {
            category: "政策相关",
            title: "央行发布贵金属交易新规",
            summary: "新规将于下月实施，对珠宝行业产生积极影响，规范市场秩序",
            date: "2024-01-15"
        },
        {
            category: "行业动态",
            title: "2024春节黄金消费创新高",
            summary: "春节期间全国黄金销量同比增长25%，龙年生肖金饰受追捧",
            date: "2024-01-14"
        }
    ]
};