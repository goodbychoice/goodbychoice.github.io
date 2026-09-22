<script setup lang="ts">
const title = "GBC（Good By Choice）｜選んで生きる、個の時代へ。";
const description =
  "GBCは、会社や組織に依存せず、個人が自分の選択で自由に生きていくためのプラットフォームです。";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.goodbychoice.co.jp/#organization",
        name: "GBC合同会社",
        alternateName: ["GBC", "Good By Choice"],
        url: "https://www.goodbychoice.co.jp/",
        logo: "https://www.goodbychoice.co.jp/images/gbc-logo-light-theme.svg",
        description,
        foundingDate: "2026-02",
        address: {
          "@type": "PostalAddress",
          streetAddress: "北幸2-10-48 むつみビル3階",
          addressLocality: "横浜市西区",
          addressRegion: "神奈川県",
          postalCode: "220-0004",
          addressCountry: "JP",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "045-275-0720",
          contactType: "customer service",
          email: "info@goodbychoice.co.jp",
          availableLanguage: "Japanese",
        },
        founder: {
          "@type": "Person",
          name: "雨宮 澪",
          jobTitle: "代表 / CEO",
        },
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.goodbychoice.co.jp/#website",
        name: "GBC（Good By Choice）",
        alternateName: "GBC",
        url: "https://www.goodbychoice.co.jp/",
        description,
        inLanguage: "ja",
        publisher: {
          "@id": "https://www.goodbychoice.co.jp/#organization",
        },
      }),
    },
  ],
});
</script>

<template>
  <main>
    <HomeHeroSection />
    <HomeAboutSection />
    <HomeMissionSection />
    <HomeProjectsSection />
    <HomeStructureSection />
    <HomeProfileCompanySection />
    <HomeContactSection />
  </main>
</template>
