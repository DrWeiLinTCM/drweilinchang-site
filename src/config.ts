// ============================================================================
// 📝 全站設定 — 所有您需要填寫的資訊都在這個檔案
//
// 編輯方式：在 GitHub 網頁上點此檔案 → 點鉛筆圖示 → 修改 → Commit
// 修改後 Cloudflare 會自動重建網站，約 1-3 分鐘後生效
// ============================================================================

export const SITE = {
  // === 🌐 網站基本資訊 ===
  title: '張瑋麟中醫師',
  url: 'https://drweilin.com', // 買了網域後改成您的網域

  // === 🏠 首頁 Hero 區塊 ===
  hero: {
    headline: '張瑋麟中醫師',           // 首頁大標題
    tagline: '經方內科．針刀疼痛．整脊復健', // 副標題
    description: '台北樂活中醫診所｜經方．乾針．針刀．董氏奇穴．AMCT 整脊',
    ctaText: '立即預約',               // 按鈕文字
    // ↓↓↓ Hero 背景圖：請把您的照片上傳到 public/images/ 並命名為 hero.jpg ↓↓↓
    backgroundImage: '/images/hero.jpg',
  },

  // === 🩺 主治項目（首頁三欄卡片）===
  specialties: [
    {
      icon: '🫁',  // 可換成其他 emoji
      group: '腸胃疾患',
      items: ['胃痛', '胃食道逆流', '腸躁症', '腹瀉', '便秘'],
    },
    {
      icon: '🦴',
      group: '疼痛治療',
      items: ['腰痛', '坐骨神經痛', '椎間盤突出', '頸椎病手麻'],
    },
    {
      icon: '🌸',
      group: '婦科月經',
      items: ['月經失調', '痛經', '經前症候群', '偏頭痛', '水腫'],
    },
  ],

  // === 💉 治療方式 ===
  treatments: [
    { name: '經方', description: '以《傷寒論》為本的內科處方用藥' },
    { name: '乾針', description: '以現代解剖學定位的針刺治療' },
    { name: '針刀', description: '處理深層筋膜沾黏與慢性痛症' },
    { name: '董氏奇穴', description: '董門特色針法，取穴精簡效專' },
    { name: 'AMCT 整脊', description: '美式器械整脊，無痛調整脊椎與關節' },
  ],

  // === 👨‍⚕️ 醫師資訊（關於頁 + Schema SEO）===
  doctor: {
    name: '張瑋麟',
    fullName: '張瑋麟中醫師',
    nameEn: 'Wei-Lin Chang',
    jobTitle: '中醫師',
    // ↓↓↓ 請把您的半身照上傳到 public/images/ 並命名為 portrait.jpg ↓↓↓
    portrait: '/images/portrait.jpg',
    // ↓↓↓ 自我介紹（關於頁開頭的大段文字）↓↓↓
    bio: '台北樂活中醫診所醫師，臨床專注於腸胃調理、疼痛治療與婦科月經。內科問題擅長以《傷寒論》經方治療；疼痛則以現代解剖的乾針、針刀為主，輔以董氏奇穴與 AMCT 整脊。提供無痛中醫選擇，怕針族群亦可處理。',
    // ↓↓↓ 學經歷（每一行是一項）↓↓↓
    education: [
      // 格式：{ year: '年份', text: '內容' }
      // 請自行增減
      { year: '學歷', text: '請填寫您的學校與科系' },
      { year: '現職', text: '台北樂活中醫診所' },
      { year: '執照', text: '中醫師（請填寫字號）' },
    ],
    // ↓↓↓ 治學理念（關於頁下半段）↓↓↓
    philosophy: '內科以《傷寒論》六經辨證為根本，擅長經方的臨床應用。疼痛治療以現代解剖學為基礎，使用乾針、針刀處理筋膜沾黏與結構問題，輔以董氏奇穴與 AMCT 整脊，為每一位患者尋找最適切的治療方向。',
    // ↓↓↓ Schema SEO 用的專長關鍵字（越多越好）↓↓↓
    knowsAbout: [
      '胃痛','胃食道逆流','胃食道逆流中醫','腸躁症','腹瀉','便秘','功能性消化不良','中醫腸胃科',
      '腰痛','腰痛中醫治療','坐骨神經痛','椎間盤突出','腰椎間盤突出中醫','頸椎病','手麻','肩頸痠痛',
      '月經失調','痛經','經前症候群','偏頭痛','水腫','中醫婦科',
      '針灸','乾針治療','針刀治療','董氏奇穴','AMCT 整脊','美式整脊','無痛中醫治療','怕針也能治療',
      '經方派','《傷寒論》','辨證論治','中醫內科',
    ],
    // ↓↓↓ 社群連結 ↓↓↓
    sameAs: [
      'https://www.facebook.com/Dr.WeiLinChang/',
      'https://www.threads.com/@happydocwilliam',
      'https://www.instagram.com/happydocwilliam/',
      'https://vocus.cc/user/@DrWeiLin',
    ],
  },

  // === 🏥 診所資訊（首頁底部 + 關於頁）===
  clinic: {
    name: '樂活中醫診所',
    fullName: '台北樂活中醫診所',
    address: '台北市大安區延吉街153-2號4樓',
    phone: '02-27400007',
    googleMapUrl: '106臺北市大安區正聲里延吉街153-2號4樓', 
    // ↓↓↓ LINE 預約連結：格式為 https://line.me/R/ti/p/@你的LINE_ID ↓↓↓
    // 在手機上會直接開 LINE，在電腦上會顯示 QR code 掃描畫面
    lineUrl: 'https://line.me/R/ti/p/@請填入LINE_ID',
    // ↓↓↓ 看診時間表 ↓↓↓
    hhours: [
      { day: '一', am: false, pm: false },
      { day: '二', am: true, pm: true },
      { day: '三', am: true, pm: true },
      { day: '四', am: false, pm: true },
      { day: '五', am: false, pm: true },
      { day: '六', am: false, pm: false },
      { day: '日', am: false, pm: false },
    ],
    amTime: '午診 13:30 - 17:00',
    pmTime: '晚診 17:30 - 21:00',
  },

  // === 📱 導覽列 ===
  nav: [
    { label: '首頁', href: '/' },
    { label: '關於醫師', href: '/about/' },
    { label: '最新案例', href: '/cases/' },
    { label: '健康知識', href: '/articles/' },
    // 「立即預約」按鈕在導覽列中另外處理，直接連到 LINE
  ],

  // === 🔍 SEO 描述（搜尋引擎 + AI 看到的）===
  description: '張瑋麟中醫師的臨床醫案與衛教分享。內科擅長以《傷寒論》經方治療，疼痛以現代解剖的乾針、針刀為主，輔以董氏奇穴。台北樂活中醫診所。',
  lang: 'zh-Hant-TW',
  locale: 'zh_TW',
};
