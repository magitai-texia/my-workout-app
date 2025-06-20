# 🏋️ My Workout App

日々のトレーニング内容を記録・確認できる、シンプルかつ視覚的な**ワークアウト記録アプリ**です。  
TypeScript + React + Vite 環境で構築され、モバイル対応＆ローカル保存にも対応しています。

🔗 **[▶️ デモを見る](https://magitai-texia.github.io/my-workout-app/)**

---

## 🛠 使用技術

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-FF5252?logo=chartdotjs&logoColor=white)
![MIT License](https://img.shields.io/badge/license-MIT-green.svg)

---

## 🚀 主な機能

- 種目名・重量・回数・セット数を記録可能
- 記録は **LocalStorage に自動保存**
- **今日のトレログ / 日付ごとの記録**をアコーディオン形式で切り替え表示
- 重量（5kg単位）、回数、セット数を**プルダウン式**で選択
- 同一日に同じ種目を重複入力しようとすると**アラートで防止**
- 日付や種目のドロップダウン選択で**過去ログの絞り込み表示**
- 選択した種目ごとに**週ごとの重量推移グラフ**を表示（Recharts使用）
- 削除機能付きで、不要なログはすぐに管理可能
- モバイル・PC 双方でのレスポンシブ表示に対応

---

## ⚙️ 開発環境について

本プロジェクトは **Vite + React + TypeScript** により構築されています。  
ローカル環境での起動は以下の手順で行えます。

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev
```

- 起動後、ブラウザで http://localhost:5173 にアクセスして動作確認できます。
- vite.config.ts はViteのビルドや開発サーバーの設定ファイルで、必要に応じてカスタマイズ可能です。

## 🔧 ビルド & デプロイ（GitHub Pages）

```bash
npm run build
npm run deploy
```
- gh-pages ブランチに自動的にデプロイされ、GitHub Pages 上に公開されます。

---

## 💡 拡張アイデア（今後の学習課題）

- 記録編集（上書き）機能の実装
- 種目履歴から選べるようにする UX 強化
- 1日のトータル負荷量の自動計算表示
- カテゴリー分類（上半身 / 下半身 / 有酸素など）
- モバイルUIの最適化（スワイプ操作など）

---

## 📝 ライセンス
このプロジェクトは MIT ライセンスの下で公開されています。
詳細は LICENSE をご覧ください。

---

## 💬 貢献
このアプリは学習目的で作成された個人プロジェクトです。
改善提案やバグ報告があれば Issues にてご連絡ください。

