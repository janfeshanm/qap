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
            <nav-comp />
          </q-carousel-control>
          <q-carousel-control position="bottom" style="max-width: 60%"
            ><div class="slider-overlay">
              <h1><span>ALUM</span> PEYMAN</h1>
              <p>
                The First and Largest Aluminum Foil and Disposable <br />
                Container Manufacturer in Northwest Iran
              </p>
              <a href="#" class="btn">PRODUCTS</a>
            </div>
          </q-carousel-control>
        </template>
      </q-carousel>
    </header>
    <section class="hero">
      <h4>High-Quality, Food-Grade Aluminum Products for Cooking, Packaging, and Storage</h4>
      <h1>Premium Aluminum Foil & Disposable Containers</h1>
      <p>
        Looking for reliable aluminum foil or durable disposable aluminum containers? Our factory
        specializes in manufacturing food-safe aluminum solutions used in households, restaurants,
        catering services, and food industries.
      </p>
    </section>

    <section class="products">
      <div class="product">
        <div><img src="assets/r1.png" alt="Disposable Aluminum Containers" /></div>
        <div class="text">
          <h2>Disposable Aluminum Containers</h2>
          <h3>Oven & Freezer Safe</h3>
          <p>
            Our disposable aluminum containers are perfect for hot and cold meals, widely used in
            catering, takeaway, and ready-meal packaging.
          </p>
          <ul>
            <li>Multiple shapes and sizes: round, rectangular, deep or shallow</li>
            <li>Optional lids for safe storage and transportation</li>
            <li>100% recyclable and environmentally friendly</li>
            <li>Oven-safe, microwave-safe and freezer-compatible</li>
            <li>Ideal for restaurants, food factories, and event catering</li>
          </ul>
          <a href="#" class="link">Explore Disposable Containers Collection</a>
        </div>
      </div>

      <div class="product reverse">
        <div><img src="assets/r2.png" alt="Aluminum Foil Rolls" /></div>
        <div class="text">
          <h2>Aluminum Foil Rolls</h2>
          <h3>Heat-Resistant & Food-Safe</h3>
          <p>
            We produce high-quality aluminum foil rolls in various widths and thicknesses, suitable
            for both home and industrial use.
          </p>
          <ul>
            <li>Food-grade and hygienic</li>
            <li>Resistant to high temperatures and moisture</li>
            <li>Keeps food fresh by blocking light, air, and contaminants</li>
            <li>Ideal for kitchens, bakeries, takeaways, and supermarkets</li>
            <li>Available in custom sizes and private label options</li>
          </ul>
          <a href="#" class="link">View All Aluminum Foil Products</a>
        </div>
      </div>
    </section>

    <section class="products-section">
      <h1 class="section-title">OUR PRODUCTS</h1>

      <search-product category="all" />

      <div class="product-category">
        <div class="category-header">
          <h2>Aluminium Containers</h2>
          <a href="container.html">view all</a>
        </div>
        <div class="product-images" style="grid-template-columns: auto auto auto;">
          <img src="assets/1.png" alt="Aluminium Containers 1"/>
          <img src="assets/2.png" alt="Aluminium Containers 2" />
          <img src="assets/3.png" alt="Aluminium Containers 3" />
        </div>
      </div>

      <div class="product-category">
        <div class="category-header">
          <h2>Aluminium Foil</h2>
          <a href="foil.html">view all</a>
        </div>
        <div class="product-images" style="grid-template-columns: auto auto auto auto;">
          <img src="assets/4.png" alt="Aluminium Foil 1" />
          <img src="assets/5.png" alt="Aluminium Foil 2" />
          <img src="assets/6.png" alt="Aluminium Foil 3"/>
          <img src="assets/7.png" alt="Aluminium Foil 4" />
        </div>
      </div>

      <div class="product-category">
        <div class="category-header">
          <h2>Container Lids</h2>
          <a href="lids.html">view all</a>
        </div>
        <div class="product-images"  style="grid-template-columns: auto auto auto;">
          <img src="assets/8.png" alt="Lids 1" />
          <img src="assets/9.png" alt="Lids 2" />
          <img src="assets/10.png" alt="Lids 3" />
        </div>
      </div>

      <div class="product-category">
        <div class="category-header">
          <h2>Cardboard Pizza Box</h2>
          <a href="pizza.html">view all</a>
        </div>
        <div class="product-images" style="grid-template-columns: auto auto auto;">
          <img src="assets/11.png" alt="Pizza Box 1" />
          <img src="assets/12.png" alt="Pizza Box 2" />
          <img src="assets/13.png" alt="Pizza Box 3" />
        </div>
      </div>

      <div class="product-category">
        <div class="category-header">
          <h2>Plastic Table Cover</h2>
          <a href="tablecover.html">view all</a>
        </div>
        <div class="product-images" style="grid-template-columns: auto auto auto;">
          <img src="assets/14.png" alt="Cover 1" />
          <img src="assets/15.png" alt="Cover 2" />
          <img src="assets/16.png" alt="Cover 3" />
        </div>
      </div>

      <div class="product-category">
        <div class="category-header">
          <h2>Disposable Paper Cup</h2>
        </div>
        <div class="product-images" style="grid-template-columns: auto auto;">
          <img src="assets/17.png" alt="Cup 1" />
          <img src="assets/18.png" alt="Cup Coming Soon" />
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="about-content">
        <h2>ABOUT US</h2>
        <p>
          Founded in 2005, Alum Peyman was established to meet the growing market demands in the
          packaging industry for food, pharmaceuticals, industrial products, bitumen sheets, and
          more. As the first and largest manufacturer of disposable containers and aluminium foil
          using the latest global technologies, the company began its operations in the Shahid
          Salimi Industrial Park in Tabriz, northwest of Iran. From its inception, the strong market
          presence and high customer satisfaction in the region inspired the management team to
          enhance product quality, expand the product range, and grow its target markets. Market
          research to better respond to industry needs.
        </p>
        <div class="about-buttons">
          <a href="#" class="btn primary">Learn More</a>
          <a href="#" class="btn secondary"> Watch Video <span class="play-icon">▶</span> </a>
        </div>
      </div>

      <div class="about-stats">
        <div class="stat-box">
          <div class="number">20</div>
          <div class="label">Years of experience</div>
        </div>
        <div class="stat-box">
          <div class="number">+10</div>
          <div class="label">Our Exports</div>
        </div>
        <div class="stat-box">
          <div class="number">+15</div>
          <div class="label">Distributors</div>
        </div>
        <div class="stat-box">
          <div class="number">+50</div>
          <div class="label">Expert Colleagues</div>
        </div>
      </div>
    </section>

    <section class="service-section">
      <div class="service-content">
        <div class="service-text">
          <h2>SERVICE</h2>
          <h3>CUSTOM PRINTING ON DISPOSABLE TABLEWARE</h3>
          <p>
            Elevate your brand with custom-printed disposable tableware. Whether you're running a
            cafe, restaurant, catering business, or organizing a special event, we offer
            high-quality printing on cups, plates, bowls, trays, and more.
            <br /><br />
            With options like direct printing and heat-transfer labeling, your logo, design, or
            promotional message will stand out, professionally printed with precision and
            durability.
          </p>
          <p><strong>Let your packaging speak your brand</strong></p>
          <img src="assets/s1.png" alt="Disposable packaging" />
        </div>

        <div class="service-details">
          <img src="assets/s3.png" alt="Custom print" />
          <ul>
            <li>High-resolution printing on various disposable items</li>
            <li>Full-color logo & design support</li>
            <li>Low minimum order quantities</li>
            <li>Fast turnaround times</li>
            <li>Free consultation on print-ready artwork</li>
          </ul>
          <p>
            Perfect for Coffee shops, fast food chains, events, marketing campaigns, and private
            labels.
          </p>
          <a href="#" class="contact-btn">CONTACT</a>
        </div>
      </div>

      <div class="coming-soon">
        <img src="assets/s2.png" alt="Coming Soon" />
      </div>
    </section>

    <section class="catalog-section">
      <div class="catalog-image">
        <img src="assets/catalog.png" alt="Catalog Preview" />
      </div>

      <div class="catalog-content">
        <h2>CATALOG</h2>
        <p>
          To get a comprehensive overview of our products, including detailed specifications, sizes,
          and various applications, you can download our digital catalog. It provides all the
          necessary information to help you choose the right product for your needs.
        </p>
        <a href="#" class="catalog-btn">DOWNLOAD CATALOG</a>
      </div>
    </section>

    <section class="blog-section">
      <h2>OUR LATEST ARTICLES & BLOG POSTS</h2>

      <div class="blog-card">
        <img src="assets/b1.png" alt="Aluminum container" />
        <div class="blog-content">
          <div class="stars">★★★★★</div>
          <p>Discover why aluminum is the ideal material for keeping your food fresh and safe.</p>
          <h3>Why Aluminum Containers are Perfect for Food Storage</h3>
        </div>
      </div>
      <div class="blog-card reverse">
        <img src="assets/b2.png" alt="Recycling aluminum" />
        <div class="blog-content">
          <p>
            Egestas vulputate cras et nisi volutpat lacus metus massa vel. Eget felis augue pretium
            faucibus convallis aliquam varius nisi commodo.
          </p>
          <h3>The Environmental Benefits of Recycling Aluminum</h3>
          <a href="#" class="btn">Learn More</a>
        </div>
      </div>
      <div class="blog-banner">
        <img src="assets/b3.png" alt="Aluminum packaging" />
        <div class="banner-text">
          <h3>Want to learn more?</h3>
          <p>Explore our blog for more tips, articles, and industry updates.</p>
        </div>
      </div>
    </section>

    <section class="export-section">
      <h2>Export</h2>
      <p>
        At Alum Peyman, we specialize in the export of premium-quality aluminum containers and
        household aluminum foil products. With over 20 years of experience in manufacturing and
        international trade, our company is a reliable partner for businesses seeking trusted,
        hygienic, and durable aluminum packaging solutions.
      </p>
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

h1,
h2,
h3 {
  font-family: 'Vazirmatn', sans-serif;
  font-weight: 600;
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
  border-radius: 10px;
  background-color: #11304c41;
  
}

.slider-overlay h1 {
  font-size: 50px;
  margin: 0;
  line-height: 1.2;
  font-weight: 50;
  letter-spacing: 4px;
}

.slider-overlay h1 span {
  display: block;
  font-weight: 400;
  letter-spacing: 0px;
}

.slider-overlay p {
  font-size: 18px;
  margin: 10px 0;
  color: #ffffff;
}

.slider-overlay .btn {
  display: inline-block;
  padding: 12px 24px;
  background: #fff;
  color: #11304c;
  font-weight: bold;
  text-decoration: none;
  border-radius: 6px;
  transition: 0.3s;
}

.slider-overlay .btn:hover {
  background: #11304c;
  color: #fff;
}



@media (max-width: 1000px) {
  .slider-overlay {
    padding: 7px 15px;
    border-radius: 5px;
  }

  .slider-overlay h1 {
    font-size: 18px;
  }

  .slider-overlay p {
display: none;
  }

  .slider-overlay .btn {
    padding: 4px 12px;
    font-size: 8px;
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

.hero {
  text-align: center;
  max-width: 800px;
  margin: 50px auto;
  padding: 0 20px;
  margin-top: 150px;
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


.product .text {
  flex: 1;
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
  background-color: rgb(217, 234, 248);
}

.section-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 120px;
  color: #11304c;
}

.search-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #11304c;
  padding: 25px;
  border-radius: 10px;
  margin: 10px auto 100px auto;
  max-width: 1000px;
    min-width: 300px;

  justify-content: center;
}

.search-box input {
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
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

.product-category {
  margin-bottom: 100px;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 10px auto;
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

.product-images {
  display: grid;
  gap: 10px;
  max-width: 1000px;
  margin: 0px auto;
}

.product-images img {
  width: 100%;
  height: 260px;
  border-radius: 8px;
  object-fit: cover;
}

@media (max-width: 992px) {
  .product-images img {
    height: 200px;
  }
}

@media (max-width: 600px) {
  .product-images img {
    height: 150px;
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
  gap: 50px;
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
  border: 1px solid white;
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
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.service-text h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
}

.service-text p {
  font-size: 14px;
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

  .service-text h2 {
    font-size: 18px;
  }

  .service-text h3 {
    font-size: 15px;
  }

  .service-text p,
  .service-details ul,
  .service-details p {
    font-size: 16px;
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
    font-size: 24px;
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

.containeroverlay {
  position: absolute;
  top: 20%;
  left: 21%;
  color: #11304c;
  z-index: 10;
}

.containeroverlay h1 {
  font-size: 48px;
  margin: 0;
  font-weight: bold;
  line-height: 1.2;
}

.containeroverlay h1 span {
  display: block;
}

.containeroverlay p {
  font-size: 18px;
  margin: 10px 0;
  color: #11304c;
}

@media (max-width: 768px) {
  .containeroverlay {
    top: auto;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    text-align: center;
  }
}

section.containerr {
  background-color: rgb(217, 234, 248);
  padding: 100px 40px;
}

.container-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 40px 20px;
  max-width: 1100px;
  margin: auto auto;
}

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

.containerbtn {
  display: inline-block;
  background: #1e3a5f;
  color: #fff;
  padding: 10px 18px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s ease;
}

.btn:hover {
  background: #2d4f80;
}

.pagination {
  text-align: center;
  margin: 30px 0 10px;
}

.pagination a {
  margin: 0 8px;
  text-decoration: none;
  color: #1e3a5f;
  font-weight: bold;
}

.pagination a:hover {
  text-decoration: underline;
}

@media (max-width: 992px) {
  .container-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .container-grid {
    grid-template-columns: 1fr;
  }
}

.aboutphoto {
  border-radius: 20px;
  max-width: 880px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 60px 20px;
}
</style>
