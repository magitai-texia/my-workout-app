# 🏋️ My Workout App

日々のトレーニング内容を記録・確認できる、シンプルな**ワークアウト記録アプリ**です。  
TypeScript + React + Vite の環境で開発しています。

🔗 **[▶️ デモを見る](https://magitai-texia.github.io/my-workout-app/)**

---

## 🚀 主な機能

- 種目名・回数・セット数を入力して記録
- **LocalStorageに保存**されるため、ページを再読み込みしてもデータが保持される
- 記録一覧を表示し、必要に応じて**削除**も可能
- シンプルでモバイルにも対応したデザイン

---

## 🛠 使用技術

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![MIT License](https://img.shields.io/badge/license-MIT-green.svg)

---

## ⚙️ 開発環境について

本プロジェクトは **Vite + React + TypeScript** で構築されています。  
ローカル環境での起動や開発は以下の手順で行います。

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動（ホットリロード対応）
npm run dev
```

- 起動後、ブラウザで http://localhost:5173 にアクセスして動作確認できます。
- vite.config.ts はViteのビルドや開発サーバーの設定ファイルで、必要に応じてカスタマイズ可能です。

## 💡 拡張アイデア（今後の学習課題）

- 日付別の履歴管理
- 合計回数・セット数の自動計算
- Chart.js によるグラフ表示
- ワークアウト種目のカテゴリー分け

## 📝 ライセンス
このプロジェクトは MIT ライセンスの下で公開されています。
詳細は LICENSE をご覧ください。

## 💬 貢献
このアプリは学習目的で作成された個人プロジェクトです。
改善提案やバグ報告があれば Issues にてご連絡ください。

