<template>
  <section
    class="relative min-h-[calc(100svh-76px)] overflow-hidden bg-[#f4f1ea] text-[#111317]"
  >
    <div
      class="mx-auto flex min-h-[calc(100svh-76px)] w-full max-w-[1600px] items-center justify-center px-5 pb-[8vh] pt-8 text-center sm:px-8 sm:pt-10 lg:px-12 lg:pt-12 xl:px-16"
    >
      <div class="w-full">
        <h1
          class="flex flex-wrap justify-center text-[clamp(2.6rem,5.7vw,5.9rem)] font-semibold leading-[1.04] tracking-[-0.055em] lg:whitespace-nowrap"
        >
          <span class="hero-mask block overflow-hidden">
            <span class="hero-word hero-word-first block">選んで生きる、</span>
          </span>
          <span class="hero-mask block overflow-hidden">
            <span class="hero-word hero-word-second block">個の時代へ。</span>
          </span>
        </h1>

        <p
          class="hero-sub mt-4 text-[clamp(1.05rem,1.55vw,1.5rem)] font-normal tracking-[-0.02em] text-black/62"
        >
          Your Life, Your Choice.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-word {
  transform: translateY(72%);
  opacity: 0;
  will-change: transform, opacity;
  animation: heroWordReveal 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.hero-word-first {
  animation-delay: 0.28s;
}

.hero-word-second {
  animation-delay: 0.95s;
}

.hero-sub {
  opacity: 0;
  transform: translateY(4px);
  will-change: transform, opacity;
  animation: heroSubReveal 1.35s ease-out 2.15s forwards;
}

@keyframes heroWordReveal {
  0% {
    transform: translateY(72%);
    opacity: 0;
  }

  35% {
    opacity: 0.2;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes heroSubReveal {
  0% {
    transform: translateY(4px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-word,
  .hero-sub {
    transform: none;
    opacity: 1;
    animation: none;
  }
}
</style>
