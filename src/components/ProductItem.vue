<template>
 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 q-pa-md">
<div  class="container-card">
    <img :src="product.image" alt="Product" />
    <div class="container-info">
      <p>Code: {{ product.code }}</p>
      <p v-if="product.Topout">Top out: {{ product.Topout }}</p>
      <p v-if="product.Topin">Top in: {{ product.Topin }}</p>
      <p v-if="product.size1">Size: {{ product.size1 }}</p>
      <p v-if="product.thickness">Thickness: {{ product.thickness }}</p>
      <p v-if="product.depth">depth: {{ product.depth }}</p>
      <p v-if="product.Width">width: {{ product.Width }}</p>
      <p v-if="product.Weight">weight: {{ product.Weight }}</p>
    </div>
  <q-btn
  class="containerbtn" label="Explore More" push :style="{backgroundColor: props.buttonColor ? props.buttonColor : '#11304c', color: 'white'}">
  <q-popup-proxy cover :breakpoint="600">
    <q-card class="my-card">
      <q-item>
        <q-item-section>
          <q-img :src="product.image">
            <div class="absolute-bottom text-h6">
              {{ product.name }}
            </div>
          </q-img>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-section>
        {{ product.description_long }}
      </q-card-section>
      <q-card-section horizontal>
        <q-separator vertical />
        <q-card-section class="col-4">
          <p>Code: {{ product.code }}</p>
          <p v-if="product.Topout">Top out: {{ product.Topout }}</p>
          <p v-if="product.Topin">Top in: {{ product.Topin }}</p>
          <p v-if="product.size1">Size: {{ product.size1 }}</p>
          <p v-if="product.thickness">Thickness: {{ product.thickness }}</p>
          <p v-if="product.depth">Depth: {{ product.depth }}</p>
          <p v-if="product.Width">Width: {{ product.Width }}</p>
          <p v-if="product.Weight">Weight: {{ product.Weight }}</p>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-popup-proxy>
</q-btn>
</div>

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
  buttonColor?: string;
}
const props = withDefaults(defineProps<Props>(), {
  product: () => ({}) as ProductInfo,
});
</script>
<style scoped>

.container-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;
  padding: 20px;
  transition: transform 0.2s ease;
}

.container-card:hover {
  transform: translateY(-5px);
}

.container-card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
}

.container-info {
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.6;
}
</style>

