# task-board2

タスクボード管理アプリ。React + Vite で構築したフロントエンドアプリケーション。

## デプロイ先

**https://hey-kats-1224.github.io/task-board2/**

`main` ブランチへプッシュすると GitHub Actions が自動でビルド＆デプロイする。

## 技術スタック

- **React 18** — UI コンポーネント・状態管理（useState / useEffect）
- **Vite 6** — ビルドツール・開発サーバー
- **CSS3** — コンポーネントごとの CSS ファイルでスタイリング
- **localStorage** — タスクの永続化
- **GitHub Actions** — CI/CD（`.github/workflows/deploy.yml`）

## プロジェクト構成

```
task-board2/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx        # エントリーポイント
│   ├── index.css       # グローバルスタイル（リセット・body）
│   ├── App.jsx         # ルートコンポーネント・タスク管理ロジック
│   └── App.css         # App コンポーネントのスタイル
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Pages 自動デプロイ
```

## 開発・実行方法

```bash
npm install   # 初回のみ
npm run dev   # 開発サーバー起動 → http://localhost:5173
npm run build # プロダクションビルド（dist/）
```

## コーディング規約

- `let` / `const` を使用し `var` は使わない
- 状態管理は React の `useState` / `useEffect` を使用する
- DOM を直接操作しない（React の仮想 DOM に委ねる）
- コメントは原則不要。WHY が非自明な場合のみ 1 行で記載

## コンポーネント命名規約

| 対象 | 規約 | 例 |
|---|---|---|
| コンポーネントファイル | PascalCase | `App.jsx`, `TaskItem.jsx` |
| コンポーネント関数 | PascalCase | `function TaskItem()` |
| CSS クラス名 | BEM（ブロック__エレメント--モディファイア） | `.task-item__text`, `.task-item--done` |
| 変数・関数名 | camelCase | `addTask`, `toggleTask`, `inputValue` |
| ローカルストレージキー | kebab-case の定数 | `const STORAGE_KEY = 'task-board-tasks'` |

## 注意事項

- 外部ライブラリの追加はユーザーに確認してから行う
- モダンブラウザ（Chrome / Firefox / Safari / Edge 最新版）のみサポート
- レスポンシブ対応必須（モバイル・PC 両対応）
- `dist/` は `.gitignore` に含めているためコミットしない

## Git 運用ルール

- **コードを変更するたびに必ず GitHub へプッシュする**
- コミットは変更単位で細かく行い、1 コミット 1 目的を原則とする
- コミットメッセージは日本語で記述し、変更内容を簡潔に表現する
- `main` ブランチへ直接プッシュする（小規模プロジェクトのため）

### コミット・プッシュの手順

```bash
git add <変更ファイル>
git commit -m "変更内容の説明"
git push origin main
```
