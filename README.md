## このリポジトリはなに？
storybookのチュートリアルを実施した完成系のリポジトリです。
勉強会で映写した資料も`./映写資料.pdf`に格納してあります。

## このリポジトリをクローンした場合

※node.jsのインストールが必要です。
- storybookの起動
  - `npm install`
  - `npm run storybook​`

## 勉強会ハンズオンの手順について再掲

1. エディタとコマンドを打てるツールを起動してください​
   1. エディタ: VS Code​
   2. コマンドツール: ターミナル、パワーシェル​
2. Node.jsをインストールする​
   1. Node.jsが使えるかどうかコマンドツールで確認​
      1. `node --version`​
      2. `npm --version`​
   2. つかえなかったらインストール​
      1. https://nodejs.org/en
      2. インストール完了後、再度確認
      3. ​`node --version`​
      4. `npm --version`
3. npx のインストール​
   1. npx が使えるかどうか確認​
      1. `npx --version`​
   2. 使えなかったらインストール​
      1. `npm i -g npx@latest`
      2. インストール完了後、再度確認
      3. ​`npx --version`
4. Reactアプリの雛形作成(管理者実行)
   1. `npx create-next-app@latest storybook-tutorial`
5. 念の為、依存パッケージをインストール
   1. `npm install`
6. アプリケーションを起動してみる
   1. `npm run dev`
   2. http://localhost:3000/ にブラウザでアクセス(3000番ポートが使用されていた場合、別のポートの可能性あり。ターミナルに表示されているリンク。)
7. ​不要な初期設定の削除
   1. src/app/global.tsxの4行目以降を削除
      1. サンプルページ表示のためのスタイルが​邪魔なため​
8. Storybook を起動​
   1. `npx sb init`
   2. 何か聞かれたら全てyes​
9. 起動完了🎉​
10. 次回以降のStorybookの起動方法​
    1.  `npm run storybook​`
11. storybookでtailWindを使えるようにする
    1.  .storybook/preview.tsにimportを追加
      1.  `import "../src/app/globals.css";`
  12. tailwind.config.tsのcontentに以下を追加
      1.  `'./src/stories/**/*.{js,ts,jsx,tsx,mdx}'`