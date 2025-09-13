<template>
  <q-page>
    <nav-comp style="background-color: #11304c; height: 100px" />
    <div>
      <img src="assets/papercup.png" style="width: 100%" /></div
  ></q-page>
</template>

<script setup lang="ts">
import NavComp from 'src/components/NavComp.vue';
</script>

<style lang="scss">
$fontColor: white;
.navbar ul li a {
  color: $fontColor;
  text-decoration: none;
  padding: 4px 10px;
}
</style>
