<template>
  <nav :class="{ active: isMenuOpen }" class="navbar">
    <a href="/" class="logo">
      <img src="assets/logo1.png" alt="Logo" style="height: 30px" />
    </a>

    <ul>
      <li class="dropdown">
        <a class="dropbtn">{{ $t('products') }}</a>
        <ul class="dropdown-content">
          <li>
            <a href="#/products/container"><img src="assets/2.png" alt="Promo"/>
{{ $t('aluminiumContainers') }}</a>
          </li>
          <li>
            <a href="#/products/foil"><img src="assets/6.png" alt="Promo"/>
{{ $t('aluminiumFoil') }}</a>
          </li>
          <li>
            <a href="#/products/lids"><img src="assets/10.png" alt="Promo"/>
{{ $t('aluminiumLids') }}</a>
          </li>
          <li>
            <a href="#/products/pizza"><img src="assets/12.png" alt="Promo"/>
{{ $t('pizzaBox') }}</a>
          </li>
          <li>
            <a href="#/products/tablecover"><img src="assets/15.png" alt="Promo"/>
{{ $t('plasticTableCover') }}</a>
          </li>
          <li>
            <a href="#/products/papercup"><img src="assets/17.png" alt="Promo"/>
{{ $t('paperCup') }}</a>
          </li>
        </ul>
      </li>

      <li>
        <a href="#/catalog">{{ $t('catalog') }}</a>
      </li>
      <li>
        <a href="#/about">{{ $t('about') }}</a>
      </li>
      <li>
        <a href="#/blog">{{ $t('blog') }}</a>
      </li>
      <li>
        <a href="#/contact">{{ $t('contact') }}</a>
      </li>
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
</div>      <div class="menu-toggle" @click="toggleMenu">☰</div>
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

</script>

<style lang="scss">
$fontColor: white;
.lang-btn {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar a img {
  margin-right: 40px;
}

.navbar > ul {
  list-style: none;
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
  position: relative;
}

.dropdown-content {
  display: none;
 position: fixed;
      width: 100%;
      background-color: #ffffffff;
  padding: 40px 40px;
  margin: auto;
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

.dropdown:hover .dropdown-content,
.dropdown.active .dropdown-content { 
  display: grid; 
  gap: 20px;
  grid-template-columns: repeat(6, 1fr);
}

@media (max-width: 768px) {
  .dropdown:hover .dropdown-content,
  .dropdown.active .dropdown-content {
    grid-template-columns: repeat(2, 1fr);
    padding: 12px;
  }

  .dropdown-content li img {
    width: 100px;
    height: 100px;
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
  list-style: none;
  padding: 5px 0;
  margin: 0;
  min-width: 60px;
  z-index: 1000;

  li {
    padding: 8px 10px;
    cursor: pointer;
  }
}
</style>
