<template>
  <q-page>
    <q-carousel swipeable animated v-model="slide" :autoplay="autoplay" ref="carousel" infinite>
      <q-carousel-slide :name="1" img-src="assets/slider1.png" />
      <q-carousel-slide :name="2" img-src="assets/slider2.png" />
      <q-carousel-slide :name="3" img-src="assets/slider3.png" />
      <q-carousel-slide :name="4" img-src="assets/slider4.png" />
      <template v-slot:control>
        <q-carousel-control position="top" class="text-white rounded-borders"
          >bbbbbb
        </q-carousel-control>

        <q-carousel-control position="bottom-right" :offset="[18, 18]" class="q-gutter-xs"
          >aaaa
        </q-carousel-control>
      </template>
    </q-carousel>
  </q-page>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const slide = ref(1);
const autoplay = ref(true);
</script>
<style>
.q-carousel {
  width: 100%;
  aspect-ratio: 192 / 90;
  height: auto;
}
</style>
