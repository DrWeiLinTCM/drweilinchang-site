// ============================================================================
// 📝 全站設定 — 所有您需要填寫的資訊都在這個檔案
// ============================================================================

export const SITE = {
  title: '張瑋麟中醫師',
  url: 'https://drweilin.com',

  hero: {
    headline: '張瑋麟中醫師',
    tagline: '健康，是助您找回對身體的控制權',
    description: '台北樂活中醫診所｜針刀．疼痛治療．腸胃疾患．自律神經失調',
    ctaText: '立即預約',
    backgroundImage: '/images/hero.jpg',
  },

  // === 🩺 主治項目（五欄）===
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
      icon: '🧠',
      group: '自律神經失調',
      items: [
        { label: '失眠', tag: '失眠' },
        { label: '恐慌症', tag: '恐慌症' },
        { label: '心悸', tag: '心悸' },
        { label: '慢性疲勞', tag: '慢性疲勞' },
        { label: '頻尿', tag: '頻尿' },
        { label: '經前症候群', tag: '經前症候群' },
      ],
    },
    {
      icon: '🦴',
      group: '疼痛治療（腰）',
      items: [
        { label: '腰椎關節病變', tag: '腰椎關節病變' },
        { label: '坐骨神經痛', tag: '坐骨神經痛' },
        { label: '椎間盤突出', tag: '椎間盤突出' },
        { label: '腰椎滑脫', tag: '腰椎滑脫' },
        { label: '閃到腰', tag: '急性腰挫傷' },
        { label: '梨狀肌症候群', tag: '梨狀肌症候群' },
        { label: '腰椎術後疼痛', tag: '腰椎術後疼痛' },
      ],
    },
    {
      icon: '🦴',
      group: '疼痛治療（頸）',
      items: [
        { label: '手麻／頸椎神經根病變', tag: '頸椎病' },
        { label: '落枕', tag: '落枕' },
        { label: '富貴包', tag: '富貴包' },
        { label: '頸因性頭痛', tag: '頸因性頭痛' },
        { label: '頸椎術後疼痛', tag: '頸椎術後疼痛' },
      ],
    },
    {
      icon: '💪',
      group: '疼痛治療（全身）',
      items: [
        { label: '五十肩', tag: '五十肩' },
        { label: '退化性肩關節炎', tag: '退化性肩關節炎' },
        { label: '膏肓痛', tag: '膏肓痛' },
        { label: '網球肘', tag: '網球肘' },
        { label: '媽媽手', tag: '媽媽手' },
        { label: '退化性膝關節炎', tag: '退化性膝關節炎' },
      ],
    },
  ],

  treatments: [
    { name: '經方', description: '以《傷寒論》為本的內科處方用藥' },
    { name: '乾針', description: '以現代解剖學定位的針刺治療' },
    { name: '針刀', description: '處理深層筋膜沾黏與慢性痛症' },
    { name: '董氏奇穴', description: '董門特色針法，取穴精簡效專' },
    { name: 'AMCT 整脊', description: '美式器械整脊，無痛調整脊椎與關節' },
  ],

  doctor: {
    name: '張瑋麟',
    fullName: '張瑋麟中醫師',
    nameEn: 'Wei-Lin Chang',
    jobTitle: '中醫師',
    portrait: '/images/portrait.jpg',
    bio: '台北樂活中醫診所醫師，臨床專注於腸胃調理、自律神經失調與各部位疼痛治療。內科問題擅長以《傷寒論》經方治療；疼痛則以現代解剖的乾針、針刀為主，輔以董氏奇穴與 AMCT 整脊。提供無痛中醫選擇，怕針族群亦可處理。',
    education: [
      { year: '學歷', text: '請填寫您的學校與科系' },
      { year: '現職', text: '台北樂活中醫診所' },
      { year: '執照', text: '中醫師（請填寫字號）' },
    ],
    philosophy: '內科以《傷寒論》六經辨證為根本，擅長經方的臨床應用。疼痛治療以現代解剖學為基礎，使用乾針、針刀處理筋膜沾黏與結構問題，輔以董氏奇穴與 AMCT 整脊，為每一位患者尋找最適切的治療方向。',
    knowsAbout: [
      '胃痛','胃食道逆流','胃食道逆流中醫','腸躁症','腹瀉','便秘','功能性消化不良','中醫腸胃科',
      '自律神經失調','失眠','失眠中醫治療','恐慌症','心悸','胸悶','慢性疲勞','頻尿','經前症候群',
      '腰痛','腰痛中醫治療','腰椎關節病變','坐骨神經痛','椎間盤突出','腰椎滑脫','急性腰挫傷','閃到腰','梨狀肌症候群','腰椎術後疼痛',
      '頸椎病','手麻','頸椎神經根病變','落枕','富貴包','頸因性頭痛','頸椎術後疼痛',
      '五十肩','退化性肩關節炎','膏肓痛','網球肘','媽媽手','退化性膝關節炎',
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

  clinic: {
    name: '樂活中醫診所',
    fullName: '台北樂活中醫診所',
    address: '台北市大安區延吉街 153-2 號 4 樓',
    phone: '請填寫電話',
    googleMapUrl: '',
    lineUrl: 'https://line.me/R/ti/p/@請填入LINE_ID',
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

  nav: [
    { label: '首頁', href: '/' },
    { label: '關於醫師', href: '/about/' },
    { label: '最新案例', href: '/cases/' },
    { label: '健康知識', href: '/articles/' },
  ],

  description: '張瑋麟中醫師的臨床醫案與衛教分享。主治腸胃疾患、自律神經失調、腰頸全身疼痛治療。內科擅長以《傷寒論》經方治療，疼痛以現代解剖的乾針、針刀為主。台北樂活中醫診所。',
  lang: 'zh-Hant-TW',
  locale: 'zh_TW',
};
