<template>
  <q-page>
    <nav-comp style="background-color: #11304c; height: 100px" />
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
</style>
