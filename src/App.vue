<template>
  <router-view />
</template>
<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const setHtmlDirection = (lang: string) => {
  if (lang === 'fa-IR') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'fa');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
  }
};

onMounted(() => {
  setHtmlDirection(locale.value);
});

watch(locale, (newLocale) => {
  setHtmlDirection(newLocale);
});
</script>

