<template>
  <div
    class="container-card col q-pb-xs-sm q-ma-sm-lg q-pa-md-xl col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12"
  >
    <img :src="product.image" alt="Product" />
    <div class="container-info">
      <p>Code: {{ product.code }}</p>
      <p v-if="product.Topout">Top out: {{ product.Topout }}</p>
      <p v-if="product.Topin">Top in: {{ product.Topin }}</p>
      <p v-if="product.size1">Size: {{ product.size1 }}</p>
      <p v-if="product.thickness">Thickness: {{ product.thickness }}</p>
      <p v-if="product.depth">depth: {{ product.depth }}</p>
      <p v-if="product.Width">depth: {{ product.Width }}</p>
      <p v-if="product.Weight">depth: {{ product.Weight }}</p>
    </div>
    <a href="30.html?id=3" class="containerbtn">Explore More</a>
  </div>
</template>

<script setup lang="ts">
export interface ProductInfo {
  id: number;
  name: string;
  code: string;
  Topout?: string;
  Topin?: string;
  size1?: string;
  thickness?: string;
  depth?: string;
  Capacity?: string;
  Width?: string;
  Weight?: string;
  description_short: string;
  description_long: string;
  image: string;
}
interface Props {
  product: ProductInfo;
}

withDefaults(defineProps<Props>(), {
  product: () => ({}) as ProductInfo,
});
</script>
