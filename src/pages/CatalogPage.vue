<template>
  <q-page>
    <nav-comp style="background-color: #11304c; height: 100px" />
    <div>
      <iframe src="https://online.fliphtml5.com/osacl/nxfv/" width="100%" height="600px" frameborder="0" allowfullscreen></iframe>
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
</style>
