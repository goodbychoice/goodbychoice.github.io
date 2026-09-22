# GBC Corporate Site

GBC（Good By Choice）のコーポレートサイトです。

## Site

https://www.goodbychoice.co.jp

## Overview

「自分の選択で、生きていくために。」をコンセプトに、GBCの思想・事業領域・会社情報・お問い合わせ導線を掲載しています。

## Development

```bash
npm install
npm run dev
```

開発サーバー起動後、以下にアクセスします。

```txt
http://localhost:3000
```

## Build

```bash
npm run build
```

GitHub Pages 用にビルドする場合は、以下を使用します。

```bash
npx nuxt build --preset github_pages
```

## Structure

```txt
app/
  components/
    AppHeader.vue
    AppFooter.vue
    home/
      HeroSection.vue
      AboutSection.vue
      MissionSection.vue
      ProjectsSection.vue
      ProfileCompanySection.vue
      ContactSection.vue
  pages/
    index.vue

public/
  favicon.ico
  images/
    gbc-logo.svg
```

## Notes

- トップページはセクション単位でコンポーネント分割しています。
- 静的ファイルは `public/` 配下に配置しています。
- GitHub Pages での公開を想定しています。

## Copyright

© 2026 GBC LLC. All Rights Reserved.
