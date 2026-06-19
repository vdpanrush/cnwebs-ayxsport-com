// assets/content-map.js

const siteUrl = "https://cnwebs-ayxsport.com";
const brandKeyword = "爱游戏";

/**
 * 内容分区配置
 */
const contentSections = [
  {
    id: "home",
    title: "首页",
    tags: ["首页推荐", "热门", "品牌"],
    keywords: ["爱游戏", "首页", "最新"],
  },
  {
    id: "news",
    title: "新闻动态",
    tags: ["行业资讯", "活动", "公告"],
    keywords: ["爱游戏新闻", "行业动态", "活动公告"],
  },
  {
    id: "products",
    title: "产品中心",
    tags: ["游戏", "娱乐", "应用"],
    keywords: ["爱游戏产品", "游戏列表", "娱乐应用"],
  },
  {
    id: "about",
    title: "关于我们",
    tags: ["公司介绍", "团队", "联系方式"],
    keywords: ["爱游戏介绍", "关于我们", "联系方式"],
  },
  {
    id: "support",
    title: "帮助中心",
    tags: ["常见问题", "帮助文档", "客服"],
    keywords: ["爱游戏帮助", "常见问题", "客服支持"],
  },
];

/**
 * 附加标签库（可扩展）
 */
const extraTags = [
  "爱游戏", "体育", "电竞", "真人", "棋牌", "彩票", "电子",
  "活动", "优惠", "VIP", "新手", "下载", "注册", "登录",
];

/**
 * 合并所有关键词（去重）
 */
const allKeywords = [
  ...new Set(
    contentSections.flatMap((section) => section.keywords)
  ),
];

/**
 * 根据查询字符串搜索匹配的内容分区
 * @param {string} query - 用户输入的搜索词
 * @returns {Array} 匹配的分区对象数组
 */
function searchSections(query) {
  if (!query || typeof query !== "string") return [];
  const lowerQuery = query.toLowerCase().trim();
  const results = [];

  for (const section of contentSections) {
    const matchTags = section.tags.some((tag) =>
      tag.toLowerCase().includes(lowerQuery)
    );
    const matchKeywords = section.keywords.some((kw) =>
      kw.toLowerCase().includes(lowerQuery)
    );
    const matchTitle = section.title.toLowerCase().includes(lowerQuery);

    if (matchTags || matchKeywords || matchTitle) {
      results.push(section);
    }
  }

  return results;
}

/**
 * 根据标签筛选分区
 * @param {string} tag - 要筛选的标签
 * @returns {Array} 包含该标签的分区数组
 */
function filterByTag(tag) {
  if (!tag || typeof tag !== "string") return [];
  const lowerTag = tag.toLowerCase().trim();
  return contentSections.filter((section) =>
    section.tags.some((t) => t.toLowerCase() === lowerTag)
  );
}

/**
 * 获取所有唯一标签
 * @returns {Array} 标签字符串数组
 */
function getAllTags() {
  const tagSet = new Set();
  for (const section of contentSections) {
    for (const tag of section.tags) {
      tagSet.add(tag);
    }
  }
  return [...tagSet];
}

/**
 * 获取站点基本信息
 * @returns {Object} 包含站点URL和品牌关键词的对象
 */
function getSiteInfo() {
  return {
    url: siteUrl,
    brand: brandKeyword,
    sectionsCount: contentSections.length,
    tagsCount: getAllTags().length,
    keywordsCount: allKeywords.length,
  };
}

// 示例用法（可直接在浏览器控制台或Node中测试）
console.log("站点信息:", getSiteInfo());
console.log("搜索 '爱游戏':", searchSections("爱游戏"));
console.log("搜索 '帮助':", searchSections("帮助"));
console.log("按标签 '热门' 筛选:", filterByTag("热门"));
console.log("所有标签:", getAllTags());