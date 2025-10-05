<template>
  <q-page>
    <nav-comp style="background-color: #11304c; height: 100px" />
    <div style="width: 100%; margin: 0 auto; padding: 10px 20px; font-family: Arial, sans-serif; background-color: #11304c; color: #fff;">

      <h2 style="text-align: center; font-size: 26px; font-weight: bold">
        {{ $t('blogPageTitle') }}
      </h2>

      <!-- Article 1 -->
      <div class="aluminum-box">
        <div class="aluminum-content">
          <h3 class="aluminum-title"><b>{{ $t('article1Title') }}</b></h3>
          <p class="aluminum-text">{{ $t('article1Text') }}</p>
        </div>
        <img src="assets/b2.png" alt="Aluminum container" class="aluminum-img-full"/>
      </div>

      <!-- Article 2 -->
      <div class="aluminum-box">
        <div class="aluminum-content">
          <h3 class="aluminum-title">{{ $t('article2Title') }}</h3>
          <p class="aluminum-text two-columns">{{ $t('article2Text') }}</p>
        </div>
        <img src="assets/b1.png" alt="Aluminum containers" class="aluminum-img-full"/>
      </div>

      <!-- Article 3 -->
      <div class="aluminum-box">
        <div class="aluminum-content">
          <h3 class="aluminum-title">{{ $t('article3Title') }}</h3>
          <p class="aluminum-text">{{ $t('article3Text') }}</p>
        </div>
        <img src="assets/b3.png" alt="Aluminum recycling" class="aluminum-img-full"/>
      </div>

      <!-- CTA Box -->
      <div style="max-width: 1000px; background: rgba(255, 255, 255, 0.1);
          text-align: center; padding: 30px; border-radius: 12px; margin: 40px auto;">
        <h3 style="font-size: 20px; margin-bottom: 10px">{{ $t('blogLearnMoreTitle') }}</h3>
        <p style="font-size: 15px">{{ $t('blogLearnMoreText') }}</p>
      </div>

    </div>
  </q-page>
</template>


<script setup lang="ts">
import NavComp from 'src/components/NavComp.vue';
</script>

<style lang="scss">

html[dir="rtl"] body,
html[dir="rtl"] .q-page {
  font-family: 'IRANSansX', Tahoma, sans-serif;
  direction: rtl;
  font-size: 16px;
  line-height: 1.6;
}

html[dir="ltr"] body,
html[dir="ltr"] .q-page {
  font-family: 'Roboto', Arial, sans-serif;
  direction: ltr;
  font-size: 16px;
  line-height: 1.6;
}

.aluminum-box {
  max-width: 1000px;
  color: #ffffffff;
  border-radius: 12px;
  padding: 20px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.aluminum-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.aluminum-text {
  font-size: 15px;
 line-height: 2;
 }

.two-columns {
  column-count: 2;
  column-gap: 40px;
  text-align: justify;
}

.aluminum-img-full {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .two-columns {
    column-count: 1;
  }
}



</style>
