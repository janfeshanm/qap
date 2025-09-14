<template>
  <div class="row">
    <div class="search-box" style="width: 50%">
      <q-input outlined type="text" dark debounce="10" v-model="text" style="width: 80%"> </q-input>
      <button><img src="assets/search.png" alt="Search" /></button>
    </div>
  </div>
  <div class="row">
    <product-item v-for="pr in list" :key="pr.image + pr.id" :product="pr" />
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';
import ProductItem from 'src/components/ProductItem.vue';
import type { ProductInfo } from 'src/components/ProductItem.vue';
import ContainerP from 'src/assets/container.json';
import FoilP from 'src/assets/foil.json';
import LidsP from 'src/assets/lids.json';
import PizzaP from 'src/assets/pizza.json';
import TableCoverP from 'src/assets/tablecover.json';
const producs: Map<string, ProductInfo[]> = new Map(); // {};
producs.set('container', ContainerP);
producs.set('foils', FoilP);
producs.set('lids', LidsP);
producs.set('pizza', PizzaP);
producs.set('tablecover', TableCoverP);

const text = ref('');

interface Props {
  category: string;
}

const props = defineProps<Props>();
let origList: ProductInfo[] = [];
const list = ref(<ProductInfo[]>[]);
if (props.category == 'all') {
  const temList = producs
    .get('container')
    ?.concat(
      producs.get('foils') as ProductInfo[],
      producs.get('lids') as ProductInfo[],
      producs.get('pizza') as ProductInfo[],
      producs.get('tablecover') as ProductInfo[],
    );
  origList = temList as ProductInfo[];
} else origList = producs.get(props.category) as ProductInfo[];

if (props.category != 'all') list.value = origList;

watch(text, (newValue) => {
  list.value = [];
  if (newValue != '') {
    list.value = origList.filter((prd) => JSON.stringify(prd).toLowerCase().includes(newValue));
  }
});
</script>

<style scoped>
.custom-search-input {
  height: 60px;
  font-size: 16px;
}
</style>
