# RPG 適職診断

## 仕様

---

### Page

- /
  - Top ページ。ここで診断の内容の説明から実際の診断まで完結させる。
- /result
  - 診断結果のページ。上部に画像。中部から下部にかけて診断結果のテキストを載せる。
- /dashboard
  - ID・Password を発行し、特定の人のみ閲覧できるようにする。
  - 人事の人が見る用のページ。ここで診断を受けた従業員のソートやフィルターをしてカテゴリー別に閲覧できるようにしたりする。

---

### DB

- SpreadSheet
  - 課金はあまり必要ない感じはする。

#### DB 候補

- [Firebase](https://supabase.com/pricing)
- [supabase](https://firebase.google.com/pricing?hl=ja)

いずれも認証まで同一サービスで実現可能

---

### 診断フォーム

- input
- radio
- select
