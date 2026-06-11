// ============================================================================
// 📝 全站設定 — 所有您需要填寫的資訊都在這個檔案
//
// 主治項目細項格式說明：
//   { label: '顯示文字', tag: '對應標籤' }
//   tag 要跟醫案 .md 檔 frontmatter 裡的 tags 一致，
//   只要有任何一篇醫案含有該 tag，首頁細項就會自動變成可點的連結
// ============================================================================

export const SITE = {
  // === 🌐 網站基本資訊 ===
  title: '張瑋麟中醫師',
  url: 'https://drweilin.com',

  // === 🏠 首頁 Hero 區塊 ===
  hero: {
    headline: '張瑋麟中醫師',
    tagline: '健康．是找回你對身體的控制權',
    description: '台北樂活中醫診所｜針刀．針灸．乾針．疼痛治療',
    ctaText: '立即預約',
    backgroundImage: '/images/hero.jpg',
  },

  // === 🩺 主治項目（四欄）===
  specialties: [
    {
      icon: '🫁',
      group: '腸胃疾患',
      items: [
        { label: '胃食道逆流', tag: '胃食道逆流' },
        { label: '腸躁症', tag: '腸躁症' },
        { label: '胃痛', tag: '胃痛' },
        { label: '腹瀉', tag: '腹瀉' },
        { label: '便秘', tag: '便秘' },
      ],
    },
    {
      icon: '🦴',
      group: '疼痛治療',
      items: [
        { label: '腰痛（含坐骨神經痛、椎間盤突出）', tag: '腰痛' },
        { label: '頸椎病手麻', tag: '頸椎病' },
        { label: '五十肩', tag: '五十肩' },
        { label: '網球肘', tag: '網球肘' },
        { label: '媽媽手', tag: '媽媽手' },
      ],
    },
    {
      icon: '🌸',
      group: '婦科月經',
      items: [
        { label: '月經不規律', tag: '月經不規律' },
        { label: '痛經', tag: '痛經' },
        { label: '經前症候群', tag: '經前症候群' },
        { label: '更年期症候群', tag: '更年期症候群' },
        { label: '月經偏頭痛', tag: '月經偏頭痛' },
        { label: '水腫', tag: '水腫' },
      ],
    },
    {
      icon: '🧠',
      group: '自律神經失調',
      items: [
        { label: '失眠', tag: '失眠' },
        { label: '恐慌症', tag: '恐慌症' },
        { label: '心悸', tag: '心悸' },
        { label: '暈眩', tag: '暈眩' },
        { label: '頻尿', tag: '頻尿' },
      ],
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

  // === 👨‍⚕️ 醫師資訊 ===
  doctor: {
    name: '張瑋麟',
    fullName: '張瑋麟中醫師',
    nameEn: 'Wei-Lin Chang',
    jobTitle: '中醫師',
    portrait: '/images/portrait.jpg',
    bio: '台北樂活中醫診所醫師，臨床專注於腸胃調理、疼痛治療、婦科月經與自律神經失調。內科問題擅長以《傷寒論》經方治療；疼痛則以現代解剖的乾針、針刀為主，輔以董氏奇穴與 AMCT 整脊。提供無痛中醫選擇，怕針族群亦可處理。',
    education: [
      { year: '學歷', text: '請填寫您的學校與科系' },
      { year: '現職', text: '台北樂活中醫診所' },
      { year: '執照', text: '中醫師（請填寫字號）' },
    ],
    philosophy: '內科以《傷寒論》六經辨證為根本，擅長經方的臨床應用。疼痛治療以現代解剖學為基礎，使用乾針、針刀處理筋膜沾黏與結構問題，輔以董氏奇穴與 AMCT 整脊，為每一位患者尋找最適切的治療方向。',
    knowsAbout: [
      '胃痛','胃食道逆流','胃食道逆流中醫','腸躁症','腹瀉','便秘','功能性消化不良','中醫腸胃科',
      '腰痛','腰痛中醫治療','坐骨神經痛','椎間盤突出','腰椎間盤突出中醫','頸椎病','手麻','肩頸痠痛','五十肩','網球肘','媽媽手',
      '月經不規律','月經失調','痛經','經前症候群','更年期症候群','月經偏頭痛','水腫','中醫婦科',
      '自律神經失調','失眠','失眠中醫治療','恐慌症','心悸','胸悶','暈眩','頻尿',
      '針灸','乾針治療','針刀治療','董氏奇穴','AMCT 整脊','美式整脊','無痛中醫治療','怕針也能治療',
      '經方派','《傷寒論》','辨證論治','中醫內科','少陰病','太陰病','經絡','筋膜',
    ],
    sameAs: [
      'https://www.facebook.com/Dr.WeiLinChang/',
      'https://www.threads.com/@happydocwilliam',
      'https://www.instagram.com/happydocwilliam/',
      'https://vocus.cc/user/@DrWeiLin',
    ],
  },

  // === 🏥 診所資訊 ===
  clinic: {
    name: '樂活中醫診所',
    fullName: '台北樂活中醫診所',
    address: '台北市大安區延吉街 153-2 號 4 樓',
    phone: '02-27400007',
    googleMapUrl: 'https://share.google/Vf3jWimk0n0ufKb6n',
    lineUrl: 'https://line.me/R/ti/p/@979rdnfb',
    hours: [
      { day: '一', am: false, pm: false },
      { day: '二', am: true, pm: true },
      { day: '三', am: true, pm: true },
      { day: '四', am: false, pm: true },
      { day: '五', am: false, pm: true },
      { day: '六', am: false, pm: false },
      { day: '日', am: false, pm: false },
    ],
    amTime: '午診 13:30-17:00',
    pmTime: '晚診 17:30-21:00',
  },

  // === 📱 導覽列 ===
  nav: [
    { label: '首頁', href: '/' },
    { label: '關於醫師', href: '/about/' },
    { label: '最新案例', href: '/cases/' },
    { label: '健康知識', href: '/articles/' },
  ],

  // === 🔍 SEO 描述 ===
  description: '張瑋麟中醫師的臨床醫案與衛教分享。主治腸胃疾患、疼痛治療、婦科月經、自律神經失調。內科擅長以《傷寒論》經方治療，疼痛以現代解剖的乾針、針刀為主。台北樂活中醫診所。',
  lang: 'zh-Hant-TW',
  locale: 'zh_TW',
};
