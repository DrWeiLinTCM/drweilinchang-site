# 放上自己挑選的文章圖片

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

選用自己拍攝或授權允許網站使用的素材，保留原始來源與授權紀錄。情境圖應標明示意；真實診療照片另需確認公開使用的同意及可識別資訊。

正文若要再插入其他圖片，可使用 Markdown：

```markdown
![簡短描述圖片內容](/images/posts/neck-pain-detail.jpg)

圖片說明／來源：……
```
