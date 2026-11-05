// 豐巢咖啡 (B Cafe) 2026 台灣國際咖啡展 (11/16-11/19) 特展產品資料庫
const EXPO_CONFIG = {
  eventName: "2026 台灣國際咖啡展 ‧ 豐巢咖啡特展",
  eventSubtitle: "淬鍊時光的香氣，在南港與你相遇",
  dates: "2026.11.16 (一) - 11.19 (四)",
  time: "每日 10:00 - 18:00",
  venue: "台北南港展覽館 1 館 4 樓",
  booth: "攤位 M816",
  countdownTarget: "2026-11-16T10:00:00+08:00",
  officialSite: "https://bcafe.magicship.xyz/",
  tagline: "咖啡文章分享 / 自家烘焙咖啡豆 / 好咖啡的秘密基地"
};

const PRODUCTS = [
  // === 頂級藝伎系列 (Geisha) ===
  {
    id: 2110,
    category: "geisha",
    badge: "👑 展場焦點 ‧ 藝伎之王",
    name: "哥倫比亞 娜玲瓏 花境處理廠 藝伎 水洗",
    poeticTitle: "浮生若夢的林間初尋",
    roast: "淺烘焙",
    process: "水洗處理",
    origin: "哥倫比亞 娜玲瓏 (Nariño)",
    farm: "花境處理廠 (El Paraiso / Flower Realm)",
    altitude: "1,950 - 2,150m",
    price: 850,
    expoPrice: 760,
    weight: "半磅 (227g)",
    flavors: ["檸檬草", "百香果", "綠茶", "白花", "蜜香柑橘"],
    flavorProfile: { floral: 95, fruity: 90, sweet: 85, body: 60, acidity: 88 },
    description: "來自哥倫比亞頂級高海拔產區娜玲瓏，「花境處理廠」將高貴藝伎品種以極致水洗工藝雕琢。入口迎面而來檸檬草清香與百香果酸甜，中段湧現茉莉與白花香，尾韻悠長如高山綠茶甘冽生津。",
    brewGuide: {
      waterTemp: "92°C - 95°C",
      ratio: "1:15 - 1:16",
      grind: "中偏細 (小富士刻度 3.5 - 4)",
      tip: "以溫柔細緻中心繞圈注水，避免過度擾動，完整引導出高雅白花與茶感。"
    },
    image: "https://bcafe.magicship.xyz/wp-content/uploads/2026/06/10.svg",
    permalink: "https://bcafe.magicship.xyz/product/%e5%93%a5%e5%80%ab%e6%af%94%e4%ba%9e-%e5%a8%9c%e7%8e%b2%e7%93%8f-%e8%8a%b1%e5%a2%83%e8%99%95%e7%90%86%e5%bb%a0-%e8%97%9d%e4%bc%8e-%e6%b0%b4%e6%b4%97/"
  },
  {
    id: 2108,
    category: "geisha",
    badge: "✨ 凡爾賽宮晨曦精靈",
    name: "衣索比亞 古吉 芭斯特處理場 藝伎 水洗",
    poeticTitle: "流動的香水交響樂",
    roast: "淺烘焙",
    process: "水洗處理",
    origin: "衣索比亞 古吉 (Guji)",
    farm: "芭斯特處理場 (Baster)",
    altitude: "2,000 - 2,200m",
    price: 750,
    expoPrice: 680,
    weight: "半磅 (227g)",
    flavors: ["新鮮檸檬", "牡丹花香", "柑橘", "粉紅玫瑰", "蜂蜜水"],
    flavorProfile: { floral: 98, fruity: 88, sweet: 82, body: 55, acidity: 90 },
    description: "宛如在凡爾賽花園晨曦中甦醒的精靈。第一口是鮮活檸檬與清脆柑橘皮甜酸，隨後華麗的牡丹與玫瑰花香在口腔優雅綻放，尾韻伴隨極其浪漫的玫瑰花水與蜜香。",
    brewGuide: {
      waterTemp: "92°C - 95°C",
      ratio: "1:15",
      grind: "中偏細 (小富士刻度 3.5 - 4)",
      tip: "高溫熱水能精準激發高雅花卉芳香，建議平穩分段萃取。"
    },
    image: "https://bcafe.magicship.xyz/wp-content/uploads/2026/06/10.svg",
    permalink: "https://bcafe.magicship.xyz/product/%e8%a1%a3%e7%b4%a2%e6%af%94%e4%ba%9e-%e5%8f%a4%e5%90%89-%e8%8a%ad%e6%96%af%e7%89%b9%e8%99%95%e7%90%86%e5%a0%b4-%e8%97%9d%e4%bc%8e-%e6%b0%b4%e6%b4%97/"
  },
  {
    id: 2105,
    category: "geisha",
    badge: "☀️ 森林原生狂想",
    name: "衣索比亞 班奇 馬吉 原生藝伎 日曬",
    poeticTitle: "熱帶林間的蜜桃探戈",
    roast: "淺烘焙",
    process: "日曬處理",
    origin: "衣索比亞 班奇馬吉 (Bench Maji)",
    farm: "原始森林野生藝伎區",
    altitude: "1,900 - 2,100m",
    price: 750,
    expoPrice: 680,
    weight: "半磅 (227g)",
    flavors: ["水蜜桃", "熱帶熱情果", "茉莉花", "杏桃乾", "草莓軟糖"],
    flavorProfile: { floral: 88, fruity: 96, sweet: 92, body: 75, acidity: 85 },
    description: "保留衣索比亞發源地的野性與奔放！傳統精細日曬保留豐沛果膠甜感，熟成蜜桃、草莓與熱帶水果爆棚，口感如絲絨般滑順，是展場最吸睛的果香炸彈。",
    brewGuide: {
      waterTemp: "90°C - 92°C",
      ratio: "1:15",
      grind: "中度研磨 (小富士刻度 4)",
      tip: "水溫稍降可凸顯甜度與熟果厚實感，低溫時桃子果汁感更上一層樓。"
    },
    image: "https://bcafe.magicship.xyz/wp-content/uploads/2026/06/10.svg",
    permalink: "https://bcafe.magicship.xyz/product/gujji-geisha/"
  },

  // === 莊園單品系列 (Single Origin) ===
  {
    id: 2130,
    category: "single",
    badge: "🏆 年度高人氣推薦",
    name: "衣索比亞 西達摩 花貝果娜村 甜雪莉處理站 水洗",
    poeticTitle: "純淨高山花果的極致展現",
    roast: "淺烘焙",
    process: "水洗處理 (#74158 品種)",
    origin: "衣索比亞 西達摩 (Sidama)",
    farm: "花貝果娜村 甜雪莉處理站",
    altitude: "2,200 - 2,350m 極高海拔",
    price: 690,
    expoPrice: 620,
    weight: "半磅 (227g)",
    flavors: ["百香果", "白桃", "橙花", "白葡萄", "檸檬卡士達"],
    flavorProfile: { floral: 90, fruity: 92, sweet: 88, body: 65, acidity: 89 },
    description: "極高海拔賦予咖啡豆無與倫比的密度與糖分。乾淨透亮、層次極為豐富，入口如飲一杯新鮮百香果白桃冰茶，尾段帶著優雅的白花與細膩柑橘回甘。",
    brewGuide: {
      waterTemp: "91°C - 93°C",
      ratio: "1:15",
      grind: "中偏細 (刻度 3.5 - 4)",
      tip: "悶蒸時均勻浸潤，感受高山花香在熱氣中蒸騰綻放。"
    },
    image: "https://i0.wp.com/bcafe.magicship.xyz/wp-content/uploads/2026/07/huabeigouna.front_.jpg?fit=2048%2C2048&ssl=1",
    permalink: "https://bcafe.magicship.xyz/product/sidamo-w/"
  },
  {
    id: 2107,
    category: "single",
    badge: "🍯 甜感之神 ‧ 紅蜜極致",
    name: "哥斯大黎加 塔拉珠 艾瑞絲蜜神 紅蜜處理",
    poeticTitle: "焦糖蘋果派的香甜暖陽",
    roast: "中淺焙",
    process: "紅蜜處理 (Red Honey)",
    origin: "哥斯大黎加 塔拉珠 (Tarrazú)",
    farm: "艾瑞絲處理廠",
    altitude: "1,600 - 1,800m",
    price: 690,
    expoPrice: 620,
    weight: "半磅 (227g)",
    flavors: ["紅蘋果", "龍眼蜜", "黑莓", "烤焦糖", "奶油杏仁"],
    flavorProfile: { floral: 70, fruity: 88, sweet: 96, body: 80, acidity: 75 },
    description: "蜜處理中的精華之作！保留高達 60% 果膠緩慢日曬乾燥，將濃縮蜜糖甜感完整浸潤進豆心。入喉如咬下一口淋滿楓糖與蜂蜜的烤紅蘋果，尾韻溫潤厚實。",
    brewGuide: {
      waterTemp: "89°C - 91°C",
      ratio: "1:15",
      grind: "中度研磨 (刻度 4)",
      tip: "後段稍微放慢注水速度，萃取更豐富的焦糖甘甜。"
    },
    image: "https://bcafe.magicship.xyz/wp-content/uploads/2026/06/7.svg",
    permalink: "https://bcafe.magicship.xyz/product/%e5%93%a5%e6%96%af%e5%a4%a7%e9%bb%8e%e5%8a%a0-%e5%a1%94%e6%8b%89%e7%8f%a0-%e8%89%be%e7%91%9e%e7%b5%b2%e8%9c%9c%e7%a5%9e-%e7%b4%85%e8%9c%9c%e8%99%95%e7%90%86/"
  },
  {
    id: 1978,
    category: "single",
    badge: "🍇 經典名產區日曬",
    name: "衣索比亞 耶加雪菲 夏茉卡處理站 #74110 日曬",
    poeticTitle: "紫羅蘭與巨峰葡萄的甜美",
    roast: "淺烘焙",
    process: "精緻慢速日曬 (Natural)",
    origin: "衣索比亞 耶加雪菲 (Yirgacheffe)",
    farm: "夏茉卡處理站",
    altitude: "2,050 - 2,200m",
    price: 690,
    expoPrice: 620,
    weight: "半磅 (227g)",
    flavors: ["藍莓", "巨峰葡萄", "紫羅蘭", "熱帶果醬", "可可"],
    flavorProfile: { floral: 85, fruity: 95, sweet: 90, body: 70, acidity: 86 },
    description: "慢速棚架日曬保留醇厚莓果風味，濃郁的藍莓果醬與巨峰葡萄汁在舌尖跳躍，隨後散發紫羅蘭優雅花香，冷卻後酸甜更顯圓潤活潑。",
    brewGuide: {
      waterTemp: "90°C - 92°C",
      ratio: "1:15",
      grind: "中度研磨 (刻度 4)",
      tip: "沖煮完成後請務必嘗試從熱喝到冷，體驗莓果風味的轉變。"
    },
    image: "https://bcafe.magicship.xyz/wp-content/uploads/2026/06/1.svg",
    permalink: "https://bcafe.magicship.xyz/product/ethoipia-yirga-n/"
  },
  {
    id: 2021,
    category: "single",
    badge: "🌰 堅果奶油甜感",
    name: "瓜地馬拉 弗賴哈瑞斯 杏仁莊園 水洗",
    poeticTitle: "火山沃土滋養的堅果可可",
    roast: "中烘焙",
    process: "高山泉水水洗",
    origin: "瓜地馬拉 弗賴哈瑞斯 (Fraijanes)",
    farm: "杏仁莊園",
    altitude: "1,550 - 1,750m",
    price: 550,
    expoPrice: 490,
    weight: "半磅 (227g)",
    flavors: ["烘烤杏仁", "太妃糖", "榛果巧克力", "熟甜柑橘"],
    flavorProfile: { floral: 50, fruity: 70, sweet: 92, body: 85, acidity: 60 },
    description: "受火山土壤豐富礦物質洗禮，這款豆子散發令人垂涎的烤杏仁與榛果香氣，口感醇厚飽滿如焦糖布丁，做美式溫潤、調拿鐵甜感倍增。",
    brewGuide: {
      waterTemp: "88°C - 90°C",
      ratio: "1:14 - 1:15",
      grind: "中度研磨 (刻度 4)",
      tip: "非常適合日常手沖或摩卡壺、美式咖啡機萃取。"
    },
    image: "https://bcafe.magicship.xyz/wp-content/uploads/2026/06/6.svg",
    permalink: "https://bcafe.magicship.xyz/product/%e7%93%9c%e5%9c%b0%e9%a6%ac%e6%8b%89-%e5%bc%97%e8%b3%b4%e5%93%88%e7%91%9e%e6%96%af-%e6%9d%8f%e4%bb%81%e8%8e%8a%e5%9c%92%e6%b0%b4%e6%b4%97/"
  },
  {
    id: 2104,
    category: "single",
    badge: "🌿 草本雪松厚實老饕款",
    name: "印尼 曼特寧 亞齊行政區 水洗",
    poeticTitle: "極地雪松與黑巧克力的深邃",
    roast: "中深焙",
    process: "精緻水洗工藝",
    origin: "印尼 蘇門答臘 亞齊 (Aceh)",
    farm: "迦佑高地小農精選",
    altitude: "1,400 - 1,600m",
    price: 550,
    expoPrice: 490,
    weight: "半磅 (227g)",
    flavors: ["雪松木", "黑巧克力", "草本香料", "麥芽糖", "厚醇回甘"],
    flavorProfile: { floral: 35, fruity: 50, sweet: 85, body: 98, acidity: 40 },
    description: "打破傳統曼特寧的土味！以精緻水洗凸顯乾淨醇厚，濃郁的黑巧克力包覆感中帶有高雅雪松與草本香氣，尾韻生津持久，是深厚男士與老饕的最愛。",
    brewGuide: {
      waterTemp: "86°C - 89°C",
      ratio: "1:13 - 1:14",
      grind: "中偏粗 (刻度 4.5)",
      tip: "水溫降至 87°C 左右能完美抑制苦澀，釋放極致厚醇。"
    },
    image: "https://bcafe.magicship.xyz/wp-content/uploads/2026/06/9.svg",
    permalink: "https://bcafe.magicship.xyz/product/mandeling-w/"
  },

  // === 豐巢經典義式配方豆 ===
  {
    id: 2148,
    category: "espresso",
    badge: "🌟 豐巢招牌 ‧ 百喝不厭",
    name: "豐巢義式精選配方 (中焙)",
    poeticTitle: "城市優雅的暖心奏鳴",
    roast: "中烘焙",
    process: "印尼 / 瓜地馬拉 / 衣索比亞 (水洗 + 日曬黃金配比)",
    origin: "全球三大經典產區黃金混配",
    farm: "豐巢烘豆師私房比例調和",
    altitude: "1,500 - 2,000m",
    price: 380,
    expoPrice: 340,
    weight: "半磅 (227g)",
    flavors: ["堅果太妃糖", "炙熱焦糖", "明亮莓果", "順口圓潤"],
    flavorProfile: { floral: 65, fruity: 75, sweet: 92, body: 85, acidity: 65 },
    description: "像漫步在城市街頭的風格紳士。入喉口感如堅果太妃糖般滑順，伴隨剛出爐般的焦糖甘甜，中後段綻放細緻成熟莓果微酸，單喝順口、做拿鐵堅果香四溢。",
    brewGuide: {
      waterTemp: "90°C - 92°C",
      ratio: "1:15",
      grind: "義式細磨 或 手沖中度 (刻度 4)",
      tip: "手沖前段以細水流引出莓果香，後段平穩注水拉出堅果焦糖厚度。"
    },
    image: "https://bcafe.magicship.xyz/wp-content/uploads/2026/07/中焙義式.svg",
    permalink: "https://bcafe.magicship.xyz/product/expresso-mid/"
  },
  {
    id: 2135,
    category: "espresso",
    badge: "☕ 濃醇交響 ‧ 凍頂烏龍茶韻",
    name: "豐巢義式精選配方 (深焙)",
    poeticTitle: "深夜樂章的溫柔交響",
    roast: "深烘焙",
    process: "跨產區極選特調 (豐巢精準直火烘焙控溫)",
    origin: "拉丁美洲與亞洲優選莊園",
    farm: "豐巢獨家工法深焙代表作",
    altitude: "1,400 - 1,800m",
    price: 380,
    expoPrice: 340,
    weight: "半磅 (227g)",
    flavors: ["80% 絲滑黑巧克力", "焦糖脆片", "凍頂烏龍茶韻", "回甘生津"],
    flavorProfile: { floral: 30, fruity: 40, sweet: 90, body: 99, acidity: 30 },
    description: "打破傳統深焙焦苦的刻板印象！如同融化黑巧克力的綿密油脂感，入喉後竟驚喜浮現傳統「凍頂烏龍茶」的焙火茶韻回甘。做拿鐵奶香交融，無懈可擊。",
    brewGuide: {
      waterTemp: "88°C - 91°C",
      ratio: "1:13 - 1:14",
      grind: "義式細磨 或 手沖刻度 4 - 4.5",
      tip: "稍低水溫能帶出奶油般滑順甜感，降低雜苦，展現完美茶韻。"
    },
    image: "https://bcafe.magicship.xyz/wp-content/uploads/2026/07/義式深焙-2.svg",
    permalink: "https://bcafe.magicship.xyz/product/darkcoffee/"
  },

  // === 展場限定禮盒與濾掛 ===
  {
    id: 2156,
    category: "gift",
    badge: "🎁 展場年度首發 ‧ 奢華限定",
    name: "金藏歲月 ‧ 擁抱星芒 (展期年度旗艦禮盒)",
    poeticTitle: "為您擁抱整片閃耀星芒",
    roast: "綜合烘焙 (星芒配方 + 精選單品)",
    process: "耳掛式精品濾掛 12 入頂級精裝",
    origin: "特選跨國頂級微批次產區",
    farm: "豐巢職人手工嚴選",
    altitude: "多產區調配",
    price: 680,
    expoPrice: 599,
    weight: "12 入 (星芒配方 6 入 + 精選莊園單一產區 6 入)",
    flavors: ["醇厚可可", "星芒蜜香", "高雅花果", "極致回甘"],
    flavorProfile: { floral: 90, fruity: 90, sweet: 95, body: 90, acidity: 70 },
    description: "豐巢專為大型盛會打造的年度極致品味之選！內含全新「星芒配方」耳掛 6 入（黃金比例、口感醇厚飽滿）+ 精選單一產區耳掛 6 入。展場限定精緻硬盒，送禮收藏最高規格。",
    brewGuide: {
      waterTemp: "90°C - 93°C",
      ratio: "注水 160 - 180ml",
      grind: "氮氣鎖鮮研磨耳掛",
      tip: "分 2-3 次緩慢注水，靜置 30 秒後移開濾袋，享受精品現萃。"
    },
    image: "https://i0.wp.com/bcafe.magicship.xyz/wp-content/uploads/2026/07/righthand.webp?fit=1792%2C2390&ssl=1",
    permalink: "https://bcafe.magicship.xyz/product/2026moongift/"
  },
  {
    id: 1723,
    category: "gift",
    badge: "💝 人氣熱銷 ‧ 隨享首選",
    name: "禮物盒 - 豐巢經典濾掛咖啡包 10 入",
    poeticTitle: "把好咖啡裝進隨身口袋",
    roast: "精選綜合產區",
    process: "原豆現磨 ‧ 充氮保鮮",
    origin: "衣索比亞 / 哥倫比亞 / 瓜地馬拉",
    farm: "經典高海拔生豆特製",
    altitude: "1,500m+",
    price: 550,
    expoPrice: 480,
    weight: "10 入禮盒裝 (每包 10g)",
    flavors: ["綜合產區花果", "焦糖堅果", "黑巧克力甜感"],
    flavorProfile: { floral: 80, fruity: 85, sweet: 90, body: 85, acidity: 70 },
    description: "上班、出差、戶外露營的必備隨身夥伴。囊括豐巢經典莊園豆與配方豆，每一包皆以高規格充氮技術封存現磨香氣，撕開即聞到迷人乾香。",
    brewGuide: {
      waterTemp: "90°C - 92°C",
      ratio: "建議水量 150 - 180c.c.",
      grind: "專業濾掛細度",
      tip: "先注入 30ml 浸潤 20 秒，再緩緩注水至滿，快速享受好咖啡。"
    },
    image: "https://i0.wp.com/bcafe.magicship.xyz/wp-content/uploads/2025/07/1070250-1-scaled-e1753952622770.jpg?fit=1673%2C1254&ssl=1",
    permalink: "https://bcafe.magicship.xyz/product/gifs10/"
  },
  {
    id: 1730,
    category: "gift",
    badge: "💎 頂級單品耳掛",
    name: "鑑賞級 - 濾掛式咖啡包",
    poeticTitle: "每一口都是莊園微批次的尊榮",
    roast: "淺中烘焙",
    process: "單一產區微批次",
    origin: "得獎莊園限定批次",
    farm: "嚴選 COE / 藝伎 / 蜜處理豆款",
    altitude: "1,800m+",
    price: 65,
    expoPrice: 55,
    weight: "單包入 (10g) / 展場買 10 送 2",
    flavors: ["細緻白花", "蜜桃柑橘", "伯爵茶韻"],
    flavorProfile: { floral: 95, fruity: 90, sweet: 85, body: 70, acidity: 85 },
    description: "以最高標準篩選的高端豆款特製濾掛，專為追求極致風味的咖啡鑑賞家打造。展場現場打卡即贈！",
    brewGuide: {
      waterTemp: "92°C",
      ratio: "150 - 170ml",
      grind: "精密單品濾掛磨度",
      tip: "萃取完立即將濾袋提離，保有澄澈甘冽茶韻。"
    },
    image: "https://i0.wp.com/bcafe.magicship.xyz/wp-content/uploads/2025/07/1070243-scaled-e1753954111453.jpg?fit=1870%2C1404&ssl=1",
    permalink: "https://bcafe.magicship.xyz/product/%e9%91%91%e8%b3%9e%e7%b4%9a-%e6%bf%be%e6%8e%9b%e5%bc%8f%e5%92%96%e5%95%a1%e5%8c%85/"
  }
];

// 展會每日手沖杯測與活動時程
const EXPO_SCHEDULE = [
  {
    day: "Day 1 (11/16 一)",
    theme: "開幕日 ‧ 經典啟航",
    events: [
      { time: "10:30 - 11:30", title: "晨光甦醒：豐巢經典義式雙拼品飲", speaker: "豐巢主烘豆師", desc: "拆解中焙與深焙配方黃金比例，現場拉花試飲。" },
      { time: "13:30 - 14:30", title: "藝伎之王盲測品鑑會", speaker: "Q-Grader 杯測評審", desc: "哥倫比亞花境 vs 古吉芭斯特 vs 班奇馬吉三款藝伎同場對決。" },
      { time: "15:30 - 16:30", title: "手沖新手到進階指南", speaker: "客座金杯萃取咖啡師", desc: "水溫、注水水流與風味表現的實戰拆解。" }
    ]
  },
  {
    day: "Day 2 (11/17 二)",
    theme: "風土漫遊 ‧ 非洲狂想",
    events: [
      { time: "11:00 - 12:00", title: "西達摩花貝果娜村高山冷泉萃取示範", speaker: "豐巢首席手沖師", desc: "探討海拔 2,300m 微批次的風味極限。" },
      { time: "14:00 - 15:00", title: "慢速日曬與水洗工藝杯測剖析", speaker: "生豆尋豆顧問", desc: "夏茉卡 #74110 與芭斯特水洗的對照品飲。" },
      { time: "16:00 - 17:00", title: "現場義式機直球對決體驗", speaker: "展位特約咖啡師", desc: "開放參觀者親手上機萃取一份濃縮並試打綿密奶泡。" }
    ]
  },
  {
    day: "Day 3 (11/18 三)",
    theme: "甜感極致 ‧ 中美洲蜜處理之美",
    events: [
      { time: "11:00 - 12:00", title: "塔拉珠紅蜜「艾瑞絲蜜神」甜蜜解密", speaker: "烘豆職人", desc: "果膠發酵如何轉化為如同焦糖蘋果派的迷人甜感。" },
      { time: "13:30 - 14:30", title: "火山土壤與堅果可可香的秘密", speaker: "精品咖啡品評師", desc: "瓜地馬拉杏仁莊園與維若妮卡莊園品評。" },
      { time: "15:30 - 16:30", title: "濾掛咖啡的極致沖泡美學", speaker: "豐巢風味研發團隊", desc: "打破「濾掛不如手沖」迷思，教你 3 分鐘泡出冠軍級香氣。" }
    ]
  },
  {
    day: "Day 4 (11/19 四)",
    theme: "壓軸盛典 ‧ 星芒派對",
    events: [
      { time: "11:00 - 12:00", title: "年度特展限定「金藏歲月 ‧ 星芒」開箱試飲", speaker: "豐巢創辦人", desc: "現場開箱年度頂級星芒配方，限量 50 杯現場品嚐。" },
      { time: "14:00 - 15:00", title: "老饕深焙：凍頂烏龍茶韻拉花大賽", speaker: "受邀拉花職人", desc: "展現深夜樂章深焙豆極致厚醇油脂與茶韻回甘。" },
      { time: "16:30 - 17:30", title: "展期最終回饋抽獎 ‧ 感謝季", speaker: "全體團隊", desc: "現場抽出多位幸運 VIP 贈送整年咖啡豆大禮包！" }
    ]
  }
];

// 展場 4 大專屬好康
const EXPO_PERKS = [
  {
    icon: "gift",
    tag: "好康 01",
    title: "展場首發限定豆",
    desc: "「金藏歲月 ‧ 擁抱星芒」特展限定禮盒首度線下亮相，展場特惠價現省 NT$81！"
  },
  {
    icon: "percent",
    tag: "好康 02",
    title: "莊園豆任選 2 包 85 折",
    desc: "全場半磅精品咖啡豆任選兩件享 85 折優惠，再加贈「鑑賞級濾掛」2 包！"
  },
  {
    icon: "sparkles",
    tag: "好康 03",
    title: "打卡追蹤免費喝",
    desc: "於豐巢攤位拍照打卡或追蹤 FB / IG，即可至手沖吧台免費試飲並領取濾掛包 1 入。"
  },
  {
    icon: "shopping-bag",
    tag: "好康 04",
    title: "滿額贈品牌帆布提袋",
    desc: "現場單筆消費滿 NT$1,500，即贈「豐巢咖啡職人純棉隨行托特包」乙個 (限量 200 個)。"
  }
];
