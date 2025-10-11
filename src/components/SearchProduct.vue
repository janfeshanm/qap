<template>
  <div class="row">
    <div class="search-box" :style="{ backgroundColor: props.bgColor ? props.bgColor : '#11304c' }">
      <q-input outlined type="text" dark debounce="10" v-model="text" style="width: 80%"> </q-input>
      <button><img src="assets/search.png" alt="Search" /></button>
    </div>
  </div>
  <div class="row row cards-wrapper">
    <product-item v-for="pr in list" :key="pr.image + pr.id" :product="pr" :buttonColor="props.buttonColor?props.buttonColor:'primary'" />
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
import ContainerPFA from 'src/assets/containerFA.json';
import FoilPFA from 'src/assets/foilFA.json';
import LidsPFA from 'src/assets/lidsFA.json';
import PizzaPFA from 'src/assets/pizzaFA.json';
import TableCoverPFA from 'src/assets/tablecoverFA.json';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n({ useScope: "global" });
const producs: Map<string, ProductInfo[]> = new Map(); // {};



const text = ref('');

interface Props {
  category: string;
  buttonColor?: string;
  bgColor?: string;
}

const props = defineProps<Props>();
let origList: ProductInfo[] = [];
const list = ref(<ProductInfo[]>[]);
function initializeList() {
  console.log(locale.value);
producs.set('container', ContainerP);
producs.set('foils', FoilP);
producs.set('lids', LidsP);
producs.set('pizza', PizzaP);
producs.set('tablecover', TableCoverP);
  if (locale.value == 'fa-IR'){
producs.set('container', ContainerPFA);
producs.set('foils', FoilPFA);
producs.set('lids', LidsPFA);
producs.set('pizza', PizzaPFA);
producs.set('tablecover', TableCoverPFA);
}
  origList = [];
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

  list.value = origList;
}

initializeList();

watch(text, (newValue) => {
  list.value = [];
  if (newValue != '') {
    list.value = origList.filter((prd) => JSON.stringify(prd).toLowerCase().includes(newValue));
  }
});

watch(locale, () => {
  initializeList();
});
</script>

<style scoped>
.search-box {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #11304c;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto 100px auto;
  max-width: 1000px;
  width: 90%;
  box-sizing: border-box;
}

.search-box input {
  flex-grow: 1;
  min-width: 0;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  box-sizing: border-box;
  justify-content: center;
}

.search-box button {
  background: none;
  border: none;
  margin-left: 10px;
  cursor: pointer;
}


.search-box img {
  width: 16px;
  height: 16px;
  margin-left: 10px;
    margin-right: 10px;

}

@media (max-width: 600px) {
  .search-box {
    margin-bottom: 30px;
    padding: 15px;
  }

  .search-box input {
    width: 100%;
  }
}

 .custom-search-input {
  height: 60px;
  font-size: 16px;

}

.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 1200px;
   margin: 0 auto;
}
/*
.container-card {
  flex: 0 0 calc((100% - 40px) / 3);
  margin-bottom: 20px;
}

@media (max-width: 1199px) and (min-width: 768px) {
  .container-card {
    flex: 0 0 calc((100% - 20px) / 2);
  }
}

@media (max-width: 767px) {
  .container-card {
    flex: 0 0 100%;
  }
}*/

@media (min-width: 768px) {
  .cards-wrapper {
    padding: 0 40px;
  }
}

@media (min-width: 1200px) {
  .cards-wrapper {
    padding: 0 40px;
  }
}
</style>
