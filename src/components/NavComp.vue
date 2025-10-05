<template>
  <nav :class="{ active: isMenuOpen }" class="navbar">
   <a href="/" class="logo">
  <img :src="logoSrc" alt="Logo" style="height: 30px" />
</a>

    <ul>
<li class="dropdown" :class="{ active: isDropdownOpen }">
  <a class="dropbtn" @click.prevent="toggleDropdown">{{ $t('products') }}</a>
  <ul class="dropdown-content">
    <li><a href="#/products/container"><img src="assets/2.png"/><br /> {{ $t('aluminiumContainers') }}</a></li>
    <li><a href="#/products/foil"><img src="assets/6.png"/><br /> {{ $t('aluminiumFoil') }}</a></li>
    <li><a href="#/products/lids"><img src="assets/10.png"/><br /> {{ $t('aluminiumLids') }}</a></li>
    <li><a href="#/products/pizza"><img src="assets/12.png"/><br /> {{ $t('pizzaBox') }}</a></li>
    <li><a href="#/products/tablecover"><img src="assets/15.png"/><br /> {{ $t('plasticTableCover') }}</a></li>
    <li><a href="#/products/papercup"><img src="assets/17.png"/><br /> {{ $t('paperCup') }}</a></li>
  </ul>
</li>
      <li><a href="#/catalog">{{ $t('catalog') }}</a></li>
      <li><a href="#/about">{{ $t('about') }}</a></li>
      <li><a href="#/blog">{{ $t('blog') }}</a></li>
      <li><a href="#/contact">{{ $t('contact') }}</a></li>
    </ul>
    <div class="nav-actions">
<div class="lang-switcher">
  <button class="lang-btn" @click="toggleLangMenu">
    <span>{{ currentLangLabel }}</span>
    <span class="arrow" :class="{ open: isLangMenuOpen }">▼</span>
  </button>

  <ul v-if="isLangMenuOpen" class="lang-dropdown">
    <li @click="setLanguage('en-US')">INT</li>
    <li @click="setLanguage('fa-IR')">فارسی</li>
  </ul>
</div>
<div class="menu-toggle" @click="toggleMenu">☰</div>
</div>
</nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n({ useScope: "global" });

const isLangMenuOpen = ref(false);

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const currentLangLabel = computed(() =>
  locale.value === "fa-IR" ? "فارسی" : "INT"
);

const toggleLangMenu = () => {
  isLangMenuOpen.value = !isLangMenuOpen.value;
};

const setLanguage = (lang: string) => {
  locale.value = lang;
  localStorage.setItem("site-lang", lang);
  isLangMenuOpen.value = false;
};

onMounted(() => {
  const savedLang = localStorage.getItem("site-lang");
  if (savedLang) {
    locale.value = savedLang;
  }
});

const isDropdownOpen = ref(false);
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};



import { useRoute } from "vue-router";

const route = useRoute();

const logoSrc = computed(() => {
  switch (route.name) {
    case "container":
      return "assets/logo2.png";
    case "pizza":
      return "assets/logo3.png";
    case "foil":
      return "assets/logo2.png";
    case "lids":
      return "assets/logo2.png";
    case "tablecover":
      return "assets/logo4.png";
    default:
      return "assets/logo1.png";
  }
});

</script>

<style lang="scss">
$fontColor: white;



* {
  list-style: none;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar a img {
  margin-right: 40px;
    margin-left: 40px;

}

.navbar > ul {
  margin: 0;
  padding: 0;
  display: flex;
  gap: 30px;
  z-index: 9999;
}

.navbar ul li a {
  color: $fontColor;
  text-decoration: none;
  padding: 4px 10px;
}


.dropbtn {
  font-size: 16px;
  border: none;
}

.dropdown {
  position: static;
  }

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;       
  left: 0;     
  right: 0; 
  width: 100vw;     
  background-color: #fff;
  padding: 20px;
  z-index: 1000;
}

.dropdown-content a {
  color: #3d3d3dff !important;
    font-size: 12px !important;
  justify-content: center !important;
}

.dropdown-content li img {
  width: 200px;   
  height: 200px;   
  object-fit: cover; 
  object-position: center;
}

.dropdown.active .dropdown-content {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(6, 1fr);
}


@media (max-width: 768px) {
  .dropdown.active .dropdown-content {
    grid-template-columns: repeat(2, 1fr);
    padding: 12px;
  }
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.menu-toggle {
  display: none;
  font-size: 26px;
  color: white;
  cursor: pointer;
}
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
}
@media (max-width: 768px) {
  .navbar {
    justify-content: space-between;
    padding: 10px;
  }

  .navbar > ul {
    display: none;
    flex-direction: column;
    background: #ffffffff;
    position: fixed;
    top: 60px;
    width: 140px;
    padding: 20px 0;
    gap: 15px;
    text-align: center;
    right: 0px;
  }

  .navbar > ul li a {
    color: #4b4b4bff;
    font-size: 14px;
  }

  .navbar.active > ul {
    display: flex;
  }
}

.lang-switcher {
  position: relative;
}

.lang-btn {
  background: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 32px;
    border: none;
}

.arrow {
  font-size: 12px;
  transition: transform 0.2s;
}
.arrow.open {
  transform: rotate(180deg);
}

.lang-dropdown {
  position: absolute;
  top: 110%;
  right: 0;
  background: white;
  color: #5f5f5fff;
  font-size: 12px;
  padding: 5px 0;
  margin: 0;
  min-width: 60px;
  z-index: 9999;

  li {
    padding: 8px 10px;
    cursor: pointer;
  }
}
</style>
