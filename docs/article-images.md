# 放上自己挑選的文章圖片

## 配圖規則（醫師 2026-11-03 批准，必須遵守）

配圖只用三種：
- ①醫師自己拍或提供的圖（含臉書原文圖），畫面沒有患者；
- ②可商用、免授權的圖庫圖，記下來源網址；
- ③自製示意圖。
- 圖說寫「示意圖，非本文個案」＋來源。
- 不用：患者照片或可辨識的身體部位、處方／病歷畫面、LINE／訊息截圖、治療前後對比、來源不明的圖。唯一例外：醫師確認已取得病人同意，並針對那一張圖批准。

### 實務備註

- 檔名使用英文小寫＋連字號，放在 `public/images/posts/`，例如 `<文章slug>-<描述>.jpg`。
- 來源記在文章 frontmatter 的 `coverCredit`／`coverCreditUrl`；②一律在 `coverCreditUrl` 填圖庫原始頁面網址；①的 `coverCredit` 寫「張瑋麟醫師提供」或「張瑋麟醫師臉書」。
- `coverCaption` 範例：「示意圖，非本文個案。來源：Unsplash」。
- 保留授權頁面及查核日期的紀錄。

### 法規提醒（醫療法第 85、86 條）

圖片與圖說不得暗示保證療效，不使用患者見證或治療前後對比，不作誇大或誤導的宣稱。有疑慮時先請醫師決定。本段僅供背景提醒，非法律意見。

圖片可直接提供給網站維護者，並附上對應文章名稱、想顯示的圖片說明，以及原始來源／授權連結。

若自行在 GitHub 修改：

1. 把圖片上傳到 public/images/posts/，檔名建議使用英文與連字號，例如 neck-pain.jpg。
2. 開啟 src/content/cases/ 或 src/content/articles/ 中對應的 Markdown 文章。
3. 在檔案最上方的 --- 區塊填入以下欄位；同名欄位原本存在時，直接修改，不重複新增。

```yaml
cover: "/images/posts/neck-pain.jpg"
coverAlt: "人物坐在桌前，手扶頸部"
coverCaption: "肩頸不適情境示意，非本文個案照片。"
coverCredit: "攝影者姓名／素材網站"
coverCreditUrl: "https://example.com/original-photo"
```

自己的照片不需要外部來源連結，可省略 coverCreditUrl；圖片說明和來源會顯示在文章圖片下方。未填 cover 時，文章可正常發布，之後再補。

橫式照片建議約 3:2、寬 1200～1600 像素，JPG 或 WebP 通常適合網站。以內容清楚、檔案大小合理為原則；文章內會保留完整比例，列表縮圖則可能裁切。

選圖、圖說與來源紀錄請依上方「配圖規則」及「實務備註」辦理。

正文若要再插入其他圖片，可使用 Markdown：

```markdown
![簡短描述圖片內容](/images/posts/neck-pain-detail.jpg)

圖片說明／來源：……
```
