<template>
  <q-page>
    <nav-comp style="background-color: #11304c; height: 100px" textColor="#ffffffff" />
       <section class="about-section">
  <div class="about-content">
    <h2>{{ $t('aboutTitle') }}</h2>
    <p>{{ $t('aboutText') }}</p>

   <div class="about-buttons">
     <a href="https://www.aparat.com/v/l49is36" class="btn secondary" target="_blank" rel="noopener noreferrer">
  {{ $t('watchVideo') }} <span class="play-icon">▶</span> </a>
    </div>
  </div>

  <div class="about-stats">
    <div class="stat-box">
      <div class="number">20</div>
      <div class="label">{{ $t('yearsExperience') }}</div>
    </div>
    <div class="stat-box">
      <div class="number">+10</div>
      <div class="label">{{ $t('exports') }}</div>
    </div>
    <div class="stat-box">
      <div class="number">+15</div>
      <div class="label">{{ $t('distributors') }}</div>
    </div>
    <div class="stat-box">
      <div class="number">+50</div>
      <div class="label">{{ $t('colleagues') }}</div>
    </div>
  </div>
</section>
    <div style="background-color: #11304c; width: 100%; justify-content: center; display: flex">
      <img src="assets/about.webp" alt="Office Building" class="aboutphoto" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import NavComp from 'src/components/NavComp.vue';
</script>

<style lang="scss">
$fontColor: white;

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

.about-section {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  background-color: #11304c;
  color: white;
  gap: 50px;
}

@media (max-width: 1000px) {
  .about-section {
    display: grid;
    grid-template-columns: auto;
  }
}

.about-content {
  max-width: 450px;
  width: 100%;
}

.about-content h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

.about-content p {
  font-size: 14px;
  line-height: 1.8;
  text-align: justify;
}

.about-buttons {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  transition: 0.3s;
  border: 1px solid white;
}

.btn.primary {
  background-color: white;
  color: #11304c;
  border: none;
}

.btn.secondary {
  border: 1px solid white;
  color: white;
  background-color: transparent;
}

.play-icon {
  margin-left: 8px;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;
  max-width: 400px;
  width: 100%;
}

.stat-box {
  background-color: white;
  color: #11304c;
  padding: 25px 20px;
  text-align: center;
  border-radius: 2px;
}

.stat-box .number {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
}

.stat-box .label {
  font-size: 13px;
}

.aboutphoto{
   width: 100%;
  object-fit: cover;
}
</style>
