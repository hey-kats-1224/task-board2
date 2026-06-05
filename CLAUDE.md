# task-board2

タスクボード管理アプリ。HTML/CSS/JavaScriptのみで構成されたフロントエンドアプリケーション。

## 技術スタック

- **HTML5** — 構造・マークアップ
- **CSS3** — スタイリング・アニメーション
- **Vanilla JavaScript (ES6+)** — ロジック・DOM操作
- ビルドツール・フレームワーク不使用（純粋なWeb標準技術のみ）

## 開発・実行方法

ブラウザで `index.html` を直接開くか、ローカルサーバーを使用する。

```bash
# Python を使う場合
python -m http.server 8080

# Node.js の npx を使う場合
npx serve .
```

## コーディング規約

- `let` / `const` を使用し `var` は使わない
- DOM操作は `document.querySelector` / `querySelectorAll` を使用
- イベントリスナーは `addEventListener` で登録
- CSSクラスの付け外しで状態管理（`classList.add/remove/toggle`）
- グローバル変数は最小限に抑え、モジュールパターンまたはクロージャで管理
- コメントは原則不要。WHYが非自明な場合のみ1行で記載

## 注意事項

- 外部ライブラリ・CDN依存は原則禁止（追加する場合はユーザーに確認）
- IE非対応、モダンブラウザ（Chrome/Firefox/Safari/Edge最新版）のみサポート
- レスポンシブ対応必須（モバイル・PC両対応）

## Git 運用ルール

- **コードを変更するたびに必ずGitHubへプッシュする**
- コミットは変更単位で細かく行い、1コミット1目的を原則とする
- コミットメッセージは日本語で記述し、変更内容を簡潔に表現する
- `main` ブランチへ直接プッシュする（小規模プロジェクトのため）
- プッシュ前に `git status` で変更内容を確認する

### コミット・プッシュの手順

```bash
git add <変更ファイル>
git commit -m "変更内容の説明"
git push origin main
```

### コミットメッセージ例

- `タスクカードのドラッグ&ドロップ機能を追加`
- `カラーテーマの切り替えスタイルを修正`
- `タスク完了フラグのローカルストレージ保存に対応`
