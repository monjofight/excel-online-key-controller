# Excel Online Key Listener

Excel Online 上で特定のキー操作を無効化する Chrome 拡張機能です。

## 機能

- Excel Online 上で指定されたキー操作を防ぎます
- iframe を含むすべてのフレームで動作します

## インストール方法

1. このリポジトリをクローンまたはダウンロード
2. Chrome 拡張機能ページ（chrome://extensions/）を開く
3. デベロッパーモードを有効化
4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、ダウンロードしたフォルダを選択

## 開発

- manifest.json: 拡張機能の設定ファイル
- content.js: キーイベントを処理するメインスクリプト
