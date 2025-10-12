<template>
  <q-page>
    <header>
      <q-carousel swipeable animated v-model="slide" :autoplay="autoplay" ref="carousel" infinite>
        <q-carousel-slide :name="1" img-src="assets/slider1.png" />
        <q-carousel-slide :name="2" img-src="assets/slider2.png" />
        <q-carousel-slide :name="3" img-src="assets/slider3.png" />
        <q-carousel-slide :name="4" img-src="assets/slider4.png" />
        <template v-slot:control>
          <q-carousel-control position="top" class="text-white rounded-borders">
            <nav-comp  textColor="#ffffffff" />
          </q-carousel-control>
     <q-carousel-control position="bottom" style="max-width: 60%">
  <div class="slider-overlay">
    <h1><span>{{$t('heroTitle1')}}</span>{{$t('heroTitle2')}}</h1>
    <p v-html="$t('heroSubtitle')"></p>
<q-btn class="btn" :label="$t('heroButton')" to="/products/container"/>
  </div>
</q-carousel-control>
        </template>
      </q-carousel>
    </header>

   <section id="certificates" class="certificates-section">
  <!-- ISO CERTIFIED -->
  <div class="certificate-item">
    <img src="assets/c3.png" alt="ISO Certified">
    <h3>{{ $t('isoCertified') }}</h3>
  </div>

  <!-- MADE IN IRAN -->
  <div class="certificate-item">
    <img src="assets/c2.png" alt="Made in Iran">
    <h3>{{ $t('madeInIran') }}</h3>
  </div>

  <!-- SIB SALAMAT -->
  <div class="certificate-item">
    <img src="assets/c1.png" alt="SIB SALAMAT">
    <h3>{{ $t('sibSalamat') }}</h3>
  </div>
</section>

   <section id="hero" class="hero">
  <h4>{{ $t('heroIntro') }}</h4>
  <h1>{{ $t('heroMainTitle') }}</h1>
  <p>{{ $t('heroDescription') }}</p>
</section>

<section id="products" class="products">
  <!-- Product 1 -->
  <div class="product">
    <div><img src="assets/r1.png" alt="Disposable Aluminum Containers" /></div>
    <div class="text">
      <h2>{{ $t('disposableTitle') }}</h2>
      <h3>{{ $t('disposableSubtitle') }}</h3>
      <p>{{ $t('disposableText') }}</p>

      <ul>
        <li>{{ $t('disposableList1') }}</li>
        <li>{{ $t('disposableList2') }}</li>
        <li>{{ $t('disposableList3') }}</li>
        <li>{{ $t('disposableList4') }}</li>
        <li>{{ $t('disposableList5') }}</li>
      </ul>
<router-link to="/products/container" class="link"> {{ $t('disposableLink') }}
</router-link> </div>
  </div>

  <!-- Product 2 -->
  <div class="product reverse">
    <div><img src="assets/r2.png" alt="Aluminum Foil Rolls" /></div>
    <div class="text">
      <h2>{{ $t('foilTitle') }}</h2>
      <h3>{{ $t('foilSubtitle') }}</h3>
      <p>{{ $t('foilText') }}</p>
      <ul>
        <li>{{ $t('foilList1') }}</li>
        <li>{{ $t('foilList2') }}</li>
        <li>{{ $t('foilList3') }}</li>
        <li>{{ $t('foilList4') }}</li>
        <li>{{ $t('foilList5') }}</li>
      </ul>
<router-link to="/products/foil" class="link">  {{ $t('foilLink') }}
</router-link></div>
  </div>
</section>



    <section id="product" class="products-section">
 <h1 class="section-title">{{ $t('ourProducts') }}</h1>
      <search-product category="all" button-color="#11304c" />
      <div class="product-category">
  <div class="category-header">
    <h2>{{ $t('categoryContainers') }}</h2>
<router-link to="/products/container" class="link"> {{ $t('viewAll') }} </router-link>  </div>
  <div class="product-images" style="grid-template-columns: auto auto auto;">
    <img src="assets/1.png" alt="Aluminium Containers 1" />
    <img src="assets/2.png" alt="Aluminium Containers 2" />
    <img src="assets/3.png" alt="Aluminium Containers 3" />
  </div>
</div>

<div id="category" class="product-category">
  <div class="category-header">
    <h2>{{ $t('categoryFoil') }}</h2>
<router-link to="/products/foil" class="link"> {{ $t('viewAll') }} </router-link>  </div>
  <div class="product-images" style="grid-template-columns: auto auto auto auto;">
    <img src="assets/4.png" alt="Aluminium Foil 1" />
    <img src="assets/5.png" alt="Aluminium Foil 2" />
    <img src="assets/6.png" alt="Aluminium Foil 3" />
    <img src="assets/7.png" alt="Aluminium Foil 4" />
  </div>
</div>

<div class="product-category">
  <div class="category-header">
    <h2>{{ $t('categoryLids') }}</h2>
<router-link to="/products/lids" class="link"> {{ $t('viewAll') }} </router-link>  </div>
  <div class="product-images" style="grid-template-columns: auto auto auto;">
    <img src="assets/8.png" alt="Lids 1" />
    <img src="assets/9.png" alt="Lids 2" />
    <img src="assets/10.png" alt="Lids 3" />
  </div>
</div>

<div class="product-category">
  <div class="category-header">
    <h2>{{ $t('categoryPizza') }}</h2>
<router-link to="/products/pizza" class="link"> {{ $t('viewAll') }} </router-link>  </div>
  <div class="product-images" style="grid-template-columns: auto auto auto;">
    <img src="assets/11.png" alt="Pizza Box 1" />
    <img src="assets/12.png" alt="Pizza Box 2" />
    <img src="assets/13.png" alt="Pizza Box 3" />
  </div>
</div>

<div class="product-category">
  <div class="category-header">
    <h2>{{ $t('categoryCover') }}</h2>
<router-link to="/products/tablecover" class="link"> {{ $t('viewAll') }} </router-link>  </div>
  <div class="product-images" style="grid-template-columns: auto auto auto;">
    <img src="assets/14.png" alt="Cover 1" />
    <img src="assets/15.png" alt="Cover 2" />
    <img src="assets/16.png" alt="Cover 3" />
  </div>
</div>

<div class="product-category">
  <div class="category-header">
    <h2>{{ $t('categoryCup') }}</h2>
  </div>
  <div class="product-images" style="grid-template-columns: auto auto;">
    <img src="assets/17.png" alt="Cup 1" />
    <img src="assets/18.png" alt="Cup Coming Soon" />
  </div>
</div>
    </section>

   <section id="about" class="about-section">
  <div class="about-content">
    <h2>{{ $t('aboutTitle') }}</h2>
    <p>{{ $t('aboutText') }}</p>

    <div class="about-buttons">
<router-link to="/about" class="btn primary">
  {{ $t('learnMore') }}
</router-link>
     <a href="https://www.aparat.com/v/l49is36" class="btn secondary" target="_blank" rel="noopener noreferrer">
  {{ $t('watchVideo') }} <span class="play-icon">▶</span></a>
    </div>
  </div>

  <div class="about-stats">
    <div class="stat-box">
      <div class="number">20</div>
      <div class="label">{{ $t('yearsExperience') }}</div>
    </div>
    <div class="stat-box">
      <div class="number">+ 10</div>
      <div class="label">{{ $t('exports') }}</div>
    </div>
    <div class="stat-box">
      <div class="number">+ 15</div>
      <div class="label">{{ $t('distributors') }}</div>
    </div>
    <div class="stat-box">
      <div class="number">+ 50</div>
      <div class="label">{{ $t('colleagues') }}</div>
    </div>
  </div>
</section>


   <section id="service" class="service-section">
  <div class="service-content">
    <div class="service-text">
      <h2>{{ $t('serviceTitle') }}</h2>
      <h3>{{ $t('serviceSubtitle') }}</h3>
      <p>
        {{ $t('serviceText1') }}
        <br /><br />
        {{ $t('serviceText2') }}
      </p>
      <p><strong>{{ $t('serviceTagline') }}</strong></p>
      <img src="assets/s1.png" alt="Disposable packaging" />
    </div>
    <div class="service-details">
      <img src="assets/s3.png" alt="Custom print" />
      <ul>
        <li>{{ $t('serviceList1') }}</li>
        <li>{{ $t('serviceList2') }}</li>
        <li>{{ $t('serviceList3') }}</li>
        <li>{{ $t('serviceList4') }}</li>
        <li>{{ $t('serviceList5') }}</li>
      </ul>
      <p>{{ $t('serviceText3') }}</p>
<router-link to="/contact" class="contact-btn">
  {{ $t('contact') }}
</router-link>
    </div>
  </div>
  <div class="coming-soon">
    <img src="assets/s2.png" alt="Coming Soon" />
  </div>
</section>


    <section id="catalog" class="catalog-section">
  <div class="catalog-image">
    <img src="assets/catalog.png" alt="Catalog Preview" />
  </div>

  <div class="catalog-content">
    <h2>{{ $t('catalogTitle') }}</h2>
    <p>{{ $t('catalogText') }}</p>
<a href="/assets/catalog-en.pdf" class="catalog-btn" target="_blank" rel="noopener noreferrer" > {{ $t('catalogButton') }} </a>
  </div>
</section>

   <section id="blog" class="blog-section">
  <h2>{{ $t('blogSectionTitle') }}</h2>

  <div class="blog-card">
    <img src="assets/b1.png" alt="Aluminum container" />
    <div class="blog-content">
      <div class="stars">★★★★★</div>
      <p>{{ $t('blogArticle1Title') }}</p>
      <h3>{{ $t('blogArticle2Title') }}</h3>
    </div>
  </div>

  <div class="blog-card reverse">
    <img src="assets/b2.png" alt="Recycling aluminum" />
    <div class="blog-content">
      <p>{{ $t('blogArticle2Text') }}</p>
      <h3>{{ $t('blogArticle2Title') }}</h3>
<router-link to="/blog" class="btn"> {{ $t('blogBtn') }} </router-link>
    </div>
  </div>

  <div class="blog-banner">
    <img src="assets/b3.png" alt="Aluminum packaging" />
    <div class="banner-text">
      <h3>{{ $t('blogLearnMoreTitle') }}</h3>
      <p>{{ $t('blogLearnMoreText') }}</p>
    </div>
  </div>
</section>


   <section id="export" class="export-section">
  <h2>{{ $t('exportTitle') }}</h2>
  <p>{{ $t('exportText') }}</p>
  <div class="export-images">
    <img src="assets/ex1.png" alt="Loading aluminum export products" />
    <img src="assets/ex2.png" alt="Factory worker handling aluminum containers" />
  </div>
</section>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavComp from 'src/components/NavComp.vue';
import SearchProduct from 'src/components/SearchProduct.vue';
const slide = ref(1);
const autoplay = ref(true);
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html[dir="rtl"] body,
html[dir="rtl"] .q-page {
  font-family: 'IRANSansX', Tahoma, sans-serif;
  direction: rtl;
  font-size: 16px;
  line-height: 1.6;
}

html[dir="ltr"] body,
html[dir="ltr"] .q-page {
  font-family: 'Roboto', Arial, sans-serif;
  direction: ltr;
  font-size: 16px;
  line-height: 1.6;
}
.q-carousel {
  width: 100%;
  aspect-ratio: 192 / 90;
  height: auto;
}

.slider-overlay {
  color: #fff;
  z-index: 10;
  padding: 20px 60px;
}

.slider-overlay h1 {
  font-size: 50px;
  margin: 0;
  line-height: 1.2;
  font-weight: 50;
}

.slider-overlay h1 span {
  display: block;
  font-weight: 400;
  letter-spacing: 0;
}
html[dir="ltr"] .slider-overlay h1 {
  letter-spacing: 6px;
}
html[dir="ltr"] .slider-overlay h1 span {
  letter-spacing: 0px;
}
html[dir="rtl"] .slider-overlay h1 {
  font-weight: lighter;
}

html[dir="rtl"] .slider-overlay h1 span {
  font-weight: 400;
}
.slider-overlay p {
  font-size: 18px;
  margin: 10px 0;
  color: #ffffff;
}

.slider-overlay .btn {
  display: inline-block;
  padding: 12px 94px;
  background: #fff;
  color: #11304c;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;
}

.slider-overlay .btn:hover {
  background: #11304c;
  color: #fff;
}

@media (max-width: 820px) {
  .slider-overlay {
    padding: 7px 15px;
  }

  .slider-overlay h1 {
    font-size: 28px;
  }

  .slider-overlay p {
display: none;
  }

  .slider-overlay .btn {
 display: none;

  }
}

.slideshow-container {
  width: 100%;
  position: relative;
  margin: auto;
  overflow: hidden;
}

.fade {
  animation-name: fade;
  animation-duration: 2.5s;
}

.certificates-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 180px;
 padding: 60px 0px 60px 0px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(53, 53, 53, 0.1);
 }

.certificate-item {
  text-align: center;
}

.certificate-item img {
  width: 80px;
  height: auto;
}

.certificate-item h3 {
  font-size: 18px;
  margin: 0;
  color: #11304c;
  font-weight: 600;
}

@media (max-width: 767px) {
  .certificates-section {
    display: none;
  }
}

.hero {
  text-align: center;
  max-width: 800px;
  margin: 50px auto;
  padding: 0 20px;
  margin-top: 200px;
  font-size: 1rem;
}

.hero h1 {
  font-size: 2rem;
  color: #11304c;
  margin-bottom: 15px;
  font-weight: 600;
}

.hero h4 {
  font-size: 0.9rem;
  color: #2e659c;
  margin-bottom: 10px;
  font-weight: 600;
}

@media (max-width: 600px) {
  .hero {
    margin-top: 60px;
    padding: 0 15px;
    text-align: center;
  }

  .hero h1 {
    font-size: 1.5rem;
    line-height: 1.3;
  }

  .hero h4 {
    font-size: 1rem;
    line-height: 1.8;
  }

  .hero p {
    font-size: 0.9rem;
    line-height: 1.6;
    margin-top: 10px;
  }
}


.products {
  display: flex;
  flex-direction: column;
  gap: 60px;
  max-width: 1100px;
  margin: 100px auto;
  padding: 20px;
}

.product {
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 20px;
}

.product.reverse {
  flex-direction: row-reverse;
  margin: 100px 0px;
}

.product img {
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}


.product h2 {
  font-size: 1.5rem;
  color: #296097;
}

.product h3 {
  font-size: 1.2rem;
  color: #11304c;
  margin-bottom: 10px;
}

.product ul {
  margin: 15px 0;
  padding-left: 20px;
}

.link {
  display: inline-block;
  margin-top: 10px;
  color: #11304c;
  text-decoration: none;
  font-weight: bold;
}

.link:hover {
  text-decoration: underline;
}

@media (max-width: 1000px) {
  .hero {
    margin-top: 100px;
    padding: 0 10px;
    margin-left: 10px;
   margin-right: 10px;
  }

  .hero h1 {
    font-size: 1.5rem;
  }

  .hero h4 {
    font-size: 0.8rem;
  }

  .products {
    padding: 10px;
    gap: 40px;
  }

  .product,
  .product.reverse {
    flex-direction: column !important;
  }

  .product img {
    max-width: 100%;
    height: auto;
  }

  .product .text {
    padding-top: 20px;
    text-align: left;
      flex: 1;
    padding: auto;
  }

  .product h2 {
    font-size: 1.3rem;
  }

  .product h3 {
    font-size: 1rem;
  }

  .link {
    font-size: 0.95rem;
  }
}

.products-section {
  width: 100%;
  padding: 30px 60px;
    background: rgb(217, 234, 248);

}

.section-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 120px;
  color: #11304c;
}

.product-category {
  margin-bottom: 100px;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1250px;
  margin: 0px auto;
  color: #11304c;
}

.category-header h2 {
  font-size: 24px;
  font-weight: bold;
}

.category-header a {
  font-size: 18px;
  color: #11304c;
  text-decoration: none;
}

@media (max-width: 600px) {
  .category-header {
    gap: 8px;

    h2 {
      font-size: 18px;
    }

    a {
      font-size: 14px;
    }
  }
}

.product-images {
  display: grid;
  gap: 25px;
  max-width: 1250px;
  margin: 0px auto;
}


.product-images img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

@media (max-width: 992px) {
   .product-images {
      gap: 15px;
  }
  .product-images img {
    height: 300px;
  }
}

@media (max-width: 600px) {
  .product-images {
      gap: 8px;
  }
  .product-images img {
    height: 100px;
  }
}
.product-category:nth-child(3) .product-images,
.product-category:nth-child(5) .product-images,
.product-category:nth-child(6) .product-images,
.product-category:nth-child(7) .product-images {
  grid-template-columns: repeat(3, 1fr);
}

.product-category:nth-child(8) .product-images {
  grid-template-columns: repeat(2, 1fr);
}

.product-category:nth-child(4) .product-images {
  grid-template-columns: repeat(4, 1fr);
}

.about-section {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  background-color: #11304c;
  color: white;
  gap: 140px;
}

@media (max-width: 1000px) {
  .about-section {
    display: grid;
    grid-template-columns: auto;
  }
}

.about-content {
  max-width: 450px;
  width: 100%;
}

.about-content h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

.about-content p {
  font-size: 14px;
  line-height: 1.8;
  text-align: justify;
}

.about-buttons {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  transition: 0.3s;
    color: #11304c;

}

.btn.primary {
  background-color: white;
  color: #11304c;
  border: none;
}

.btn.secondary {
  border: 1px solid white;
  color: white;
  background-color: transparent;
}

.play-icon {
  margin-left: 8px;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;
  max-width: 400px;
  width: 100%;
}

.stat-box {
  background-color: white;
  color: #11304c;
  padding: 25px 20px;
  text-align: center;
  border-radius: 2px;
}

.stat-box .number {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
}

.stat-box .label {
  font-size: 13px;
}

.service-section {
  max-width: 100%;
  margin: auto auto;
  padding: 140px 20px;
  background-color: rgb(217, 234, 248);
  color: #11304c;
}

@media (max-width: 768px) {
  .service-section {
    padding: 20px 15px;
  }
}


.service-content {
  display: flex;
  gap: 40px;
  margin: auto auto;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  max-width: 1000px;
  width: 100%;
}

.service-text {
  width: 100%;
  max-width: 500px;
}

.service-text h2 {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
}

.service-text h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
}

  .service-text p,
  .service-details ul,
  .service-details p {
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 20px;
  }
.service-text img {
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.service-details {
  width: 100%;
  max-width: 500px;
}

.service-details ul {
  font-size: 14px;
  margin: 15px auto;
  padding-left: 20px;
}

.service-details li {
  margin-bottom: 8px;
}

.service-details img {
  width: 100%;
  max-width: 500px;
}

.contact-btn {
  display: inline-block;
  background-color: #11304c;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  margin-top: 10px;
}

.coming-soon {
  position: relative;
  max-width: 920px;
  margin: 0 auto;
}

.coming-soon img {
  width: 100%;
  border-radius: 8px;
  display: block;
  margin-top: 40px;
}

@media screen and (max-width: 768px) {
  .service-content {
    flex-direction: column;
    padding: 60px 30px;
    gap: 20px;
  }

  .service-text,
  .service-details {
    max-width: 100%;
    padding: 0;
  }


  .contact-btn {
    font-size: 13px;
    padding: 8px 16px;
  }

  .service-text img,
  .service-details img,
  .coming-soon img {
    max-width: 100%;
    height: auto;
  }

  .coming-soon {
    padding: 0 10px;
  }
}

.catalog-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 140px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
}

.catalog-image {
  flex: 1;
}

.catalog-image img {
  width: 100%;
  border-radius: 8px;
}

.catalog-content {
  flex: 1;
}

.catalog-content h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #11304c;
    font-weight: bold;

}

.catalog-content p {
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 30px;
  color: #11304c;
}

.catalog-btn {
  display: inline-block;
  background: #11304c;
  color: #fff;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.catalog-btn:hover {
  background: #11304c;
}

@media (max-width: 768px) {
  .catalog-section {
    flex-direction: column;
    padding: 80px 20px;
    gap: 40px;
  }

  .catalog-content h2 {
    font-size: 45px;

    text-align: center;
  }

  .catalog-content p {
    font-size: 14px;
    text-align: center;
  }

  .catalog-btn {
    display: block;
    width: fit-content;
    margin: 0 auto;
  }
}

.blog-section {
  width: 100%;
  margin: 0 auto;
  padding: 140px 20px;
  background-color: #11304c;
}

.blog-section h2 {
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #ffffff;
}

.blog-card {
  background: #cfd8e3;
  border-radius: 12px;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-bottom: 30px;
  color: #11304c;
  max-width: 1000px;
  margin: 80px auto;
}

.blog-card img {
  width: 50%;
  height: auto;
  object-fit: cover;
}

.blog-content {
  padding: 20px;
  flex: 1;
  position: relative;
}

.blog-content h3 {
  font-size: 16px;
  margin: 10px 0;
  font-weight: bold;
}

.blog-content p {
  font-size: 14px;
  line-height: 1.6;
}

.stars {
  color: gold;
  margin-bottom: 10px;
  font-size: 24px;
}

.blog-card.reverse {
  flex-direction: row-reverse;
}

.btn {
  display: inline-block;
  background: #11304c;
  color: #fff;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 13px;
  margin-top: 10px;
  transition: 0.3s ease;
}

.btn:hover {
  background: #11304c;
}

.blog-banner {
  background: #cfd8e3;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.blog-banner img {
  width: 100%;
  display: block;
  object-fit: cover;
  filter: opacity(0.4);
  height: 250px;
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #11304c;
}

.banner-text h3 {
  font-size: 20px;
  margin-bottom: 8px;
}

.banner-text p {
  font-size: 14px;
}

@media (max-width: 768px) {
  .blog-card {
    flex-direction: column;
    max-width: 100%;
    margin: 40px auto;
  }

  .blog-card.reverse {
    flex-direction: column;
  }

  .blog-card img {
    width: 100%;
  }

  .blog-content {
    padding: 15px;
  }

  .banner-text h3 {
    font-size: 18px;
  }

  .banner-text p {
    font-size: 13px;
  }

  .blog-section {
    padding: 80px 15px;
  }

  .blog-section h2 {
    font-size: 22px;
  }
}

.export-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
  text-align: center;
}

.export-section h2 {
  font-size: 28px;
  font-weight: bold;
  color: #11304c;
  margin-bottom: 15px;
}

.export-section p {
  font-size: 16px;
  line-height: 1.8;
  color: #3a4a5a;
  max-width: 800px;
  margin: 0 auto 40px auto;
}

.export-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.export-images img {
  width: 100%;
  max-width: 480px;
  border-radius: 12px;
  object-fit: cover;
}


.aboutphoto {
  border-radius: 20px;
  max-width: 880px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 60px 20px;
}
</style>
