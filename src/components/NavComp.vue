<template>
  <nav :class="{ active: isMenuOpen }" class="navbar">
    <a href="/" class="logo">
      <img :src="logoSrc" alt="Logo" style="height: 30px" />
    </a>

    <ul>
      <li class="dropdown" :class="{ active: isDropdownOpen }">
        <a class="dropbtn" @click.prevent="toggleDropdown">{{ $t("products") }} </a>
        <ul class="dropdown-content">
          <li><a href="#/products/container"><img src="assets/2.png" />{{ $t("aluminiumContainers") }}</a></li>
          <li><a href="#/products/foil"><img src="assets/6.png" />{{ $t("aluminiumFoil") }}</a></li>
          <li><a href="#/products/lids"><img src="assets/10.png" />{{ $t("aluminiumLids") }}</a></li>
          <li><a href="#/products/pizza"><img src="assets/12.png" />{{ $t("pizzaBox") }}</a></li>
          <li><a href="#/products/tablecover"><img src="assets/15.png" />{{ $t("plasticTableCover") }}</a></li>
          <li><a href="#/products/papercup"><img src="assets/17.png" />{{ $t("paperCup") }}</a></li>
        </ul>
      </li>
      <li><a href="#/catalog">{{ $t("catalog") }}</a></li>
      <li><a href="#/about">{{ $t("about") }}</a></li>
      <li><a href="#/blog">{{ $t("blog") }}</a></li>
      <li><a href="#/contact">{{ $t("contact") }}</a></li>
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
import { useRoute } from "vue-router";

const { locale } = useI18n({ useScope: "global" });
const route = useRoute();

const isLangMenuOpen = ref(false);
const isMenuOpen = ref(false);
const isDropdownOpen = ref(false);

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
const toggleDropdown = () => (isDropdownOpen.value = !isDropdownOpen.value);
const toggleLangMenu = () => (isLangMenuOpen.value = !isLangMenuOpen.value);

const currentLangLabel = computed(() =>
  locale.value === "fa-IR" ? "فارسی" : "INT"
);

const setLanguage = (lang: string) => {
  locale.value = lang;
  localStorage.setItem("site-lang", lang);
  isLangMenuOpen.value = false;
};

onMounted(() => {
  const savedLang = localStorage.getItem("site-lang");
  if (savedLang) locale.value = savedLang;
});

const logoSrc = computed(() => {
  switch (route.name) {
    case "container":
    case "foil":
    case "lids":
      return "assets/logo2.png";
    case "pizza":
      return "assets/logo3.png";
    case "tablecover":
      return "assets/logo4.png";
    default:
      return "assets/logo1.png";
  }
});


onMounted(() => {
  const savedLang = localStorage.getItem("site-lang");
  if (savedLang) locale.value = savedLang;
  window.addEventListener("scroll", () => {
    isMenuOpen.value = false;
    isDropdownOpen.value = false;
    isLangMenuOpen.value = false;
  });
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
  margin: 0 40px;
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
  position: fixed;
  top: 80px;
  left: 0;
  width: 100vw;
  background-color: #fff;
  z-index: 10000 !important;
  padding: 40px 80px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
}

.dropdown.active .dropdown-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  justify-items: center;
  align-items: center;
  gap: clamp(12px, 2vw, 20px);
  padding: clamp(20px, 5vw, 60px);
  position: fixed;
  width: 100vw;
  top: 60px;
  left: 0;
  z-index: 10000;
}


.dropdown-content li {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.dropdown-content li a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #3d3d3dff !important;
  font-size: 12px !important;
  text-decoration: none;
}

.dropdown-content li img {
  width: clamp(120px, 18vw, 250px);
  height: clamp(120px, 18vw, 250px);
  object-fit: cover;
  margin-bottom: 8px;
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

  .navbar {
    justify-content: space-between;
    padding: 10px;
  }

  .navbar > ul {
    display: none;
    flex-direction: column;
    background: #ffffff;
    position: fixed;
    top: 60px;
    width: 140px;
    padding: 20px 0;
    gap: 15px;
    text-align: center;
    right: 0;
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
