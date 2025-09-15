<template>
<nav :class="{ 'active': isMenuOpen }" class="navbar">
    <a href="/" class="logo">
      <img src="assets/logo1.png" alt="Logo" style="height: 30px" />
    </a>


    <ul>
     <li class="dropdown">
  <a href="/" class="dropbtn">{{ $t('products') }}</a>
  <ul class="dropdown-content">
    <li><a href="#/products/container">{{ $t('aluminiumContainers') }}</a></li>
    <li><a href="#/products/foil">{{ $t('aluminiumFoil') }}</a></li>
    <li><a href="#/products/lids">{{ $t('aluminiumLids') }}</a></li>
    <li><a href="#/products/pizza">{{ $t('pizzaBox') }}</a></li>
    <li><a href="#/products/tablecover">{{ $t('plasticTableCover') }}</a></li>
    <li><a href="#/products/papercup">{{ $t('paperCup') }}</a></li>
  </ul>
</li>

  <li><a href="#/catalog">{{ $t('catalog') }}</a></li>
<li><a href="#/about">{{ $t('about') }}</a></li>
<li><a href="#/blog">{{ $t('blog') }}</a></li>
<li><a href="#/contact">{{ $t('contact') }}</a></li>

    </ul>
  <div class="nav-actions">
        <button class="lang-btn" @click="toggleLanguage">
    🌏</button>
<div class="menu-toggle" @click="toggleMenu">☰</div>
  </div>

  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n({ useScope: 'global' });

// تابع تغییر زبان
const toggleLanguage = () => {
  locale.value = locale.value === 'en-US' ? 'fa-IR' : 'en-US';
};

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

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

.navbar ul li a:hover {
  color: #194d7aff;
  border-radius: 5px;
  padding: 4px 10px;
}

.dropbtn {
  color: #11304c;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #11304c71;
    border-radius: 5px;

  min-width: 220px;
}

.dropdown-content li {
  display: block;
  padding: 4px 10px;
}

.dropdown-content li a {
  color: #11304c;
  padding: 4px 10px;
  text-decoration: none;
  display: block;
}

.dropdown-content li a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
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
    background: #11304c3d;
    position: absolute;
    top: 60px;
    width: 200px;
    padding: 20px 0;
    gap: 15px;
    text-align: center;
    right: 0px;
  }

  .navbar > ul li a {
    color: #ffffffff;
    font-size: 14px;
  }


  .navbar.active > ul {
    display: flex;
  }

  .dropdown-content {
    position: static;
    color: #ffffffff;
    background: #11304c71;
  }
}
</style>
